import {
  Box3,
  BufferGeometry,
  ExtrudeGeometry,
  ShapePath,
  Shape,
  Vector2,
  Vector3,
} from 'three'
import { mergeGeometries, toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js'

export type SourceState =
  | {
      alignment?: 'left' | 'center' | 'right'
      fontLabel?: string
      kind: 'text'
      label: string
      letterSpacing: number
      text: string
    }
  | {
      kind: 'svg'
      label: string
      splitByColor?: boolean
      svg: string
    }

export type BevelSettings = {
  enabled: boolean
  segments: number
  size: number
  thickness: number
}

export type ExtrusionSettings = {
  curveSegments: number
  creaseAngle: number
  depth: number
  detail: number
  rotationQuarterTurns: number
  scaleX: number
  scaleY: number
  tessellationIterations: number
  bevel: BevelSettings
}

export type ContourSettings = {
  bevel: BevelSettings
  depth: number
  enabled: boolean
  width: number
}

export type GeneratedPart = {
  color: string | null
  geometry: BufferGeometry
  id: 'base' | 'contour'
  key: string
  label: string
  selectable: boolean
}

export type GeneratedModel = {
  label: string
  parts: GeneratedPart[]
  stats: {
    partCount: number
    triangleCount: number
    vertexCount: number
  }
}

export type OutlineTextFont = {
  forEachGlyph: (
    text: string,
    x: number,
    y: number,
    fontSize: number,
    options: {
      kerning?: boolean
      letterSpacing?: number
    },
    callback: (
      glyph: OutlineGlyph,
      x: number,
      y: number,
      fontSize: number,
      options: {
        kerning?: boolean
        letterSpacing?: number
      },
    ) => void,
  ) => number
  getKerningValue?: (leftGlyph: OutlineGlyph, rightGlyph: OutlineGlyph) => number
  getAdvanceWidth?: (
    text: string,
    fontSize: number,
    options?: {
      kerning?: boolean
      letterSpacing?: number
    },
  ) => number
  getPath?: (
    text: string,
    x: number,
    y: number,
    fontSize: number,
    options?: {
      kerning?: boolean
      letterSpacing?: number
    },
  ) => {
    toPathData(options?: {
      decimalPlaces?: number
      flipY?: boolean
      flipYBase?: number
      optimize?: boolean
      scale?: number
      x?: number
      y?: number
    }): string
  }
  stringToGlyphs: (text: string) => OutlineGlyph[]
  unitsPerEm?: number
}

export type OutlineGlyph = {
  advanceWidth?: number
  getPath: (
    x: number,
    y: number,
    fontSize: number,
  ) => {
    toPathData(options?: {
      decimalPlaces?: number
      flipY?: boolean
      flipYBase?: number
      optimize?: boolean
      scale?: number
      x?: number
      y?: number
    }): string
  }
}

const SAMPLE_DIVISIONS = 48
const DEFAULT_FONT_SIZE = 130
const TINY_TEXT_ARTIFACT_AREA = 24

type ShapeGroup = {
  color: string | null
  key: string
  label: string
  selectable: boolean
  shapes: Shape[]
}

const sanitizeColorKey = (value: string) => value.replace(/[^a-z0-9]+/gi, '-')

const normalizeSvgPaint = (value: unknown) => {
  if (typeof value !== 'string') {
    return null
  }

  const normalized = value.trim().toLowerCase()

  if (
    !normalized ||
    normalized === 'none' ||
    normalized === 'transparent' ||
    normalized === 'currentcolor' ||
    normalized.startsWith('url(')
  ) {
    return null
  }

  return normalized
}

const getPathColorToken = (path: ShapePath & { color?: { getHexString?: () => string }; userData?: Record<string, any> }) => {
  const fill =
    normalizeSvgPaint(path.userData?.style?.fill) ??
    normalizeSvgPaint(path.userData?.style?.stroke)

  if (fill) {
    return fill
  }

  const hex = path.color?.getHexString?.()
  return hex ? `#${hex}` : '#111111'
}

const getSignedArea = (points: Vector2[]) => {
  let area = 0

  for (let index = 0; index < points.length; index += 1) {
    const current = points[index]
    const next = points[(index + 1) % points.length]
    area += current.x * next.y - next.x * current.y
  }

  return area / 2
}

const getPolygonCentroid = (points: Vector2[]) => {
  const signedArea = getSignedArea(points)

  if (Math.abs(signedArea) < 0.00001) {
    return points[0]?.clone() ?? new Vector2()
  }

  let cx = 0
  let cy = 0

  for (let index = 0; index < points.length; index += 1) {
    const current = points[index]
    const next = points[(index + 1) % points.length]
    const factor = current.x * next.y - next.x * current.y
    cx += (current.x + next.x) * factor
    cy += (current.y + next.y) * factor
  }

  const divisor = 6 * signedArea
  return new Vector2(cx / divisor, cy / divisor)
}

const pointOnSegment = (point: Vector2, start: Vector2, end: Vector2) => {
  const cross =
    (point.y - start.y) * (end.x - start.x) - (point.x - start.x) * (end.y - start.y)

  if (Math.abs(cross) > 0.0001) {
    return false
  }

  const dot =
    (point.x - start.x) * (end.x - start.x) + (point.y - start.y) * (end.y - start.y)

  if (dot < 0) {
    return false
  }

  const squaredLength =
    (end.x - start.x) * (end.x - start.x) + (end.y - start.y) * (end.y - start.y)

  return dot <= squaredLength
}

const pointInPolygon = (point: Vector2, polygon: Vector2[]) => {
  let inside = false

  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index++) {
    const currentPoint = polygon[index]
    const previousPoint = polygon[previous]

    if (pointOnSegment(point, previousPoint, currentPoint)) {
      return true
    }

    const intersects =
      currentPoint.y > point.y !== previousPoint.y > point.y &&
      point.x <
        ((previousPoint.x - currentPoint.x) * (point.y - currentPoint.y)) /
          (previousPoint.y - currentPoint.y) +
          currentPoint.x

    if (intersects) {
      inside = !inside
    }
  }

  return inside
}

const keepOuterShapesOnly = (shapes: Shape[]) => {
  const sampled = shapes
    .map((shape) => {
      const outline = shape.extractPoints(SAMPLE_DIVISIONS).shape
      if (outline.length < 3) {
        return null
      }

      return {
        area: Math.abs(getSignedArea(outline)),
        centroid: getPolygonCentroid(outline),
        outline,
        shape,
      }
    })
    .filter((entry): entry is NonNullable<typeof entry> => !!entry)

  return sampled
    .filter((candidate, candidateIndex) => {
      return !sampled.some((other, otherIndex) => {
        if (candidateIndex === otherIndex) {
          return false
        }

        if (other.area <= candidate.area + 0.0001) {
          return false
        }

        return pointInPolygon(candidate.centroid, other.outline)
      })
    })
    .map(({ shape }) => {
      const outerShape = shape.clone()
      outerShape.holes = []
      return outerShape
    })
}

const createShapeGeometry = (
  shapes: Shape[],
  settings:
    | ExtrusionSettings
    | (Pick<ContourSettings, 'depth' | 'bevel'> & { tessellationIterations?: number }),
  depthOverride?: number,
  options?: {
    flipY?: boolean
  },
) => {
  const merged = shapes
    .map((shape) => {
      const geometry = new ExtrudeGeometry(shape, {
        bevelEnabled: settings.bevel.enabled,
        bevelSegments: settings.bevel.segments,
        bevelSize: settings.bevel.size,
        bevelThickness: settings.bevel.thickness,
        curveSegments: 'curveSegments' in settings ? settings.curveSegments : 20,
        depth: Math.abs(depthOverride ?? settings.depth),
        steps: 'detail' in settings ? settings.detail : 1,
      })

      if ((depthOverride ?? settings.depth) < 0) {
        geometry.translate(0, 0, depthOverride ?? settings.depth)
      }

      geometry.computeVertexNormals()
      return geometry
    })
    .filter(Boolean)

  const combined =
    merged.length === 1
      ? merged[0]
      : mergeGeometries(merged, false) ?? merged[0]

  if (options?.flipY ?? true) {
    combined.scale(1, -1, 1)
  }

  const scaleX = 'scaleX' in settings ? settings.scaleX : 1
  const scaleY = 'scaleY' in settings ? settings.scaleY : 1
  combined.scale(scaleX, scaleY, 1)

  if ('rotationQuarterTurns' in settings) {
    const normalizedTurns = ((settings.rotationQuarterTurns % 4) + 4) % 4
    if (normalizedTurns !== 0) {
      combined.rotateZ(-normalizedTurns * (Math.PI / 2))
    }
  }

  const tessellationIterations = Math.max(0, Math.floor(settings.tessellationIterations ?? 0))
  const creaseAngleDegrees = 'creaseAngle' in settings ? settings.creaseAngle : 180
  const normalizedCrease = Math.max(0, Math.min(180, creaseAngleDegrees))
  const finalizeGeometry = (geometry: BufferGeometry) => {
    geometry.computeVertexNormals()
    if (normalizedCrease >= 150) {
      geometry.computeBoundingBox()
      geometry.computeBoundingSphere()
      return geometry
    }

    const creased = toCreasedNormals(geometry, (normalizedCrease * Math.PI) / 180)
    if (creased !== geometry) {
      geometry.dispose()
    }
    creased.computeVertexNormals()
    creased.computeBoundingBox()
    creased.computeBoundingSphere()
    return creased
  }

  if (tessellationIterations > 0) {
    combined.computeBoundingBox()
    const size = combined.boundingBox?.getSize(new Vector3()) ?? new Vector3(1, 1, 1)
    const longestEdge = Math.max(size.x, size.y, size.z, 1)
    const maxEdgeLength = Math.max(0.45, longestEdge / (10 + tessellationIterations * 6))
    const modifier = new TessellateModifier(maxEdgeLength, tessellationIterations)
    const tessellated = modifier.modify(combined)
    combined.dispose()
    return finalizeGeometry(tessellated)
  }

  return finalizeGeometry(combined)
}

const buildTextShapes = (
  font: OutlineTextFont,
  text: string,
  size = DEFAULT_FONT_SIZE,
  letterSpacing = 0,
  alignment: 'left' | 'center' | 'right' = 'left',
) => {
  const normalizedText = text
    .replace(/\r\n?/g, '\n')
    .replace(/[\u2028\u2029]/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
  const lineHeight = size * 1.18
  const filterTinyArtifacts = (shapes: Shape[]) =>
    shapes.filter((shape) => {
      shape.extractPoints(8)
      const bounds = new Box3().setFromPoints(
        shape.getPoints(SAMPLE_DIVISIONS).map((point) => new Vector3(point.x, point.y, 0)),
      )
      const size = bounds.getSize(new Vector3())
      const area = size.x * size.y
      return (
        Number.isFinite(area) &&
        area > TINY_TEXT_ARTIFACT_AREA &&
        size.x > 5 &&
        size.y > 5
      )
    })

  return normalizedText
    .split('\n')
    .flatMap((line, lineIndex) => {
    if (!line.trim()) {
      return []
    }

    const measuredLineWidth =
      font.getAdvanceWidth?.(line, size, {
        kerning: true,
        letterSpacing,
      }) ??
      font.forEachGlyph(
        line,
        0,
        0,
        size,
        {
          kerning: true,
          letterSpacing,
        },
        () => {},
      )
    const startX =
      alignment === 'center'
        ? -measuredLineWidth / 2
        : alignment === 'right'
          ? -measuredLineWidth
          : 0
    const baselineY = lineIndex * lineHeight
    const shapes: Shape[] = []

    if (font.getPath) {
      const linePath = font.getPath(line, startX, baselineY, size, {
        kerning: true,
        letterSpacing,
      })
      const pathData = linePath.toPathData({
        decimalPlaces: 3,
        flipY: false,
        optimize: false,
      })

      if (!pathData.trim()) {
        return []
      }

      const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" /></svg>`
      const parsed = new SVGLoader().parse(svgMarkup)
      return filterTinyArtifacts(parsed.paths.flatMap((path) => SVGLoader.createShapes(path)))
    }

    font.forEachGlyph(
      line,
      startX,
      baselineY,
      size,
      {
        kerning: true,
        letterSpacing,
      },
      (glyph, glyphX, glyphY, glyphFontSize) => {
        const glyphPath = glyph.getPath(glyphX, glyphY, glyphFontSize)
        const pathData = glyphPath.toPathData({
          decimalPlaces: 3,
          flipY: false,
          optimize: false,
        })

        if (!pathData.trim()) {
          return
        }

        const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" /></svg>`
        const parsed = new SVGLoader().parse(svgMarkup)
        shapes.push(...filterTinyArtifacts(parsed.paths.flatMap((path) => SVGLoader.createShapes(path))))
      },
    )

      return shapes
    })
}

const parseSvgColor = (value: string | null) => {
  if (!value) {
    return null
  }

  const normalized = value.trim().toLowerCase()
  if (/^#[0-9a-f]{3}$/i.test(normalized)) {
    return normalized
      .slice(1)
      .split('')
      .map((entry) => parseInt(`${entry}${entry}`, 16))
  }

  if (/^#[0-9a-f]{6}$/i.test(normalized)) {
    return [
      parseInt(normalized.slice(1, 3), 16),
      parseInt(normalized.slice(3, 5), 16),
      parseInt(normalized.slice(5, 7), 16),
    ]
  }

  const rgbMatch = normalized.match(
    /^rgba?\(\s*([0-9.]+)\s*[, ]\s*([0-9.]+)\s*[, ]\s*([0-9.]+)(?:\s*[,/]\s*[0-9.]+\s*)?\)$/i,
  )
  if (!rgbMatch) {
    return null
  }

  return rgbMatch.slice(1, 4).map((entry) => Math.min(Math.max(Number(entry), 0), 255))
}

const getColorDepthScale = (color: string | null) => {
  const rgb = parseSvgColor(color)
  if (!rgb) {
    return 1
  }

  const [r, g, b] = rgb
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return 0.18 + luminance * 0.82
}

const getShapeGroupsFromSource = (source: SourceState, font: OutlineTextFont | null): ShapeGroup[] => {
  if (source.kind === 'text') {
    if (!font) {
      throw new Error('text font is loading')
    }

    if (!source.text.trim()) {
      throw new Error('enter some text first')
    }

    return [
      {
        color: null,
        key: 'base',
        label: source.label,
        selectable: false,
        shapes: buildTextShapes(
          font,
          source.text,
          DEFAULT_FONT_SIZE,
          source.letterSpacing,
          source.alignment ?? 'left',
        ),
      },
    ]
  }

  const data = new SVGLoader().parse(source.svg)
  const groupedShapes = source.splitByColor
    ? data.paths.reduce<Map<string, Shape[]>>((groups, path) => {
        const token = getPathColorToken(path)
        const shapes = keepOuterShapesOnly(SVGLoader.createShapes(path))

        if (shapes.length === 0) {
          return groups
        }

        const bucket = groups.get(token) ?? []
        bucket.push(...shapes)
        groups.set(token, bucket)
        return groups
      }, new Map())
    : new Map<string, Shape[]>([
        [
          'base',
          keepOuterShapesOnly(data.paths.flatMap((path) => SVGLoader.createShapes(path))),
        ],
      ])

  const groups = Array.from(groupedShapes.entries())
    .map(([token, shapes], index) => ({
      color: source.splitByColor ? token : null,
      key: source.splitByColor ? `base-${sanitizeColorKey(token)}` : 'base',
      label: source.splitByColor ? `color ${index + 1}` : source.label,
      selectable: !!source.splitByColor,
      shapes,
    }))
    .filter((group) => group.shapes.length > 0)

  if (groups.length === 0) {
    throw new Error('no extrudable filled shapes were found in the svg')
  }

  return groups
}

const normalizeParts = (parts: GeneratedPart[]) => {
  const aggregateBounds = new Box3()
  const scratchBounds = new Box3()

  parts.forEach((part, index) => {
    part.geometry.computeBoundingBox()
    if (!part.geometry.boundingBox) {
      return
    }

    if (index === 0) {
      aggregateBounds.copy(part.geometry.boundingBox)
      return
    }

    aggregateBounds.union(scratchBounds.copy(part.geometry.boundingBox))
  })

  const center = aggregateBounds.getCenter(new Vector3())

  parts.forEach((part) => {
    part.geometry.translate(-center.x, -center.y, -center.z)
    part.geometry.computeVertexNormals()
    part.geometry.computeBoundingBox()
    part.geometry.computeBoundingSphere()
  })
}

const countTriangles = (geometry: BufferGeometry) => {
  const index = geometry.getIndex()
  if (index) {
    return Math.floor(index.count / 3)
  }

  const position = geometry.getAttribute('position')
  return position ? Math.floor(position.count / 3) : 0
}

const countVertices = (geometry: BufferGeometry) => {
  const position = geometry.getAttribute('position')
  return position?.count ?? 0
}

export const buildModelDefinition = (
  source: SourceState,
  font: OutlineTextFont | null,
  extrusion: ExtrusionSettings,
  _contour: ContourSettings,
  partDepths?: Record<string, number>,
  depthDisplaceEnabled = false,
): GeneratedModel => {
  const groups = getShapeGroupsFromSource(source, font)
  const allShapes = groups.flatMap((group) => group.shapes)
  const flipY = true

  if (allShapes.length === 0) {
    throw new Error('Herhangi bir shape uretilmedi.')
  }

  const parts: GeneratedPart[] = groups.map((group) => {
    const baseDepth = group.selectable ? (partDepths?.[group.key] ?? extrusion.depth) : extrusion.depth
    const effectiveDepth =
      depthDisplaceEnabled && source.kind === 'svg' && group.color
        ? baseDepth * getColorDepthScale(group.color)
        : baseDepth

    return {
      color: group.color,
      geometry: createShapeGeometry(group.shapes, extrusion, effectiveDepth, { flipY }),
      id: 'base',
      key: group.key,
      label: group.label,
      selectable: group.selectable,
    }
  })

  normalizeParts(parts)

  return {
    label: source.label,
    parts,
    stats: {
      partCount: parts.length,
      triangleCount: parts.reduce((sum, part) => sum + countTriangles(part.geometry), 0),
      vertexCount: parts.reduce((sum, part) => sum + countVertices(part.geometry), 0),
    },
  }
}
