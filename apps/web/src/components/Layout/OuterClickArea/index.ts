import { styled, animations } from 'styles'

export const OuterClickArea = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 998,
  background: '$shadow-primary',
  animation: `${animations.fadeIn} 0.2s ease`,
})
