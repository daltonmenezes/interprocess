import { keyframes as Keyframes } from '.'

export const createKeyframes = (keyframes: typeof Keyframes) => ({
  fadeIn: keyframes({
    from: {
      opacity: 0,
    },

    to: {
      opacity: 1,
    },
  }),

  background: keyframes({
    '0%': {
      backgroundPosition: 'bottom center',
    },

    '100%': {
      backgroundPosition: 'center center',
    },
  }),

  backgroundCover: keyframes({
    '0%': {
      opacity: 0,
      backgroundPosition: '50% 50%',
    },

    '5%': {
      opacity: 1,
    },

    '90%': {
      opacity: 1,
    },

    '100%': {
      opacity: 0,
      backgroundPosition: '30% 30%',
    },
  }),

  reveal: keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(1rem)',
    },

    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  }),

  spin: keyframes({
    from: {
      transform: 'rotate(0deg)',
    },

    to: {
      transform: 'rotate(360deg)',
    },
  }),
})
