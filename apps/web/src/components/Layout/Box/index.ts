import { styled, Mixin } from 'styles'

export const BoxStyles: Mixin = {
  display: 'flex',
  background: '$shape-primary',
  border: '1px solid $border-primary',
  boxShadow: '0 2px 2px 1px $colors$shadow-primary',
  borderRadius: 15,
}

export const Box = styled('div', BoxStyles)
