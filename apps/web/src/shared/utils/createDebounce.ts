export function createDebounce(fn: Function, delay = 200) {
  let timer: ReturnType<typeof setTimeout>

  return {
    execute(args?: any) {
      clearTimeout(timer)

      timer = setTimeout(() => fn(args), delay)
    },

    abort() {
      clearTimeout(timer)
    },
  }
}
