import { BoxStyles } from 'components/Layout'
import { styled } from 'styles'

export const Button = styled('button', {
  opacity: 0,
  pointerEvents: 'none',
  padding: '0.5rem',
  borderRadius: 5,
  top: 5,
  right: 5,
  position: 'absolute',

  svg: {
    width: 20,
    height: 20,
  },

  '&:disabled': {
    color: '',
    pointerEvents: 'none',

    'svg path': {
      fill: '',
    },
  },
})

export const Box = styled('div', {
  position: 'relative',

  code: {
    ...BoxStyles,

    display: 'block',
    padding: '0.9rem',
    borderRadius: 5,
    backgroundColor: '$border-primary',
    fontSize: '0.8rem',
    fontFamily: 'inherit',
    lineHeight: '1.5em',
    textAlign: 'left',
    width: '100%',
    maxHeight: 546,
    overflow: 'auto',
  },

  [`&:hover > ${Button}, &:focus-within > ${Button}`]: {
    opacity: 1,
    pointerEvents: 'all',
  },
})
