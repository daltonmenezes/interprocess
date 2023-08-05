import { useEffect, useState } from 'react'

const localStorageKey = '@daltonmenezes/packageManager'

export function usePackageManagerSelection<
  PackageManagerOptions extends string
>(defaultActivePackageManager: PackageManagerOptions) {
  const [activePackageManager, setActivePackageManager] =
    useState<PackageManagerOptions>(defaultActivePackageManager)

  useEffect(() => {
    const packageManager = window.localStorage.getItem(
      localStorageKey
    ) as PackageManagerOptions | null

    setActivePackageManager(() =>
      packageManager ? packageManager : defaultActivePackageManager
    )
  }, [])

  function updateActivePackageManager(packageManager: PackageManagerOptions) {
    setActivePackageManager(() => packageManager)

    window.localStorage.setItem(localStorageKey, packageManager)
  }

  return { activePackageManager, updateActivePackageManager }
}
