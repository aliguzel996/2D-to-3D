declare global {
  interface Window {
    desktopBridge?: Record<string, never>
  }
}

export {}
