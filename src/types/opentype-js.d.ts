declare module 'opentype.js' {
  export type OpenTypePathCommand =
    | { type: 'M' | 'L'; x: number; y: number }
    | { type: 'C'; x1: number; y1: number; x2: number; y2: number; x: number; y: number }
    | { type: 'Q'; x1: number; y1: number; x: number; y: number }
    | { type: 'Z' }

  export type OpenTypePath = {
    commands: OpenTypePathCommand[]
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

  export type OpenTypeGlyph = {
    index?: number
    advanceWidth?: number
    getPath(x: number, y: number, fontSize: number): OpenTypePath
  }

  export type OpenTypeFont = {
    charToGlyph(char: string): OpenTypeGlyph
    forEachGlyph(
      text: string,
      x: number,
      y: number,
      fontSize: number,
      options: {
        kerning?: boolean
        language?: string
        letterSpacing?: number
        script?: string
      },
      callback: (
        glyph: OpenTypeGlyph,
        x: number,
        y: number,
        fontSize: number,
        options: {
          kerning?: boolean
          language?: string
          letterSpacing?: number
          script?: string
        },
      ) => void,
    ): number
    getAdvanceWidth(
      text: string,
      fontSize: number,
      options?: {
        kerning?: boolean
        language?: string
        letterSpacing?: number
        script?: string
      },
    ): number
    getPath(text: string, x: number, y: number, fontSize: number): OpenTypePath
    getKerningValue?(leftGlyph: OpenTypeGlyph, rightGlyph: OpenTypeGlyph): number
    stringToGlyphs(text: string): OpenTypeGlyph[]
    unitsPerEm?: number
  }

  export function parse(buffer: ArrayBuffer): OpenTypeFont
}
