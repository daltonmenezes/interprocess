import { getPublicPath } from 'shared/utils'
import { styled } from 'styles'

export const Background = styled('div', {
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url("${getPublicPath(
    '/pattern.svg'
  )}"), url(${getPublicPath('/blur.jpg')})`,
  backgroundRepeat: 'repeat, no-repeat',
  backgroundSize: '30%, 200%',
  backgroundPosition: 'top center, center center',
  zIndex: -1,
  position: 'fixed',
  overflowX: 'hidden',

  '@bp4': {
    backgroundPosition: 'center center',
  },
})
