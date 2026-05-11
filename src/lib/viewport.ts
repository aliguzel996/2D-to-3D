import {
  AmbientLight,
  BackSide,
  Box3,
  DirectionalLight,
  EdgesGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MOUSE,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  Sphere,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PMREMGenerator } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import {
  cloneSurfaceState,
  createPhysicalMaterial,
  ensureUvGeometry,
  type SurfaceState,
} from './materialSystem'
import type { GeneratedModel } from './extrusion'

export type ViewLightType = 'studio' | 'sun'
export type ViewGradientStop = {
  color: string
  id: string
  offset: number
}

export type ViewLightSettings = {
  distance: number
  fill: number
  intensity: number
  lift: number
  type: ViewLightType
  turn: number
}

export type ViewBackgroundSettings = {
  angle: number
  gradientStops: ViewGradientStop[]
  gridEnabled: boolean
  mode: 'solid' | 'gradient' | 'transparent'
  origin: {
    x: number
    y: number
  }
  solid: string
}

export type ViewRotationSettings = {
  direction: -1 | 1
  enabled: boolean
  speed: number
}

export type ViewOutlineSettings = {
  enabled: boolean
  width: number
}

export type ViewBloomSettings = {
  enabled: boolean
  strength: number
}

export type ViewRenderMode = 'material' | 'outline'
export type ViewCameraState = {
  cameraPosition: {
    x: number
    y: number
    z: number
  }
  target: {
    x: number
    y: number
    z: number
  }
}

type RuntimePart = {
  color: string | null
  edgeLines: LineSegments2
  kind: 'base' | 'contour'
  key: string
  outlineShell: Mesh
  selectable: boolean
  mesh: Mesh
}

const DEG_TO_RAD = Math.PI / 180
const CAMERA_OFFSET = new Vector3(0, 0.16, 2.6)
const BLOOM_LAYER = 1

const bloomCompositeShader = {
  uniforms: {
    baseTexture: { value: null },
    bloomAmount: { value: 0 },
    bloomTexture: { value: null },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D baseTexture;
    uniform sampler2D bloomTexture;
    uniform float bloomAmount;
    varying vec2 vUv;

    void main() {
      vec4 base = texture2D(baseTexture, vUv);
      vec3 bloom = texture2D(bloomTexture, vUv).rgb * bloomAmount;
      vec3 color = base.rgb + bloom * clamp(base.a, 0.0, 1.0);
      gl_FragColor = vec4(color, base.a);
    }
  `,
}

const createOutlineShellMaterial = (color: string) =>
  new MeshBasicMaterial({
    color,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
    side: BackSide,
    toneMapped: false,
    transparent: false,
  })

const createOutlineMaskMaterial = () =>
  new MeshBasicMaterial({
    colorWrite: false,
    depthWrite: true,
    toneMapped: false,
  })

const setOutlineShellColor = (material: unknown, color: string) => {
  if (!(material instanceof MeshBasicMaterial)) {
    return
  }

  material.color.set(color)
  material.needsUpdate = true
}

const disposeMaterial = (material: unknown) => {
  if (!material || typeof material !== 'object') {
    return
  }

  if ('dispose' in material && typeof material.dispose === 'function') {
    material.dispose()
  }
}

const disposeObject = (object: Object3D) => {
  object.traverse((child) => {
    const maybeMesh = child as Mesh
    maybeMesh.geometry?.dispose?.()

    if (Array.isArray(maybeMesh.material)) {
      maybeMesh.material.forEach((material) => disposeMaterial(material))
      return
    }

    disposeMaterial(maybeMesh.material)
  })
}

export class ExtruderViewport {
  private animationFrameId = 0
  private ambientLight: AmbientLight
  private bloomComposer: EffectComposer
  private camera: PerspectiveCamera
  private composer: EffectComposer
  private container: HTMLDivElement
  private controls: OrbitControls
  private bloomRenderPass: RenderPass
  private bloomPass: UnrealBloomPass
  private bloomCompositePass: ShaderPass
  private outlinePass: OutlinePass
  private renderPass: RenderPass
  private directionalLight: DirectionalLight
  private fillLight: DirectionalLight
  private floor: Mesh
  private framedCenter = new Vector3()
  private homeDistance = 7
  private lightSettings: ViewLightSettings = {
    distance: 8.5,
    fill: 0.5,
    intensity: 2.5,
    lift: 38,
    turn: 32,
    type: 'studio',
  }
  private materialTint = {
    base: '#f6c968',
    contour: '#fd6a3a',
  }
  private bloomSettings: ViewBloomSettings = {
    enabled: false,
    strength: 0.8,
  }
  private modelRoot = new Group()
  private lastTickTime = performance.now()
  private pmremGenerator: PMREMGenerator
  private renderer: WebGLRenderer
  private resizeObserver: ResizeObserver
  private runtimeParts: RuntimePart[] = []
  private selectedPartKey: string | null = null
  private scene = new Scene()
  private lastVisibilityRecoveryTime = 0
  private outlineSettings: ViewOutlineSettings = {
    enabled: false,
    width: 0,
  }
  private renderMode: ViewRenderMode = 'material'
  private surface = cloneSurfaceState({
    bump: 0.18,
    bumpImage: null,
    coating: 0.22,
    coatingColor: '#fff4ca',
    diffuseColor: '#d6b24a',
    preset: 'gold',
    reflection: 0.92,
    refraction: 0.04,
    refractionImage: null,
    uvOffsetX: 0,
    uvOffsetY: 0,
    uvRotation: 0,
    uvScaleX: 1,
    uvScaleY: 1,
    uvTileLock: true,
  })
  private rotationSettings: ViewRotationSettings = {
    direction: 1,
    enabled: false,
    speed: 0.18,
  }

  private createControls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enablePan = true
    controls.enableZoom = true
    controls.zoomSpeed = 1.1
    controls.panSpeed = 0.9
    controls.rotateSpeed = 0.85
    controls.screenSpacePanning = true
    controls.mouseButtons.LEFT = MOUSE.ROTATE
    controls.mouseButtons.MIDDLE = MOUSE.DOLLY
    controls.mouseButtons.RIGHT = MOUSE.PAN
    controls.minDistance = 0.04
    controls.maxDistance = Infinity
    controls.target.set(0, 0, 0)
    controls.autoRotate = false
    return controls
  }

  constructor(container: HTMLDivElement, options?: { antialias?: boolean }) {
    this.container = container
    this.camera = new PerspectiveCamera(38, 1, 0.1, 200)
    this.camera.position.copy(CAMERA_OFFSET.clone().multiplyScalar(this.homeDistance))

    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: options?.antialias ?? true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    this.renderer.setSize(container.clientWidth, container.clientHeight, false)
    this.renderer.setClearAlpha(0)
    this.renderer.shadowMap.enabled = false
    this.renderer.outputColorSpace = SRGBColorSpace
    this.container.append(this.renderer.domElement)

    this.controls = this.createControls()
    this.bloomComposer = new EffectComposer(this.renderer)
    this.bloomComposer.renderToScreen = false
    this.bloomRenderPass = new RenderPass(this.scene, this.camera)
    this.bloomRenderPass.clearAlpha = 0
    this.bloomComposer.addPass(this.bloomRenderPass)
    this.bloomPass = new UnrealBloomPass(new Vector2(1, 1), 0.6, 0.18, 0.88)
    this.bloomPass.enabled = false
    this.bloomComposer.addPass(this.bloomPass)

    this.composer = new EffectComposer(this.renderer)
    this.renderPass = new RenderPass(this.scene, this.camera)
    this.renderPass.clearAlpha = 0
    this.composer.addPass(this.renderPass)
    this.outlinePass = new OutlinePass(
      new Vector2(Math.max(container.clientWidth, 320), Math.max(container.clientHeight, 320)),
      this.scene,
      this.camera,
    )
    this.outlinePass.enabled = false
    this.outlinePass.edgeStrength = 6
    this.outlinePass.edgeGlow = 0
    this.outlinePass.edgeThickness = 1
    this.outlinePass.pulsePeriod = 0
    this.outlinePass.visibleEdgeColor.set('#111111')
    this.outlinePass.hiddenEdgeColor.set('#111111')
    this.composer.addPass(this.outlinePass)
    this.bloomCompositePass = new ShaderPass(bloomCompositeShader, 'baseTexture')
    this.bloomCompositePass.uniforms.bloomTexture.value =
      this.bloomComposer.renderTarget2.texture
    this.bloomCompositePass.uniforms.bloomAmount.value = 0
    this.composer.addPass(this.bloomCompositePass)

    this.pmremGenerator = new PMREMGenerator(this.renderer)
    const envScene = new RoomEnvironment()
    this.scene.environment = this.pmremGenerator.fromScene(envScene, 0.04).texture

    this.ambientLight = new AmbientLight('#ffffff', 1.1)
    this.ambientLight.layers.enable(BLOOM_LAYER)
    this.directionalLight = new DirectionalLight('#fff3dd', 2.5)
    this.directionalLight.castShadow = false
    this.directionalLight.layers.enable(BLOOM_LAYER)
    this.fillLight = new DirectionalLight('#d4e9ff', 1.1)
    this.fillLight.layers.enable(BLOOM_LAYER)

    this.floor = new Mesh(new PlaneGeometry(80, 80))
    this.floor.rotation.x = -Math.PI / 2
    this.floor.receiveShadow = false
    this.floor.visible = false

    this.scene.add(this.ambientLight, this.directionalLight, this.fillLight, this.floor, this.modelRoot)

    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(this.container)

    this.updateLights(this.lightSettings)
    this.applyBloom()
    this.applyBackground()
    this.applyRotation()
    this.resize()
    this.tick()
  }

  dispose() {
    cancelAnimationFrame(this.animationFrameId)
    this.resizeObserver.disconnect()
    disposeObject(this.modelRoot)
    this.floor.geometry.dispose()
    disposeMaterial(this.floor.material)
    this.pmremGenerator.dispose()
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }

  setModel(definition: GeneratedModel | null, options?: { preserveView?: boolean }) {
    const preserveView = !!options?.preserveView
    const preservedRotation = this.modelRoot.rotation.clone()
    this.clearModel()

    if (!definition) {
      return
    }

    definition.parts.forEach((part) => {
      const geometry = ensureUvGeometry(part.geometry.clone())
      geometry.computeVertexNormals()

      const material = createPhysicalMaterial(
        this.surface,
        part.id === 'base'
          ? part.color ?? this.materialTint.base
          : this.materialTint.contour,
      )

      const mesh = new Mesh(geometry, material)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.frustumCulled = false
      mesh.userData.extruderPart = part.id
      mesh.layers.enable(BLOOM_LAYER)

      const edgeGeometry = new EdgesGeometry(geometry, 32)
      const edgePositions = edgeGeometry.getAttribute('position')
      const edgeSegmentsGeometry = new LineSegmentsGeometry()
      edgeSegmentsGeometry.setPositions(Array.from(edgePositions.array as Iterable<number>))
      const edgeMaterial = new LineMaterial({
        color: this.materialTint.contour,
        depthTest: true,
        depthWrite: false,
        transparent: true,
        linewidth: 1.6,
        opacity: 0,
        toneMapped: false,
      })
      edgeMaterial.resolution.set(
        Math.max(this.container.clientWidth, 320),
        Math.max(this.container.clientHeight, 320),
      )
      const edgeLines = new LineSegments2(edgeSegmentsGeometry, edgeMaterial)
      edgeLines.frustumCulled = false
      edgeLines.renderOrder = 12
      edgeLines.userData.extruderEdgeOverlay = true
      edgeLines.visible = false
      mesh.add(edgeLines)

      const outlineShell = new Mesh(
        geometry.clone(),
        createOutlineShellMaterial(this.materialTint.contour),
      )
      outlineShell.visible = false
      outlineShell.frustumCulled = false
      outlineShell.renderOrder = 1
      mesh.add(outlineShell)

      this.modelRoot.add(mesh)

      geometry.computeBoundingBox()
      geometry.computeBoundingSphere()

      this.runtimeParts.push({
        color: part.color,
        edgeLines,
        kind: part.id,
        key: part.key,
        outlineShell,
        selectable: part.selectable,
        mesh,
      })
    })

    if (preserveView) {
      this.modelRoot.rotation.copy(preservedRotation)
    } else {
      this.modelRoot.rotation.set(0, 0, 0)
    }
    this.applySelectionHighlight()
    this.syncOutlinePass()
    this.applyOutlineSettings()
    this.applyRenderMode()
    if (!preserveView) {
      this.frameModel()
    }
  }

  setSurface(surface: SurfaceState, tints: { base: string; contour: string }) {
    this.surface = cloneSurfaceState(surface)
    this.materialTint = { ...tints }
    this.runtimeParts.forEach((part) => {
      disposeMaterial(part.mesh.material)
      part.mesh.material = createPhysicalMaterial(
        this.surface,
        part.kind === 'base'
          ? part.color ?? this.materialTint.base
          : this.materialTint.contour,
      )

      const edgeMaterial = part.edgeLines.material
      if (edgeMaterial instanceof LineMaterial) {
        edgeMaterial.color.set(this.materialTint.contour)
        edgeMaterial.needsUpdate = true
      }
      setOutlineShellColor(part.outlineShell.material, this.materialTint.contour)
    })
    this.syncOutlinePass()
    this.applySelectionHighlight()
    this.applyRenderMode()
  }

  setLightSettings(settings: ViewLightSettings) {
    this.lightSettings = settings
    this.updateLights(settings)
  }

  setBloomSettings(settings: ViewBloomSettings) {
    this.bloomSettings = settings
    this.applyBloom()
  }

  setBackgroundSettings(settings: ViewBackgroundSettings) {
    void settings
  }

  setRotationSettings(settings: ViewRotationSettings) {
    this.rotationSettings = settings
    this.applyRotation()
  }

  setOutlineSettings(settings: ViewOutlineSettings) {
    this.outlineSettings = settings
    this.applyOutlineSettings()
  }

  setRenderMode(mode: ViewRenderMode) {
    this.renderMode = mode
    this.applyRenderMode()
  }

  setSelectedPart(key: string | null) {
    this.selectedPartKey = key
    this.applySelectionHighlight()
  }

  captureCanvas() {
    return this.renderer.domElement
  }

  captureAlphaMaskCanvas() {
    const width = this.renderer.domElement.width
    const height = this.renderer.domElement.height
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d', { willReadFrequently: true })

    if (!context) {
      return null
    }

    const overrideMaterial = new MeshBasicMaterial({
      color: '#ffffff',
    })
    const priorOverride = this.scene.overrideMaterial ?? null
    const priorEdgeVisibility = this.runtimeParts.map((part) => part.edgeLines.visible)
    this.runtimeParts.forEach((part) => {
      part.edgeLines.visible = false
      part.outlineShell.visible = false
    })

    this.scene.overrideMaterial = overrideMaterial
    this.renderer.render(this.scene, this.camera)
    context.clearRect(0, 0, width, height)
    context.drawImage(this.renderer.domElement, 0, 0, width, height)

    const frame = context.getImageData(0, 0, width, height)
    for (let index = 0; index < frame.data.length; index += 4) {
      const alpha = frame.data[index + 3]
      frame.data[index] = 255
      frame.data[index + 1] = 255
      frame.data[index + 2] = 255
      frame.data[index + 3] = alpha > 0 ? 255 : 0
    }
    context.putImageData(frame, 0, 0)

    this.scene.overrideMaterial = priorOverride
    overrideMaterial.dispose()
    this.runtimeParts.forEach((part, index) => {
      part.edgeLines.visible = priorEdgeVisibility[index]
    })
    this.applyOutlineSettings()
    this.applyRenderMode()
    this.renderFrame()
    return canvas
  }

  focusModel() {
    this.frameModel()
  }

  getViewState(): ViewCameraState {
    return {
      cameraPosition: {
        x: this.camera.position.x,
        y: this.camera.position.y,
        z: this.camera.position.z,
      },
      target: {
        x: this.controls.target.x,
        y: this.controls.target.y,
        z: this.controls.target.z,
      },
    }
  }

  applyViewState(state: ViewCameraState) {
    this.camera.position.set(
      state.cameraPosition.x,
      state.cameraPosition.y,
      state.cameraPosition.z,
    )
    this.controls.target.set(state.target.x, state.target.y, state.target.z)
    this.controls.update()
    this.renderFrame()
  }

  private clearModel() {
    disposeObject(this.modelRoot)
    this.runtimeParts.forEach((part) => this.modelRoot.remove(part.mesh))
    this.runtimeParts = []
    this.syncOutlinePass()
    this.modelRoot.rotation.set(0, 0, 0)
  }

  private syncOutlinePass() {
    this.outlinePass.selectedObjects = this.runtimeParts.map((part) => part.mesh)
    this.outlinePass.visibleEdgeColor.set(this.materialTint.contour)
    this.outlinePass.hiddenEdgeColor.set(this.materialTint.contour)
    this.outlinePass.edgeStrength = 1
    this.outlinePass.edgeGlow = 0
    this.outlinePass.edgeThickness = 1
    this.outlinePass.pulsePeriod = 0
  }

  private rebuildPartMaterials() {
    this.runtimeParts.forEach((part) => {
      disposeMaterial(part.mesh.material)
      part.mesh.material =
        this.renderMode === 'outline'
          ? createOutlineMaskMaterial()
          : createPhysicalMaterial(
              this.surface,
              part.kind === 'base'
                ? part.color ?? this.materialTint.base
                : this.materialTint.contour,
            )
    })
    this.applySelectionHighlight()
  }

  private applySelectionHighlight() {
    this.runtimeParts.forEach((part) => {
      const material = part.mesh.material
      if (material instanceof MeshStandardMaterial) {
        const isSelected =
          !!this.selectedPartKey &&
          part.selectable &&
          part.key === this.selectedPartKey

        material.emissiveIntensity = isSelected ? 0.54 : 0.26
        material.needsUpdate = true
      }

      const edgeMaterial = part.edgeLines.material
      if (edgeMaterial instanceof LineMaterial) {
        const isSelected =
          !!this.selectedPartKey &&
          part.selectable &&
          part.key === this.selectedPartKey

        const outlineActive =
          (this.outlineSettings.enabled || this.renderMode === 'outline') &&
          this.outlineSettings.width > 0.001
        const baseOpacity = outlineActive ? 1 : 0
        const lineWidth = Math.max(
          1.8,
          this.outlineSettings.width * (this.renderMode === 'outline' ? 0.13 : 0.082),
        )
        edgeMaterial.linewidth = isSelected ? lineWidth + 1 : lineWidth
        edgeMaterial.opacity = isSelected ? Math.max(baseOpacity, 1) : baseOpacity
        edgeMaterial.needsUpdate = true
      }
    })
  }

  private applyOutlineSettings() {
    const activeWidth = Math.max(0, this.outlineSettings.width)
    const outlineActive =
      (this.outlineSettings.enabled || this.renderMode === 'outline') && activeWidth > 0.001
    this.syncOutlinePass()
    this.outlinePass.enabled = false
    this.outlinePass.edgeStrength = 0
    this.outlinePass.edgeGlow = 0
    this.outlinePass.edgeThickness = 0
    this.outlinePass.pulsePeriod = 0

    this.runtimeParts.forEach((part) => {
      part.outlineShell.visible = false

      const edgeMaterial = part.edgeLines.material
      if (edgeMaterial instanceof LineMaterial) {
        edgeMaterial.color.set(this.materialTint.contour)
        edgeMaterial.opacity = outlineActive ? 1 : 0
        edgeMaterial.linewidth = Math.max(
          1.8,
          activeWidth * (this.renderMode === 'outline' ? 0.13 : 0.082),
        )
        edgeMaterial.needsUpdate = true
      }
      part.edgeLines.visible = outlineActive
    })
  }

  private applyRenderMode() {
    this.rebuildPartMaterials()
    this.applyOutlineSettings()
    this.applySelectionHighlight()
  }

  private frameModel() {
    if (this.modelRoot.children.length === 0) {
      return
    }

    const bounds = new Box3().setFromObject(this.modelRoot)
    const center = bounds.getCenter(new Vector3())
    const radius = Math.max(bounds.getBoundingSphere(new Sphere()).radius, 1)
    const verticalFov = this.camera.fov * DEG_TO_RAD
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * this.camera.aspect)
    const fitHeight = radius / Math.tan(verticalFov / 2)
    const fitWidth = radius / Math.tan(horizontalFov / 2)
    const distance = Math.max(fitHeight, fitWidth) * 1.28

    this.homeDistance = distance
    this.framedCenter.copy(center)
    this.camera.near = Math.max(distance / 100, 0.01)
    this.camera.far = Math.max(distance * 40, 200)
    this.camera.updateProjectionMatrix()
    this.camera.position.set(center.x, center.y + radius * 0.08, center.z + distance)
    this.controls.dispose()
    this.controls = this.createControls()
    this.controls.target.copy(center)
    this.controls.update()

    this.floor.position.set(0, bounds.min.y - 0.42, 0)
    this.updateLights(this.lightSettings)
  }

  private modelIsOutOfView() {
    if (this.modelRoot.children.length === 0) {
      return false
    }

    const toCenter = this.framedCenter.clone().sub(this.camera.position)
    const viewDirection = new Vector3()
    this.camera.getWorldDirection(viewDirection)
    const facing = toCenter.normalize().dot(viewDirection)

    if (!Number.isFinite(facing) || facing < 0.2) {
      return true
    }

    const projected = this.framedCenter.clone().project(this.camera)
    if (
      !Number.isFinite(projected.x) ||
      !Number.isFinite(projected.y) ||
      !Number.isFinite(projected.z)
    ) {
      return true
    }

    const distanceToCenter = this.camera.position.distanceTo(this.framedCenter)
    if (distanceToCenter > this.homeDistance * 10) {
      return true
    }

    return (
      Math.abs(projected.x) > 1.8 ||
      Math.abs(projected.y) > 1.8 ||
      projected.z < -1.2 ||
      projected.z > 1.4
    )
  }

  private updateLights(settings: ViewLightSettings) {
    const turn = settings.turn * DEG_TO_RAD
    const lift = settings.lift * DEG_TO_RAD
    const radius = this.homeDistance * settings.distance * 0.12
    const x = Math.cos(turn) * Math.cos(lift) * radius
    const y = Math.sin(lift) * radius
    const z = Math.sin(turn) * Math.cos(lift) * radius

    this.directionalLight.position.set(x, Math.max(0.8, y), z)
    this.directionalLight.intensity =
      settings.type === 'sun' ? settings.intensity * 2.4 : settings.intensity * 1.85
    this.directionalLight.color.set(settings.type === 'sun' ? '#fff2c1' : '#fff6eb')

    this.fillLight.position.set(-x * 0.6, Math.max(0.6, radius * 0.22), -z * 0.6)
    this.fillLight.intensity =
      settings.type === 'sun'
        ? settings.fill * 1.25
        : 0.35 + settings.fill * 1.9
    this.fillLight.color.set(settings.type === 'sun' ? '#d7ecff' : '#dce9ff')

    this.ambientLight.intensity =
      settings.type === 'sun'
        ? 0.28 + settings.fill * 0.22
        : 0.46 + settings.fill * 0.42

    const shadowSpan = Math.max(radius * 2.2, 10)
    this.directionalLight.shadow.camera.left = -shadowSpan
    this.directionalLight.shadow.camera.right = shadowSpan
    this.directionalLight.shadow.camera.top = shadowSpan
    this.directionalLight.shadow.camera.bottom = -shadowSpan
    this.directionalLight.shadow.camera.near = 0.5
    this.directionalLight.shadow.camera.far = shadowSpan * 3
    this.directionalLight.shadow.camera.updateProjectionMatrix()
  }

  private applyBackground() {
    this.scene.background = null
  }

  private applyBloom() {
    this.bloomPass.enabled = this.bloomSettings.enabled
    this.bloomPass.strength = this.bloomSettings.enabled ? this.bloomSettings.strength * 1.8 : 0
    this.bloomPass.radius = this.bloomSettings.enabled ? 0.28 : 0
    this.bloomPass.threshold = 0.18
    this.bloomCompositePass.uniforms.bloomAmount.value = this.bloomSettings.enabled ? 1 : 0
  }

  private applyRotation() {
    this.controls.autoRotate = false
  }

  private resize() {
    const width = Math.max(this.container.clientWidth, 320)
    const height = Math.max(this.container.clientHeight, 320)

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    this.renderer.setSize(width, height, false)
    this.bloomComposer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    this.bloomComposer.setSize(width, height)
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    this.composer.setSize(width, height)
    this.outlinePass.setSize(width, height)
    this.runtimeParts.forEach((part) => {
      const edgeMaterial = part.edgeLines.material
      if (edgeMaterial instanceof LineMaterial) {
        edgeMaterial.resolution.set(width, height)
        edgeMaterial.needsUpdate = true
      }
    })
  }

  private renderFrame() {
    if (this.bloomSettings.enabled || this.outlinePass.enabled) {
      if (this.bloomSettings.enabled) {
        const previousMask = this.camera.layers.mask
        this.camera.layers.set(BLOOM_LAYER)
        this.bloomComposer.render()
        this.camera.layers.mask = previousMask
      }
      this.composer.render()
      return
    }

    this.renderer.render(this.scene, this.camera)
  }

  private tick = () => {
    const now = performance.now()
    const deltaSeconds = Math.min((now - this.lastTickTime) / 1000, 0.05)
    this.lastTickTime = now

    if (
      this.rotationSettings.enabled &&
      this.modelRoot.children.length > 0
    ) {
      this.modelRoot.rotation.y +=
        deltaSeconds * this.rotationSettings.speed * this.rotationSettings.direction
    }

    this.controls.update()
    if (
      this.modelRoot.children.length > 0 &&
      now - this.lastVisibilityRecoveryTime > 220 &&
      this.modelIsOutOfView()
    ) {
      this.lastVisibilityRecoveryTime = now
      this.frameModel()
    }
    this.renderFrame()
    this.animationFrameId = window.requestAnimationFrame(this.tick)
  }
}
