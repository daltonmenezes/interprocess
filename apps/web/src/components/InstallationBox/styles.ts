import { Box } from 'components/Layout/Box'
import { styled } from 'styles'

export const ShellBox = styled(Box, {
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
  fontSize: '1rem',
  lineHeight: '1.625rem',
  color: '$accent-primary',
  transition: 'border 0.2s ease',

  '&:hover, &:focus-within': {
    border: '1px solid $accent-primary',
  },

  'pre, code': {
    width: '100%',
    textAlign: 'center !important',
    background: 'transparent !important',
    margin: '0 !important',
    padding: '0 !important',
    overflow: 'hidden !important',
  },

  '.token.token': {
    color: '$accent-primary !important',
  },

  '@bp4': {
    width: '340px',
  },
})

export const PackageManagerList = styled('ul', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.5rem',
})

export const PackageButton = styled('button', {
  background: 'transparent',

  '&:hover': {
    color: '$accent-primary',
    background: 'transparent',
  },

  variants: {
    active: {
      true: {
        color: '$accent-primary',
        pointerEvents: 'none',
      },
    },
  },
})

export const Button = styled('button', {
  '&:disabled': {
    color: '',
    pointerEvents: 'none',

    'svg path': {
      fill: '',
    },
  },
})
