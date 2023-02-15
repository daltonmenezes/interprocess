import { styled } from 'styles'

export const Button = styled('a', {
  position: 'relative',

  '&::before': {
    content: '',
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    '&::before': {
      content: '',
      left: '-11px',
      display: 'block',
      width: '2px',
      height: '15px',
      background: '$accent-primary',
      top: '16%',
      position: 'absolute',
    },
  },

  variants: {
    active: {
      true: {
        color: '$accent-primary',
        pointerEvents: 'none',

        '&::before': {
          content: '',
          left: '-11px',
          display: 'block',
          width: '2px',
          height: '15px',
          background: '$accent-primary',
          top: '16%',
          position: 'absolute',
        },
      },
    },

    asHeading: {
      true: {
        fontSize: '1.1rem',
        textTransform: 'capitalize',
      },
    },
  },
})

type ButtonType = typeof Button

export type ButtonProps = {
  href: string
} & ButtonType['defaultProps']
