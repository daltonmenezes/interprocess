import { styled, animations } from 'styles'
import { BoxStyles } from 'components'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  height: '100%',
  width: '100%',

  '@bp4': {
    flexFlow: 'row wrap',
  },
})

export const Title = styled('h2', {
  fontSize: '1.3rem',
  lineHeight: '1.5em',
  color: '$accent-secondary',
})

export const Description = styled('p', {
  fontSize: '0.9rem',
  lineHeight: '1.5rem',
  color: '$text-support',
  width: '100%',
  paddingBottom: '3rem',

  strong: {
    fontSize: '1rem',
    color: '$accent-secondary',
  },

  'strong:nth-of-type(even)': {
    color: '$accent-primary',
  },

  '@bp4': {
    paddingBottom: '1rem',
  },
})

export const FeatureCard = styled('li', {
  ...BoxStyles,

  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  width: '100%',
  padding: '1.215rem',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    borderColor: '$accent-primary',
    cursor: 'default',
  },

  '@bp4': {
    maxWidth: '18rem',
  },
})
