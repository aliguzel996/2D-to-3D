import { Group, Mesh, MeshStandardMaterial, Vector2, Vector3 } from 'three'
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js'
import type { GeneratedModel } from './extrusion'
import type { SurfaceState } from './materialSystem'
import type { ViewLightSettings } from './viewport'

type ZipEntry = {
  bytes: Uint8Array
  fileName: string
}

const DEG_TO_RAD = Math.PI / 180

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const hexToRgb = (value: string) => {
  const normalized = value.replace('#', '')
  const source =
    normalized.length === 3
      ? normalized
          .split('')
          .map((entry) => `${entry}${entry}`)
          .join('')
      : normalized.padEnd(6, '0').slice(0, 6)

  return {
    b: parseInt(source.slice(4, 6), 16),
    g: parseInt(source.slice(2, 4), 16),
    r: parseInt(source.slice(0, 2), 16),
  }
}

const mixRgb = (
  left: ReturnType<typeof hexToRgb>,
  right: ReturnType<typeof hexToRgb>,
  amount: number,
) => ({
  b: Math.round(left.b + (right.b - left.b) * amount),
  g: Math.round(left.g + (right.g - left.g) * amount),
  r: Math.round(left.r + (right.r - left.r) * amount),
})

const rgbToCss = (rgb: ReturnType<typeof hexToRgb>) => `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

const buildLightDirections = (light: ViewLightSettings) => {
  const turn = light.turn * DEG_TO_RAD
  const lift = light.lift * DEG_TO_RAD
  const primary = new Vector3(
    Math.cos(turn) * Math.cos(lift),
    Math.sin(lift),
    Math.sin(turn) * Math.cos(lift),
  ).normalize()
  const fill = new Vector3(-primary.x * 0.6, Math.max(0.2, Math.abs(primary.y) * 0.5), -primary.z * 0.6).normalize()
  const ambient =
    light.type === 'sun' ? 0.42 + light.fill * 0.22 : 0.54 + light.fill * 0.34

  return {
    ambient,
    fill,
    fillStrength: light.type === 'sun' ? light.fill * 0.32 : 0.26 + light.fill * 0.38,
    primary,
    primaryStrength:
      light.type === 'sun' ? light.intensity * 0.48 : light.intensity * 0.34,
  }
}

const getShadedColor = (
  baseColor: string,
  surface: SurfaceState,
  light: ViewLightSettings,
  normal: Vector3,
) => {
  const normalDirection = normal.clone().normalize()
  const lighting = buildLightDirections(light)
  const baseRgb = hexToRgb(baseColor)
  const coatingRgb = hexToRgb(surface.coatingColor)
  const primary = Math.max(0, normalDirection.dot(lighting.primary))
  const fill = Math.max(0, normalDirection.dot(lighting.fill))
  const view = new Vector3(0.24, 0.22, 1).normalize()
  const halfVector = lighting.primary.clone().add(view).normalize()
  const specular = Math.pow(Math.max(0, normalDirection.dot(halfVector)), 10 + surface.coating * 54)
  const lightValue = clamp(
    lighting.ambient +
      primary * lighting.primaryStrength +
      fill * lighting.fillStrength +
      specular * (0.08 + surface.reflection * 0.28),
    0,
    2.4,
  )
  const coated = mixRgb(baseRgb, coatingRgb, clamp(surface.coating * 0.42 + specular * 0.22, 0, 0.68))

  return {
    b: clamp(Math.round(coated.b * lightValue), 0, 255),
    g: clamp(Math.round(coated.g * lightValue), 0, 255),
    r: clamp(Math.round(coated.r * lightValue), 0, 255),
  }
}

const drawTriangle = (
  context: CanvasRenderingContext2D,
  size: number,
  uvA: Vector2,
  uvB: Vector2,
  uvC: Vector2,
  fillStyle: string,
) => {
  context.beginPath()
  context.moveTo(uvA.x * size, (1 - uvA.y) * size)
  context.lineTo(uvB.x * size, (1 - uvB.y) * size)
  context.lineTo(uvC.x * size, (1 - uvC.y) * size)
  context.closePath()
  context.fillStyle = fillStyle
  context.fill()
}

const buildBakeCanvas = (
  model: GeneratedModel,
  surface: SurfaceState,
  colors: { base: string; contour: string },
  light: ViewLightSettings,
  size: number,
) => {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Bake canvas olusturulamadi.')
  }

  context.clearRect(0, 0, size, size)

  model.parts.forEach((part) => {
    const geometry = part.geometry
    geometry.computeVertexNormals()
    const position = geometry.getAttribute('position')
    const normal = geometry.getAttribute('normal')
    const uv = geometry.getAttribute('uv')

    if (!position || !normal || !uv) {
      return
    }

    const index = geometry.index
    const triangleCount = index ? index.count / 3 : position.count / 3
    const partBaseColor =
      part.id === 'base' ? part.color ?? colors.base : colors.contour

    for (let triangleIndex = 0; triangleIndex < triangleCount; triangleIndex += 1) {
      const a = index ? index.getX(triangleIndex * 3) : triangleIndex * 3
      const b = index ? index.getX(triangleIndex * 3 + 1) : triangleIndex * 3 + 1
      const c = index ? index.getX(triangleIndex * 3 + 2) : triangleIndex * 3 + 2

      const uvA = new Vector2(uv.getX(a), uv.getY(a))
      const uvB = new Vector2(uv.getX(b), uv.getY(b))
      const uvC = new Vector2(uv.getX(c), uv.getY(c))
      const triangleNormal = new Vector3(
        normal.getX(a) + normal.getX(b) + normal.getX(c),
        normal.getY(a) + normal.getY(b) + normal.getY(c),
        normal.getZ(a) + normal.getZ(b) + normal.getZ(c),
      ).normalize()
      const shaded = getShadedColor(partBaseColor, surface, light, triangleNormal)
      drawTriangle(context, size, uvA, uvB, uvC, rgbToCss(shaded))
    }
  })

  return canvas
}

const assignMaterialName = (material: MeshStandardMaterial, name: string) => {
  material.name = name
}

const buildObjText = (model: GeneratedModel, materialName: string) => {
  const group = new Group()

  model.parts.forEach((part, index) => {
    const material = new MeshStandardMaterial()
    assignMaterialName(material, materialName)
    const mesh = new Mesh(part.geometry.clone(), material)
    mesh.name = part.key || `${part.id}-${index + 1}`
    group.add(mesh)
  })

  const objText = new OBJExporter().parse(group)
  group.traverse((child) => {
    if (!(child instanceof Mesh)) {
      return
    }

    child.geometry.dispose()
    if (Array.isArray(child.material)) {
      child.material.forEach((entry) => entry.dispose())
    } else {
      child.material.dispose()
    }
  })

  return objText
}

const crcTable = (() => {
  const table = new Uint32Array(256)

  for (let index = 0; index < 256; index += 1) {
    let value = index
    for (let bit = 0; bit < 8; bit += 1) {
      value = (value & 1) !== 0 ? 0xedb88320 ^ (value >>> 1) : value >>> 1
    }
    table[index] = value >>> 0
  }

  return table
})()

const computeCrc32 = (bytes: Uint8Array) => {
  let crc = 0xffffffff
  for (let index = 0; index < bytes.length; index += 1) {
    crc = crcTable[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}

const dateToDos = (date: Date) => {
  const year = Math.max(1980, date.getFullYear())
  const dosTime =
    ((date.getHours() & 0x1f) << 11) |
    ((date.getMinutes() & 0x3f) << 5) |
    Math.floor(date.getSeconds() / 2)
  const dosDate =
    (((year - 1980) & 0x7f) << 9) |
    (((date.getMonth() + 1) & 0x0f) << 5) |
    (date.getDate() & 0x1f)

  return {
    dosDate,
    dosTime,
  }
}

const concatenateUint8Arrays = (chunks: Uint8Array[]) => {
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0)
  const output = new Uint8Array(totalLength)
  let offset = 0

  chunks.forEach((chunk) => {
    output.set(chunk, offset)
    offset += chunk.length
  })

  return output
}

export const createStoredZip = (entries: ZipEntry[]) => {
  const localParts: Uint8Array[] = []
  const centralParts: Uint8Array[] = []
  const encoder = new TextEncoder()
  let offset = 0
  const now = dateToDos(new Date())

  entries.forEach((entry) => {
    const nameBytes = encoder.encode(entry.fileName)
    const crc32 = computeCrc32(entry.bytes)

    const localHeader = new Uint8Array(30 + nameBytes.length)
    const localView = new DataView(localHeader.buffer)
    localView.setUint32(0, 0x04034b50, true)
    localView.setUint16(4, 20, true)
    localView.setUint16(10, now.dosTime, true)
    localView.setUint16(12, now.dosDate, true)
    localView.setUint32(14, crc32, true)
    localView.setUint32(18, entry.bytes.length, true)
    localView.setUint32(22, entry.bytes.length, true)
    localView.setUint16(26, nameBytes.length, true)
    localHeader.set(nameBytes, 30)
    localParts.push(localHeader, entry.bytes)

    const centralHeader = new Uint8Array(46 + nameBytes.length)
    const centralView = new DataView(centralHeader.buffer)
    centralView.setUint32(0, 0x02014b50, true)
    centralView.setUint16(4, 20, true)
    centralView.setUint16(6, 20, true)
    centralView.setUint16(12, now.dosTime, true)
    centralView.setUint16(14, now.dosDate, true)
    centralView.setUint32(16, crc32, true)
    centralView.setUint32(20, entry.bytes.length, true)
    centralView.setUint32(24, entry.bytes.length, true)
    centralView.setUint16(28, nameBytes.length, true)
    centralView.setUint32(42, offset, true)
    centralHeader.set(nameBytes, 46)
    centralParts.push(centralHeader)

    offset += localHeader.length + entry.bytes.length
  })

  const centralDirectory = concatenateUint8Arrays(centralParts)
  const localDirectory = concatenateUint8Arrays(localParts)
  const endRecord = new Uint8Array(22)
  const endView = new DataView(endRecord.buffer)
  endView.setUint32(0, 0x06054b50, true)
  endView.setUint16(8, entries.length, true)
  endView.setUint16(10, entries.length, true)
  endView.setUint32(12, centralDirectory.length, true)
  endView.setUint32(16, localDirectory.length, true)

  return concatenateUint8Arrays([localDirectory, centralDirectory, endRecord])
}

const canvasToPngBytes = async (canvas: HTMLCanvasElement) => {
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((nextBlob) => {
      if (!nextBlob) {
        reject(new Error('Bake texture olusturulamadi.'))
        return
      }
      resolve(nextBlob)
    }, 'image/png')
  })

  return new Uint8Array(await blob.arrayBuffer())
}

export const exportBakedObjZip = async (options: {
  baseColor: string
  contourColor: string
  light: ViewLightSettings
  model: GeneratedModel
  surface: SurfaceState
  textureSize: number
}) => {
  const materialName = '2d_to_3d_bake'
  const textureFileName = '2d-to-3d-bake.png'
  const mtlFileName = '2d-to-3d-bake.mtl'
  const canvas = buildBakeCanvas(
    options.model,
    options.surface,
    {
      base: options.baseColor,
      contour: options.contourColor,
    },
    options.light,
    options.textureSize,
  )
  const objText = `mtllib ${mtlFileName}\n${buildObjText(options.model, materialName)}`
  const mtlText = [
    `newmtl ${materialName}`,
    'Ka 1.000000 1.000000 1.000000',
    'Kd 1.000000 1.000000 1.000000',
    'Ks 0.000000 0.000000 0.000000',
    'Ns 10.000000',
    'd 1.000000',
    'illum 2',
    `map_Kd ${textureFileName}`,
    '',
  ].join('\n')

  const zipBytes = createStoredZip([
    {
      bytes: new TextEncoder().encode(objText),
      fileName: '2d-to-3d-bake.obj',
    },
    {
      bytes: new TextEncoder().encode(mtlText),
      fileName: mtlFileName,
    },
    {
      bytes: await canvasToPngBytes(canvas),
      fileName: textureFileName,
    },
  ])

  return {
    fileName: '2d-to-3d-bake.zip',
    zipBytes,
  }
}
