import {
  BufferGeometry,
  CanvasTexture,
  ClampToEdgeWrapping,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  MeshPhysicalMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector3,
} from 'three'

export type MaterialPresetKey = 'gold' | 'obsidian' | 'ice' | 'concrete'

export type SurfaceState = {
  bump: number
  bumpImage: string | null
  coating: number
  coatingColor: string
  diffuseColor: string
  preset: MaterialPresetKey
  reflection: number
  refraction: number
  refractionImage: string | null
  uvOffsetX: number
  uvOffsetY: number
  uvRotation: number
  uvScaleX: number
  uvScaleY: number
  uvTileLock: boolean
}

type TextureSet = {
  bump: CanvasTexture
  color: CanvasTexture
  roughness: CanvasTexture
}

type MaterialPreset = {
  attenuationColor: string
  attenuationDistance: number
  baseColor: string
  bumpStrength: number
  coatingColor: string
  defaults: Pick<SurfaceState, 'bump' | 'coating' | 'reflection' | 'refraction'>
  label: string
  metalness: number
  roughness: number
  textureFactory: () => TextureSet
}

const MATERIAL_PRESETS: Record<MaterialPresetKey, MaterialPreset> = {
  gold: {
    attenuationColor: '#f7d87f',
    attenuationDistance: 4.5,
    baseColor: '#d6b24a',
    bumpStrength: 0.22,
    coatingColor: '#fff4ca',
    defaults: {
      reflection: 0.92,
      refraction: 0.04,
      bump: 0.18,
      coating: 0.22,
    },
    label: 'gold',
    metalness: 0.96,
    roughness: 0.24,
    textureFactory: () =>
      createPresetTextures(280, (ctx, size, rand) => {
        ctx.fillStyle = '#d4af37'
        ctx.fillRect(0, 0, size, size)

        for (let index = 0; index < 420; index += 1) {
          const x = rand() * size
          const width = 1 + rand() * 3
          ctx.fillStyle = `rgba(255, 244, 201, ${0.05 + rand() * 0.12})`
          ctx.fillRect(x, 0, width, size)
        }

        for (let index = 0; index < 120; index += 1) {
          const y = rand() * size
          ctx.fillStyle = `rgba(126, 83, 6, ${0.03 + rand() * 0.06})`
          ctx.fillRect(0, y, size, 1 + rand() * 1.5)
        }
      }),
  },
  obsidian: {
    attenuationColor: '#0c0b12',
    attenuationDistance: 2.8,
    baseColor: '#111016',
    bumpStrength: 0.12,
    coatingColor: '#a694ff',
    defaults: {
      reflection: 0.86,
      refraction: 0.1,
      bump: 0.12,
      coating: 0.88,
    },
    label: 'obsidian',
    metalness: 0.18,
    roughness: 0.1,
    textureFactory: () =>
      createPresetTextures(280, (ctx, size, rand) => {
        ctx.fillStyle = '#0b0a0f'
        ctx.fillRect(0, 0, size, size)

        for (let index = 0; index < 36; index += 1) {
          const startX = rand() * size
          const startY = rand() * size
          const endX = startX + (rand() - 0.5) * 180
          const endY = startY + (rand() - 0.5) * 180
          ctx.strokeStyle = `rgba(118, 103, 168, ${0.07 + rand() * 0.11})`
          ctx.lineWidth = 1 + rand() * 2
          ctx.beginPath()
          ctx.moveTo(startX, startY)
          ctx.quadraticCurveTo(
            startX + (rand() - 0.5) * 120,
            startY + (rand() - 0.5) * 120,
            endX,
            endY,
          )
          ctx.stroke()
        }
      }),
  },
  ice: {
    attenuationColor: '#d7f6ff',
    attenuationDistance: 0.95,
    baseColor: '#a8eeff',
    bumpStrength: 0.3,
    coatingColor: '#ffffff',
    defaults: {
      reflection: 0.72,
      refraction: 0.88,
      bump: 0.24,
      coating: 0.42,
    },
    label: 'ice',
    metalness: 0.02,
    roughness: 0.08,
    textureFactory: () =>
      createPresetTextures(320, (ctx, size, rand) => {
        const gradient = ctx.createLinearGradient(0, 0, size, size)
        gradient.addColorStop(0, '#d9fbff')
        gradient.addColorStop(0.48, '#8cdfff')
        gradient.addColorStop(1, '#5fb8df')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, size, size)

        for (let index = 0; index < 48; index += 1) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 + rand() * 0.14})`
          ctx.lineWidth = 1 + rand() * 2.6
          ctx.beginPath()
          ctx.moveTo(rand() * size, rand() * size)
          ctx.lineTo(rand() * size, rand() * size)
          ctx.stroke()
        }
      }),
  },
  concrete: {
    attenuationColor: '#c0c0bc',
    attenuationDistance: 5.8,
    baseColor: '#b9b8b4',
    bumpStrength: 0.42,
    coatingColor: '#f0f0f0',
    defaults: {
      reflection: 0.22,
      refraction: 0.02,
      bump: 0.34,
      coating: 0.06,
    },
    label: 'concrete',
    metalness: 0.04,
    roughness: 0.92,
    textureFactory: () =>
      createPresetTextures(300, (ctx, size, rand) => {
        ctx.fillStyle = '#bebdb8'
        ctx.fillRect(0, 0, size, size)

        for (let index = 0; index < 2200; index += 1) {
          const value = 128 + Math.floor(rand() * 82)
          ctx.fillStyle = `rgb(${value}, ${value}, ${value - 8})`
          ctx.beginPath()
          ctx.arc(rand() * size, rand() * size, 1 + rand() * 2.4, 0, Math.PI * 2)
          ctx.fill()
        }
      }),
  },
}

const textureCache = new Map<MaterialPresetKey, TextureSet>()
const customTextureCache = new Map<string, Texture>()
const textureLoader = new TextureLoader()

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const createSeededRandom = (seed: number) => {
  let value = seed % 2147483647

  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

const configureTexture = (
  texture: Texture,
  colorSpace: typeof texture.colorSpace,
) => {
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(1.8, 1.8)
  texture.colorSpace = colorSpace
  texture.needsUpdate = true
}

const createTextureCanvas = (
  size: number,
  seed: number,
  painter: (
    ctx: CanvasRenderingContext2D,
    size: number,
    rand: () => number,
  ) => void,
) => {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Preset texture canvas olusturulamadi.')
  }

  painter(ctx, size, createSeededRandom(seed))
  return canvas
}

const createPresetTextures = (
  size: number,
  painter: (
    ctx: CanvasRenderingContext2D,
    size: number,
    rand: () => number,
  ) => void,
): TextureSet => {
  const color = new CanvasTexture(createTextureCanvas(size, 11, painter))
  const roughness = new CanvasTexture(
    createTextureCanvas(size, 17, (ctx, width, rand) => {
      ctx.fillStyle = '#8c8c8c'
      ctx.fillRect(0, 0, width, width)

      for (let index = 0; index < width * 16; index += 1) {
        const shade = Math.floor(70 + rand() * 130)
        ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`
        ctx.fillRect(
          rand() * width,
          rand() * width,
          2 + rand() * 4,
          2 + rand() * 4,
        )
      }
    }),
  )
  const bump = new CanvasTexture(
    createTextureCanvas(size, 29, (ctx, width, rand) => {
      ctx.fillStyle = '#808080'
      ctx.fillRect(0, 0, width, width)

      for (let index = 0; index < width * 22; index += 1) {
        const shade = Math.floor(50 + rand() * 180)
        ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`
        ctx.beginPath()
        ctx.arc(rand() * width, rand() * width, 1 + rand() * 4, 0, Math.PI * 2)
        ctx.fill()
      }
    }),
  )

  configureTexture(color, SRGBColorSpace)
  configureTexture(roughness, '')
  configureTexture(bump, '')

  roughness.wrapS = ClampToEdgeWrapping
  roughness.wrapT = ClampToEdgeWrapping
  bump.wrapS = ClampToEdgeWrapping
  bump.wrapT = ClampToEdgeWrapping

  return {
    bump,
    color,
    roughness,
  }
}

const getTextures = (preset: MaterialPresetKey) => {
  const cached = textureCache.get(preset)
  if (cached) {
    return cached
  }

  const created = MATERIAL_PRESETS[preset].textureFactory()
  textureCache.set(preset, created)
  return created
}

const applyUvTransform = (texture: Texture | null | undefined, surface: SurfaceState) => {
  if (!texture) {
    return
  }

  const repeatX = 1 / Math.max(surface.uvScaleX, 0.000001)
  const repeatY = 1 / Math.max(surface.uvScaleY, 0.000001)

  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.center.set(0.5, 0.5)
  texture.repeat.set(repeatX, repeatY)
  texture.offset.set(surface.uvOffsetX, surface.uvOffsetY)
  texture.rotation = (surface.uvRotation * Math.PI) / 180
  texture.needsUpdate = true
}

const getCustomTexture = (dataUrl: string | null, colorSpace: typeof SRGBColorSpace | '' = '') => {
  if (!dataUrl) {
    return null
  }

  const cacheKey = `${colorSpace}:${dataUrl}`
  const cached = customTextureCache.get(cacheKey)
  if (cached) {
    return cached
  }

  const texture = textureLoader.load(dataUrl)
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.colorSpace = colorSpace
  texture.needsUpdate = true
  customTextureCache.set(cacheKey, texture)
  return texture
}

export const ensureUvGeometry = (geometry: BufferGeometry) => {
  const position = geometry.getAttribute('position')
  const existingUv = geometry.getAttribute('uv')

  if (!position) {
    return geometry
  }

  if (existingUv && existingUv.count === position.count) {
    return geometry
  }

  const workingGeometry =
    geometry.index || existingUv ? geometry.toNonIndexed() ?? geometry.clone() : geometry

  workingGeometry.computeBoundingBox()
  workingGeometry.computeVertexNormals()

  const workingPosition = workingGeometry.getAttribute('position')
  const normal = workingGeometry.getAttribute('normal')
  const bounds = workingGeometry.boundingBox

  if (!workingPosition || !normal || !bounds) {
    return workingGeometry
  }

  const min = bounds.min
  const size = bounds.getSize(new Vector3())
  const safeSize = new Vector3(size.x || 1, size.y || 1, size.z || 1)
  const uvs = new Float32Array(workingPosition.count * 2)

  for (let index = 0; index < workingPosition.count; index += 1) {
    const px = workingPosition.getX(index)
    const py = workingPosition.getY(index)
    const pz = workingPosition.getZ(index)
    const nx = Math.abs(normal.getX(index))
    const ny = Math.abs(normal.getY(index))
    const nz = Math.abs(normal.getZ(index))
    let u = 0
    let v = 0

    if (nz >= nx && nz >= ny) {
      u = (px - min.x) / safeSize.x
      v = (py - min.y) / safeSize.y
    } else if (ny >= nx && ny >= nz) {
      u = (px - min.x) / safeSize.x
      v = (pz - min.z) / safeSize.z
    } else {
      u = (pz - min.z) / safeSize.z
      v = (py - min.y) / safeSize.y
    }

    uvs[index * 2] = u
    uvs[index * 2 + 1] = v
  }

  workingGeometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2))
  return workingGeometry
}

export const MATERIAL_PRESET_ORDER = Object.keys(
  MATERIAL_PRESETS,
) as MaterialPresetKey[]

export const getPresetLabel = (preset: MaterialPresetKey) =>
  MATERIAL_PRESETS[preset].label

export const createPresetSurface = (preset: MaterialPresetKey): SurfaceState => ({
  bumpImage: null,
  preset,
  diffuseColor: MATERIAL_PRESETS[preset].baseColor,
  coatingColor: MATERIAL_PRESETS[preset].coatingColor,
  ...MATERIAL_PRESETS[preset].defaults,
  refractionImage: null,
  uvOffsetX: 0,
  uvOffsetY: 0,
  uvRotation: 0,
  uvScaleX: 1,
  uvScaleY: 1,
  uvTileLock: true,
})

export const cloneSurfaceState = (surface: SurfaceState): SurfaceState => ({
  ...surface,
})

export const createPhysicalMaterial = (
  surface: SurfaceState,
  colorOverride?: string,
) => {
  const preset = MATERIAL_PRESETS[surface.preset]
  const textures = getTextures(surface.preset)
  const customBump = getCustomTexture(surface.bumpImage)
  const customRefraction = getCustomTexture(surface.refractionImage)
  const reflection = clamp(surface.reflection, 0, 1)
  const bump = clamp(surface.bump, 0, 1)
  const coating = clamp(surface.coating, 0, 1)
  const refraction = clamp(surface.refraction, 0, 1)
  const previewColor = new Color(colorOverride ?? surface.diffuseColor)

  applyUvTransform(textures.color, surface)
  applyUvTransform(textures.roughness, surface)
  applyUvTransform(textures.bump, surface)
  applyUvTransform(customBump, surface)
  applyUvTransform(customRefraction, surface)

  const material = new MeshPhysicalMaterial({
    color: previewColor,
    map: surface.preset === 'concrete' ? null : textures.color,
    metalness: clamp(preset.metalness * 0.35 + reflection * 0.34, 0, 1),
    roughness: clamp(preset.roughness * 0.82 + (1 - reflection) * 0.18, 0.04, 1),
    roughnessMap: surface.preset === 'concrete' ? null : textures.roughness,
    side: DoubleSide,
  })

  material.bumpMap = customBump ?? (surface.preset === 'concrete' ? null : textures.bump)
  material.bumpScale =
    surface.preset === 'concrete'
      ? 0
      : bump * (preset.bumpStrength * 0.38 + coating * 0.04)
  material.transparent = false
  material.opacity = 1
  material.depthWrite = true
  material.polygonOffset = true
  material.polygonOffsetFactor = 1
  material.polygonOffsetUnits = 1
  material.emissive.copy(previewColor.clone().multiplyScalar(0.06))
  material.emissiveIntensity = 0.26 + reflection * 0.08
  material.clearcoat = coating
  material.clearcoatRoughness = clamp(0.08 + (1 - reflection) * 0.42, 0.02, 1)
  material.transmission = refraction * 0.92
  material.thickness = refraction * 1.4
  material.ior = 1 + refraction * 1.25
  material.attenuationColor = new Color(surface.coatingColor)
  material.attenuationDistance = 2 + (1 - refraction) * 6
  material.specularIntensity = clamp(0.18 + coating * 0.82, 0, 1)
  material.specularColor = new Color(surface.coatingColor)
  material.transmissionMap = customRefraction
  material.needsUpdate = true
  return material
}
