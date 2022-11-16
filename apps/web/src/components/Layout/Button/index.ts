import { BoxStyles } from '../Box'
import { styled } from 'styles'

export const Button = styled('button', {
  ...BoxStyles,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.6em 1.2em',
  borderRadius: 4,

  transition: 'all 0.2s ease',

  variants: {
    variant: {
      primary: {
        '&:hover': {
          background: '$accent-primary',
          color: '$text-base',
        },

        '&:active': {
          filter: 'brightness(0.5)',
        },
      },

      secondary: {
        '&:hover': {
          backgroundColor: '$accent-secondary',
          color: 'black',
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
})
