declare module 'gifenc' {
  export function GIFEncoder(options?: {
    auto?: boolean
    initialCapacity?: number
  }): {
    bytesView(): Uint8Array
    finish(): void
    writeFrame(
      index: Uint8Array,
      width: number,
      height: number,
      options?: {
        colorDepth?: number
        delay?: number
        dispose?: number
        palette?: number[] | Uint8Array | Uint32Array
        repeat?: number
        transparent?: boolean
        transparentIndex?: number
      },
    ): void
  }

  export function quantize(
    rgba: Uint8ClampedArray | Uint8Array,
    maxColors: number,
    options?: Record<string, unknown>,
  ): number[] | Uint8Array | Uint32Array

  export function applyPalette(
    rgba: Uint8ClampedArray | Uint8Array,
    palette: number[] | Uint8Array | Uint32Array,
    format?: string,
  ): Uint8Array
}
