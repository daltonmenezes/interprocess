const Message = document.getElementById('message')!
const Button = document.getElementById('btn')!

const { invoke, handle, remove } = window.api

export async function invokeGetPingFromMainProcess() {
  try {
    const response = await invoke.getPing('ping')

    console.log(response)
  } catch {
    Message.textContent = 'The getPing ipc was removed'
  }
}

handle.getPong(async (_, { getPong, data }) => {
  const response = await getPong(_, data)

  Message.textContent = response
  remove.getPong()

  return 'The getPong ipc was removed'
})

Button.addEventListener('click', invokeGetPingFromMainProcess)
