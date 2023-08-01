export function isMainProcess() {
  return process.type === 'browser'
}

export function isRendererProcess() {
  return process.type === 'renderer'
}
