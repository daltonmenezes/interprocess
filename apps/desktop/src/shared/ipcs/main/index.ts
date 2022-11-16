import { createIpcSlice } from 'interprocess'

export const getPingIpcSlice = createIpcSlice({
  main: {
    async getPing(_, data: 'ping') {
      return `from renderer: ${data} on main process`
    },
  },
})
