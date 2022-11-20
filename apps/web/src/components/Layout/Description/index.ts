import { styled } from 'styles'

import { BoxStyles } from '../Box'

export const Description = styled('p', {
  gap: '0.5rem',
  color: '$text-support',
  textAlign: 'center',

  img: {
    display: 'inline-flex',
    width: '0.9rem',
  },

  '> code': {
    ...BoxStyles,

    display: 'inline-flex',
    width: 'fit-content',
    padding: '0.3rem',
    borderRadius: 4,
    backgroundColor: '$border-primary',
  },

  '@bp4': {
    alignItems: 'center',
    textAlign: 'left',
    gap: '0.1rem',

    img: {
      display: 'block',
      float: 'left',
      marginRight: '0.6rem',
      width: '1.2rem',
    },
  },

  variants: {
    size: {
      small: {
        fontSize: '0.8rem',
      },

      medium: {
        fontSize: '1rem',
      },

      large: {
        color: '$accent-primary',
        fontSize: '2rem',
      },
    },
  },
})
