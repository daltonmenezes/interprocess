import { readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

export async function getAllMDXFilePaths(directory: string) {
  const filePaths: string[] = []

  async function getMDXFilePaths(directory: string) {
    for (const file of await readdir(directory)) {
      const path = resolve(directory, file)
      const isMDXFile = /\.mdx?$/.test(file)
      const isDirectory = (await stat(path))?.isDirectory()

      if (isDirectory) {
        await getMDXFilePaths(path)
      }

      if (isMDXFile) {
        filePaths.push(path)
      }
    }
  }

  return (async () => {
    await getMDXFilePaths(directory)

    return filePaths
  })()
}
