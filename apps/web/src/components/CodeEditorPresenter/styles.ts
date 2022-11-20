import { Button } from 'components/Docs/MDXComponents/CodeBox/styles'
import { ExternalLink as _ExternalLink } from 'components/ExternalLink'
import { ButtonStyles } from 'components/Layout'

import { styled, animations, Mixin } from 'styles'
import { BoxStyles } from '../Layout/Box'

const SeparatorStyles: Mixin = {
  borderBottom: '1px solid $border-primary',
}

export const CodeContainer = styled('div', {
  ...BoxStyles,

  width: '100%',
  height: '100%',
  maxHeight: 400,
  minHeight: 400,
  paddingTop: '0.5rem',
  overflowY: 'auto',
  position: 'relative',
  fontSize: '1.1rem',
  flexDirection: 'column',
  animation: `${animations.reveal} 1s ease-in-out`,

  '.indiana-scroll-container': {
    marginRight: '1rem',
    display: 'inline-block',
  },

  pre: {
    width: '100%',
    height: '100%',
  },
})

export const MenuContainer = styled('aside', {
  ...SeparatorStyles,

  display: 'flex',
  gap: '0.5rem',
  paddingHorizontal: '0.5rem',
  alignItems: 'center',

  '-webkit-transform': 'translate3d(0, 0, 0)',

  ul: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
  },

  button: {
    paddingHorizontal: '0.5rem',
  },

  '@bp4': {
    gap: '1rem',
    paddingHorizontal: '1.4rem',

    ul: {
      gap: '1rem',
    },
  },
})

export const MenuControls = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const CodeContent = styled('div', {
  paddingHorizontal: '1rem',
  minWidth: '100%',
  height: '100vh',
  paddingBottom: '1rem',
  paddingTop: '0.5rem',
  marginTop: 0,
  overflow: 'auto',
  position: 'relative',

  [`&:hover > ${Button}, &:focus-within > ${Button}`]: {
    opacity: 1,
    pointerEvents: 'all',
  },

  '@bp4': {
    marginTop: '0.5rem',
    paddingHorizontal: '1.4rem',
  },
})

export const TabButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'center',
  fontSize: '1rem',
  paddingVertical: '0.6rem',
  color: '$text-support',
  borderBottom: '2px solid transparent',

  svg: {
    width: 12,
    height: 12,
  },

  variants: {
    active: {
      true: {
        color: '$accent-secondary',
        borderBottom: '2px solid $accent-primary',
      },
    },
  },

  '@bp4': {
    svg: {
      width: 15,
      height: 15,
    },
  },
})

export const IntelliSense = styled('div', {
  ...BoxStyles,

  flexDirection: 'column',
  left: '3.8rem',
  borderRadius: 6,
  boxShadow: '4px 4px 15px 5px $colors$shadow-secondary',
  minWidth: 200,
  minHeight: 80,
  position: 'absolute',
  zIndex: 2,
  overflow: 'hidden',
  animation: `${animations.fadeIn} 0.2s ease-in-out`,

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  li: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$accent-secondary',
    paddingHorizontal: '1rem',
    paddingVertical: '0.2rem',

    svg: {
      width: 16,
      height: 16,
    },
  },
})

export const CodeSandboxContainer = styled('div', {
  ...SeparatorStyles,

  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  paddingHorizontal: '0.5rem',
  paddingBottom: '0.5rem',

  svg: {
    width: 15,
    height: 15,
  },

  '@bp4': {
    justifyContent: 'flex-end',
    paddingHorizontal: '1rem',
  },
})

export const ExternalLink = styled(_ExternalLink, {
  ...ButtonStyles,

  fontSize: '0.9rem',

  '&:hover': {
    cursor: 'pointer',
  },
})
