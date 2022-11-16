import NextLink from 'next/link'

import { Button, ButtonProps } from './styles'

export function Link({ href, ...restOfProps }: ButtonProps) {
  return (
    <NextLink href={href} passHref>
      <Button {...restOfProps} />
    </NextLink>
  )
}
