const Message = document.getElementById('message')!
const Button = document.getElementById('btn')!

const { invoke, handle, remove, sayHello } = window.api

// call the appended sayHello method
sayHello('world')

export async function invokeGetPingFromMainProcess() {
  try {
    // invoke the getPing handler from main process
    const response = await invoke.getPing('ping')

    console.log(response)
  } catch {
    Message.textContent = 'The getPing ipc was removed'
  }
}

// execute the getPong registration with another handler and use the previous handler lazily if needed to perform some other tasks
handle.getPong(async (_, { getPong, data }) => {
  const response = await getPong(_, data)

  Message.textContent = response

  // remove the getPong IPC handler
  remove.getPong()

  return 'The getPong ipc was removed'
})

Button.addEventListener('click', invokeGetPingFromMainProcess)
