import { styled } from 'styles'

import { Title as _Title } from 'components/Layout/Title'
import { getPublicPath } from 'shared/utils'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  height: '100%',
  width: '100%',
  paddingBottom: '1.5rem',
  paddingTop: '3.7rem',

  pre: {
    fontFamily: 'inherit',
    lineHeight: '1.5',
    textAlign: 'left',
    width: '100%',
    color: '$accent-secondary',
  },

  '@bp4': {
    paddingTop: 0,
  },
})

export const MenuButton = styled('button', {
  display: 'flex',

  '@bp4': {
    display: 'none',
  },

  variants: {
    active: {
      true: {
        'svg g': {
          stroke: '$accent-secondary',
        },
      },
    },
  },
})

export const Sidebar = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  maxWidth: '84%',
  height: '-webkit-fill-available',
  overflowY: 'auto',
  padding: '1.5rem',
  paddingTop: '3.3rem',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  hyphens: 'auto',
  top: '4.2rem',
  left: 0,
  zIndex: 999,
  position: 'fixed',

  background: '$shape-primary',
  border: '1px solid $border-primary',
  borderRadius: 15,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 0,
  boxShadow: '0 2px 2px 1px $colors$shadow-primary',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  li: {
    display: 'flex',
    flexDirection: 'column',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',

      span: {
        textTransform: 'capitalize',
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '$accent-secondary',

        '@bp4': {
          fontSize: '1.2rem',
        },
      },

      a: {
        transition: 'all 0.2s ease-in-out',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
      },

      '&:has(span) a': {
        marginLeft: '1rem',
        width: 'fit-content',
      },

      '&:has(span + div) a': {
        marginLeft: 'unset',
      },

      '&:has(span + div) div': {
        marginBottom: '0.5rem',
      },

      'ul li': {
        marginLeft: '1rem',

        span: {
          fontSize: '1rem',
        },
      },
    },
  },

  '@bp4': {
    display: 'flex',
    top: 0,
    left: 0,
    position: 'relative',
    height: 'auto',
    zIndex: 0,
    maxWidth: '220px',

    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  transition: 'all 0.2s ease-in-out',

  variants: {
    visibility: {
      true: {
        transform: 'translateX(0)',
      },

      false: {
        transform: 'translateX(-100%)',

        '@bp4': {
          transform: 'translateX(0)',
          minWidth: 'fit-content',
        },
      },
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem 1.5rem',
  gap: '1rem',
  backgroundColor: '$shape-primary',
  borderRadius: 15,
  border: '1px solid $border-primary',
  boxShadow: '0 2px 2px 1px $colors$shadow-primary',
  width: '100%',
  minHeight: '100%',

  '@bp4': {
    padding: '2rem 3rem',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: '1px solid black',
  },
})

export const Header = styled('header', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignSelf: 'center',
  alignItems: 'center',
  minHeight: '100%',
  justifyContent: 'space-between',
  gap: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
  },

  'div:first-of-type': {
    width: '100%',
    justifyContent: 'flex-start',
  },

  'div:last-of-type': {
    width: '100%',
    justifyContent: 'flex-end',
  },

  a: {
    transition: 'filter 0.2s ease-in-out',

    '&:hover': {
      filter: 'brightness(0.7)',
    },
  },

  '@bp2': {
    flexDirection: 'row',
    gap: 0,

    div: {
      flexDirection: 'row',
    },

    'div:first-of-type': {
      width: 'fit-content',
    },
  },
})

export const Title = styled(_Title, {
  fontSize: '1.3rem',
  letterSpacing: '0.1rem',
  textTransform: 'none',
})

export const Article = styled('article', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    maxWidth: 'fit-content',
    fontSize: '1.7rem',
    letterSpacing: 0,
    transition: 'all 0.2s ease-in-out',
  },

  'h1:first-of-type:hover': {
    filter: 'brightness(0.7)',
  },

  'h1, h2, h3, h4, h5, h6': {
    marginVertical: '1rem',
    position: 'relative',

    '&:hover a::before': {
      content: '',
      display: 'block',
      width: 15,
      height: 15,
      zIndex: 1,
      top: '20%',
      right: 'calc(100% + 0.2rem)',
      background: `url(${getPublicPath('/link.svg')}) no-repeat center`,
      backgroundSize: 'contain',
      position: 'absolute',
    },
  },

  p: {
    fontSize: '1rem',
    color: '$text-support',
    textAlign: 'left',
  },

  ul: {},

  li: {
    marginLeft: '1rem',
    listStyleType: 'circle',
  },

  strong: {
    color: '$accent-secondary',

    '&:nth-of-type(even)': {
      color: '$accent-primary',
    },
  },
})
