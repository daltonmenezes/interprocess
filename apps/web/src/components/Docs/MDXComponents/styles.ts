import { BoxStyles, Title as BaseTitle } from 'components/Layout'
import { styled } from 'styles'

export const Title = styled(BaseTitle, {
  textTransform: 'none',
})

export const SingleTick = styled('span', {
  ...BoxStyles,

  width: 'fit-content',
  padding: '0.3rem',
  backgroundColor: '$border-primary',
  borderRadius: 4,
})
