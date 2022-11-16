import { styled } from 'styles'

export const NavigatorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem',
  alignSelf: 'center',

  span: {
    fontSize: '0.9rem',
    color: '$text-support',
    maxWidth: 230,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  a: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    overflowX: 'scroll',
    overflowY: 'hidden',

    h1: {
      letterSpacing: 0,
      fontSize: '2rem',
      color: '$accent-secondary',
    },

    '&:hover > h1, &:hover > span': {
      filter: 'brightness(0.7)',
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  '@bp2': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',

    a: {
      width: 'auto',
    },
  },
})
