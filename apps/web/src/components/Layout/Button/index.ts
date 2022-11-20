import { BoxStyles } from '../Box'
import { styled } from 'styles'

export const ButtonStyles = {
  ...BoxStyles,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.6em 1.2em',
  borderRadius: 4,

  transition: 'all 0.2s ease',

  '&:disabled': {
    opacity: 0.4,
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      primary: {
        '&:hover': {
          color: '$shape-primary',
          background: '$accent-primary',

          'svg > *': {
            fill: '$shape-primary',
          },
        },

        '&:active': {
          filter: 'brightness(0.5)',
        },
      },

      secondary: {
        '&:hover': {
          color: '$shape-primary',
          backgroundColor: '$accent-secondary',

          'svg > *': {
            fill: '$shape-primary',
          },
        },
      },

      primaryFilled: {
        color: '$shape-primary',
        background: '$accent-primary',

        'svg path': {
          fill: '$shape-primary',
        },

        '&:hover': {
          color: '$accent-primary',
          backgroundColor: '$shape-primary',
        },
      },

      secondaryFilled: {
        color: '$shape-primary',
        background: '$accent-secondary',

        'svg path': {
          fill: '$shape-primary',
        },

        '&:hover': {
          color: '$accent-primary',
          backgroundColor: '$shape-primary',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
}

export const Button = styled('button', ButtonStyles)
