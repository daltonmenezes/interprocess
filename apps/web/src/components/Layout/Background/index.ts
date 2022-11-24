import { getPublicPath } from 'shared/utils'
import { styled } from 'styles'

export const Background = styled('div', {
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url("${getPublicPath('/background.svg')}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300%',
  backgroundPosition: 'top center',
  zIndex: -1,
  position: 'fixed',
  overflowX: 'hidden',

  '@bp4': {
    backgroundPosition: 'center center',
  },
})
