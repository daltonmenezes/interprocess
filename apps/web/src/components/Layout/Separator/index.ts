import { styled } from 'styles'

export const Separator = styled('div', {
  background: '$shape-quaternary',

  compoundVariants: [
    {
      horizontal: true,
      css: {
        borderLeft: 0,
        borderTop: '1px solid rgba(36, 36, 36, 0.547)',
      },
    },
  ],

  variants: {
    opacity: {
      default: {
        borderLeft: '1px solid $shape-tertiary',
      },

      low: {
        opacity: 0.4,
      },
    },

    vertical: {
      true: {
        width: 2,
        height: 8,
      },
    },

    horizontal: {
      true: {
        width: '100%',
        height: 1,
      },
    },
  },

  defaultVariants: {
    vertical: true,
    opacity: 'default',
  },
})
