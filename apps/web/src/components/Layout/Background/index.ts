import { getPublicPath } from 'shared/utils'
import { animations, styled } from 'styles'

export const Background = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url("${getPublicPath('/background.svg')}")`,
  willChange: 'background-size background-position',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300%',
  backgroundPosition: 'top center',
  zIndex: -1,
  overflowX: 'hidden',

  '@bp4': {
    backgroundPosition: 'center center',
    '-webkit-transform': 'translate3d(0)',
    animation: `${animations.background} 1s ease forwards`,
  },
})
