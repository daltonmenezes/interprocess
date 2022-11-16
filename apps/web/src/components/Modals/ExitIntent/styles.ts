import * as Dialog from '@radix-ui/react-dialog'

import { getPublicPath } from 'shared/utils'

import { styled, animations } from 'styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  minWidth: '100vw',
  minHeight: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
  zIndex: 100,
})

export const Container = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  position: 'fixed',
  backdropFilter: 'blur(10px)',
  transform: 'translate(-50%, -50%)',
  overflowX: 'hidden',
  zIndex: 9999,

  '@bp4': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: '35.1875rem',
    maxWidth: '59.125rem',
    borderRadius: 10,
    gap: 45.5,
    border: '1px solid $colors$shape-tertiary',
    boxShadow: '8px 2px 60px -22px $colors$shape-quinary',
    overflow: 'hidden',
  },
})

export const Content = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  height: '100%',

  '@bp4': {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
  },
})

export const ContentGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  textAlign: 'center',

  paddingHorizontal: '1.5rem',
  paddingTop: 'calc(4rem + 1.911rem)',
  paddingBottom: '3.10375rem',

  gap: 16,

  p: {
    fontSize: '0.875rem',
    fontWeight: 400,
    textAlign: 'center',
    lineHeight: '1.4rem',

    color: '$text-support',
  },

  a: {
    marginTop: 16,
  },

  button: {
    fontSize: '1rem',
  },

  'button, a': {
    width: '100%',
  },

  '@bp4': {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginLeft: '1.46875rem',

    p: {
      textAlign: 'left',
    },
  },
})

export const Title = styled(Dialog.Title, {
  display: 'inline-block',
  maxWidth: '20.1875rem',

  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: '1.875rem',

  color: '$text-title',

  span: {
    textTransform: 'capitalize',
  },

  strong: {
    '&:nth-of-type(odd)': {
      color: '$accent-secondary',
    },

    '&:nth-of-type(even)': {
      color: '$accent-primary',
    },
  },

  img: {
    width: '1.5625rem',
    marginLeft: '0.5rem',
  },

  '@bp4': {
    maxWidth: '33.3125rem',

    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'left',
    lineHeight: '3.125rem',

    img: {
      width: '2.5rem',
      marginLeft: '0.5rem',
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  fontSize: '1.2rem',
  lineHeight: 0,
  color: '$text-title',
  background: 'transparent',
  transform: 'scaleX(1.4)',
  top: '1.5rem',
  right: '1.5rem',
  border: 0,
  cursor: 'pointer',
  position: 'absolute',
  transition: 'color 0.2s ease-in-out',

  '&:hover, &:focus-within': {
    color: '$accent-primary',
  },
})

export const Tag = styled('h2', {
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: '1.4rem',
  textTransform: 'uppercase',

  color: '$accent-primary',

  padding: '4px 8px',

  borderRadius: 3,

  variants: {
    type: {
      outlined: {
        border: '1px solid $accent-primary',
      },
    },
  },

  defaultVariants: {
    type: 'outlined',
  },
})

export const Image = styled('div', {
  display: 'flex',
  width: '100%',
  height: '3.125rem',
  zIndex: -1,

  backgroundImage: `url("${getPublicPath('/abstract-background.jpg')}")`,
  backgroundPosition: 'center center',
  animation: `${animations.backgroundCover} 40s linear infinite alternate`,

  '@bp4': {
    maxWidth: '20rem',
    minHeight: '100%',
  },
})
