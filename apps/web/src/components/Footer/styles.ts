import { Box } from 'components/Layout/Box'
import { styled } from 'styles'

export const FooterContainer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  minHeight: '7rem',
  paddingBottom: '1.5rem',
})

export const FooterContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',

  img: {
    transition: 'opacity 0.2s linear',

    '&:hover': {
      opacity: '0.5',
    },
  },

  '@bp4': {
    flexDirection: 'row',
  },
})

export const FooterLinksContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: `2rem`,
  width: '100%',
  flexDirection: 'column',
  paddingTop: '2.5rem',

  a: {
    fontWeight: 700,
  },

  '@bp4': {
    flexDirection: 'row',
    paddingTop: 0,
  },
})

export const AuthorBox = styled(Box, {
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '1rem',
  fontSize: '1rem',
  lineHeight: '1.625rem',
  color: '$accent-secondary',
  transition: 'border 0.2s ease',

  div: {
    display: 'flex',
    gap: '0.5rem',
  },
})

export const LicenseContainer = styled('div', {
  fontSize: '0.875rem',
  color: '$text-support',

  strong: {
    color: '$accent-primary',
  },
})
