(function () {
  const SVG_NS = 'http://www.w3.org/2000/svg'
  const EXPORT_BUTTON_ID = 'svg-export-button'

  const escapeXml = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')

  const downloadText = (filename, text) => {
    const blob = new Blob([text], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const activeButtonText = (buttons) => {
    const active = [...buttons].find((button) => button.classList.contains('tab-active') || button.classList.contains('chip-active'))
    return active?.textContent?.trim().toLowerCase() ?? ''
  }

  const getSourceMode = () => {
    const sourcePanel = [...document.querySelectorAll('.panel')].find((panel) =>
      panel.textContent?.includes('Source'),
    )
    if (!sourcePanel) return 'text'
    const active = activeButtonText(sourcePanel.querySelectorAll('.tab-button'))
    return active.includes('svg') ? 'svg' : 'text'
  }

  const getTextInput = () => document.querySelector('.text-input-editor')

  const getSvgInput = () => {
    const areas = [...document.querySelectorAll('textarea.text-input')]
    return areas.find((area) => area.value.includes('<svg')) ?? null
  }

  const getFontFamily = () => {
    const select = document.querySelector('.select-input')
    return select?.selectedOptions?.[0]?.textContent?.trim() || 'Arial'
  }

  const getAlignment = () => {
    const active = document.querySelector('.text-align-button.tab-active')
    const title = active?.getAttribute('title') || ''
    if (title.includes('right')) return 'end'
    if (title.includes('center')) return 'middle'
    return 'start'
  }

  const getSolidColor = () => {
    const scenePanel = [...document.querySelectorAll('.viewport-panel-slot')].find((panel) =>
      panel.textContent?.includes('Scene'),
    )
    const solidInput = scenePanel?.querySelector('.color-input')
    return solidInput?.value || '#ffffff'
  }

  const getGradientStops = () =>
    [...document.querySelectorAll('.gradient-stop-handle')]
      .map((button) => ({
        color: button.style.background || '#ffffff',
        offset: parseFloat(button.style.left || '0') || 0,
      }))
      .sort((a, b) => a.offset - b.offset)

  const getBackgroundMode = () => {
    const scenePanel = [...document.querySelectorAll('.viewport-panel-slot')].find((panel) =>
      panel.textContent?.includes('Scene'),
    )
    const active = activeButtonText(scenePanel?.querySelectorAll('.chip') ?? [])
    if (active.includes('gradient')) return 'gradient'
    if (active.includes('transparent')) return 'transparent'
    return 'solid'
  }

  const getGradientAngle = () => {
    const gradientPanel = [...document.querySelectorAll('.viewport-panel-slot')].find((panel) =>
      panel.textContent?.includes('Gradient'),
    )
    const value = [...(gradientPanel?.querySelectorAll('.value-input') ?? [])]
      .map((input) => Number(input.value))
      .find((entry) => Number.isFinite(entry))
    return Number.isFinite(value) ? value : 135
  }

  const getContourColor = () => {
    const materialPanel = [...document.querySelectorAll('.panel')].find((panel) =>
      panel.textContent?.includes('Material'),
    )
    const inputs = materialPanel?.querySelectorAll('.color-input') ?? []
    return inputs[1]?.value || '#000000'
  }

  const buildBackground = (mode, width, height) => {
    if (mode === 'transparent') return { defs: '', rect: '' }
    if (mode === 'gradient') {
      const stops = getGradientStops()
      const fallbackStops = stops.length
        ? stops
        : [
            { color: '#ffffff', offset: 0 },
            { color: '#d9d9d9', offset: 100 },
          ]
      const angle = (getGradientAngle() * Math.PI) / 180
      const x = Math.cos(angle)
      const y = Math.sin(angle)
      const x1 = 50 - x * 50
      const y1 = 50 - y * 50
      const x2 = 50 + x * 50
      const y2 = 50 + y * 50
      const defs = `<defs><linearGradient id="bg" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%">${fallbackStops
        .map((stop) => `<stop offset="${stop.offset}%" stop-color="${escapeXml(stop.color)}" />`)
        .join('')}</linearGradient></defs>`
      return { defs, rect: `<rect width="${width}" height="${height}" fill="url(#bg)" />` }
    }
    return { defs: '', rect: `<rect width="${width}" height="${height}" fill="${escapeXml(getSolidColor())}" />` }
  }

  const buildTextSvg = (width, height) => {
    const textarea = getTextInput()
    const raw = textarea?.value || ''
    const lines = raw.replace(/\r\n?/g, '\n').split('\n')
    const fontFamily = getFontFamily()
    const textAnchor = getAlignment()
    const x = textAnchor === 'start' ? 120 : textAnchor === 'end' ? width - 120 : width / 2
    const lineHeight = 92
    const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2
    const contour = getContourColor()
    const body = lines
      .map((line, index) => {
        const y = startY + index * lineHeight
        return `<text x="${x}" y="${y}" text-anchor="${textAnchor}" dominant-baseline="middle" font-family="${escapeXml(fontFamily)}" font-size="82" font-weight="700" fill="none" stroke="${escapeXml(contour)}" stroke-width="4" paint-order="stroke">${escapeXml(line)}</text>`
      })
      .join('')
    return `<g id="text-source">${body}</g>`
  }

  const buildEmbeddedSvg = (width, height) => {
    const textarea = getSvgInput()
    const raw = textarea?.value || ''
    if (!raw.includes('<svg')) return ''
    const inner = raw
      .replace(/<\?xml[\s\S]*?\?>/i, '')
      .replace(/<!doctype[\s\S]*?>/i, '')
      .trim()
    return `<g id="svg-source" transform="translate(${width * 0.2} ${height * 0.15}) scale(0.6)">${inner}</g>`
  }

  const componentToHex = (value) => value.toString(16).padStart(2, '0')

  const quantize = (value, step) => Math.min(255, Math.round(value / step) * step)

  const waitForFrame = () =>
    new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

  const vectorizeCanvas = (canvas, displayX, displayY, displayWidth, displayHeight) => {
    const maxLongEdge = 900
    const sourceWidth = Math.max(1, canvas.width)
    const sourceHeight = Math.max(1, canvas.height)
    const sourceLongEdge = Math.max(sourceWidth, sourceHeight)
    const sampleScale = Math.min(1, maxLongEdge / sourceLongEdge)
    const sampleWidth = Math.max(1, Math.round(sourceWidth * sampleScale))
    const sampleHeight = Math.max(1, Math.round(sourceHeight * sampleScale))
    const sample = document.createElement('canvas')
    sample.width = sampleWidth
    sample.height = sampleHeight
    const ctx = sample.getContext('2d', { willReadFrequently: true })
    if (!ctx) return ''

    ctx.clearRect(0, 0, sampleWidth, sampleHeight)
    ctx.drawImage(canvas, 0, 0, sampleWidth, sampleHeight)

    const image = ctx.getImageData(0, 0, sampleWidth, sampleHeight).data
    const paths = new Map()
    const pxW = displayWidth / sampleWidth
    const pxH = displayHeight / sampleHeight
    const colorStep = 18
    const alphaStep = 24

    for (let y = 0; y < sampleHeight; y += 1) {
      let x = 0
      while (x < sampleWidth) {
        const index = (y * sampleWidth + x) * 4
        const alpha = image[index + 3]
        if (alpha < 12) {
          x += 1
          continue
        }

        const r = quantize(image[index], colorStep)
        const g = quantize(image[index + 1], colorStep)
        const b = quantize(image[index + 2], colorStep)
        const a = quantize(alpha, alphaStep)
        const key = `${r},${g},${b},${a}`
        let end = x + 1

        while (end < sampleWidth) {
          const next = (y * sampleWidth + end) * 4
          const nextAlpha = image[next + 3]
          if (nextAlpha < 12) break
          const nr = quantize(image[next], colorStep)
          const ng = quantize(image[next + 1], colorStep)
          const nb = quantize(image[next + 2], colorStep)
          const na = quantize(nextAlpha, alphaStep)
          if (`${nr},${ng},${nb},${na}` !== key) break
          end += 1
        }

        const rectX = Number((displayX + x * pxW).toFixed(2))
        const rectY = Number((displayY + y * pxH).toFixed(2))
        const rectW = Number(((end - x) * pxW).toFixed(2))
        const rectH = Number(pxH.toFixed(2))
        const path = `M${rectX} ${rectY}h${rectW}v${rectH}h-${rectW}z`
        const list = paths.get(key)
        if (list) list.push(path)
        else paths.set(key, [path])
        x = end
      }
    }

    return [...paths.entries()]
      .map(([key, commands]) => {
        const [r, g, b, a] = key.split(',').map(Number)
        const color = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
        const opacity = a >= 250 ? '' : ` fill-opacity="${Number((a / 255).toFixed(3))}"`
        return `<path fill="${color}"${opacity} d="${commands.join('')}" />`
      })
      .join('\n')
  }

  const getViewportStage = () => document.querySelector('.viewport-stage')

  const getViewportCanvas = () => document.querySelector('.viewport-canvas canvas')

  const exportSvg = async () => {
    const stage = getViewportStage()
    const canvas = getViewportCanvas()

    if (!stage || !canvas) {
      const width = 1200
      const height = 800
      const mode = getBackgroundMode()
      const bg = buildBackground(mode, width, height)
      const sourceMode = getSourceMode()
      const content = sourceMode === 'svg' ? buildEmbeddedSvg(width, height) : buildTextSvg(width, height)
      const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="${SVG_NS}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n${bg.defs}\n${bg.rect}\n${content}\n</svg>\n`
      downloadText(`2d-to-3d-source-${new Date().toISOString().replace(/[:.]/g, '-')}.svg`, svg)
      return
    }

    await waitForFrame()
    const stageRect = stage.getBoundingClientRect()
    const canvasRect = canvas.getBoundingClientRect()
    const width = Math.max(1, Math.round(stageRect.width))
    const height = Math.max(1, Math.round(stageRect.height))
    const x = Math.round(canvasRect.left - stageRect.left)
    const y = Math.round(canvasRect.top - stageRect.top)
    const imageWidth = Math.round(canvasRect.width)
    const imageHeight = Math.round(canvasRect.height)
    const mode = getBackgroundMode()
    const bg = buildBackground(mode, width, height)
    let vectorBody = ''
    try {
      vectorBody = vectorizeCanvas(canvas, x, y, imageWidth, imageHeight)
    } catch (error) {
      console.error(error)
      alert('SVG vector capture failed. Try again after the viewport renders.')
      return
    }
    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="${SVG_NS}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges">\n${bg.defs}\n${bg.rect}\n<g id="camera-vector-capture">\n${vectorBody}\n</g>\n</svg>\n`
    downloadText(`2d-to-3d-camera-vector-${new Date().toISOString().replace(/[:.]/g, '-')}.svg`, svg)
  }

  const injectButton = () => {
    if (document.getElementById(EXPORT_BUTTON_ID)) return
    const frameZipButton = [...document.querySelectorAll('button')].find((button) =>
      button.textContent?.trim().toLowerCase() === 'export frames to zip',
    )
    if (!frameZipButton) return
    const button = document.createElement('button')
    button.id = EXPORT_BUTTON_ID
    button.className = frameZipButton.className || 'action-button'
    button.type = 'button'
    button.textContent = 'capture svg'
    button.addEventListener('click', exportSvg)
    frameZipButton.insertAdjacentElement('afterend', button)
  }

  const observer = new MutationObserver(injectButton)
  observer.observe(document.documentElement, { childList: true, subtree: true })
  window.addEventListener('load', injectButton)
  setInterval(injectButton, 1000)
})()
