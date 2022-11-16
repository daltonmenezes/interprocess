import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export function ExternalLink(
  props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
) {
  return <a {...props} target="_blank" rel="noreferrer" />
}
