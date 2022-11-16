import { useEffect, useState } from 'react'

export function useMatchMedia(condition: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    function listener({ matches }: MediaQueryListEvent) {
      setMatches(matches)
    }

    const matchMedia = window.matchMedia(`(${condition})`)

    setMatches(matchMedia.matches)

    try {
      matchMedia.addEventListener('change', listener)

      return () => matchMedia.removeEventListener('change', listener)
    } catch (_) {
      matchMedia.addListener(listener)

      return () => matchMedia.removeListener(listener)
    }
  }, [])

  return matches
}
