import { Layout } from 'components/Layout'
import { styled } from 'styles'

export const HeaderContent = styled(Layout, {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
  paddingVertical: '1rem',

  a: {
    transition: 'color 0.2s ease-in-out',
  },

  'a:nth-of-type(even):hover': {
    color: '$accent-secondary',
  },

  svg: {
    width: '2rem',
    height: '2rem',

    path: {
      fill: '$text-support',
    },
  },
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  left: 0,
  height: 'max-content',
  width: '100%',
  alignItems: 'center',
  paddingVertical: '0.5rem',
  backdropFilter: 'blur(18px)',
  position: 'fixed',
  zIndex: 100,
})
