import { config } from 'styles'

export const sizes = {
  breakpoints: {
    mobile: `${config.media.bp4.replace(/\D/g, '')}`,
  },
} as const
