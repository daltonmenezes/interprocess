import { createIpcSlice } from 'interprocess'

export const getPongIpcSlice = createIpcSlice({
  renderer: {
    async getPong(_, data: 'pong') {
      return `from main: ${data} on renderer process`
    },
  },
})
