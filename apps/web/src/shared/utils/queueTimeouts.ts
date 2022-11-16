interface QueueItem {
  delay: number
  callback: () => void
}

export async function queueTimeouts(...args: QueueItem[]) {
  for (const arg of args) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(arg.callback()), arg.delay)
    )
  }
}
