import { styled, animations } from 'styles'

export const Title = styled('h1', {
  fontSize: '2.5rem',
  letterSpacing: 2,
  fontWeight: 700,
  color: '$text-title',
  animation: `${animations.reveal} 0.6s ease-in-out`,
  backgroundImage: '$text-gradient',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  textFillColor: 'transparent',
  '-webkit-text-fill-color': 'transparent',
  textTransform: 'capitalize',

  userSelect: 'none',

  '@bp4': {
    fontSize: '4rem',
    letterSpacing: 5,
  },
})
