import { getPublicPath } from 'shared/utils'
import { globalCss, animations } from '.'

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
  },

  ':root': {
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',
    colorScheme: 'dark',
    scrollBehavior: 'smooth',
    scrollbarGutter: 'stable',
  },

  'body, input, button, textarea, select': {
    color: '$text-base',
    background: 'transparent',
    fontFamily: '$default',
  },

  'h1, h2, h3, h4, h5, h6': {
    color: '$text-base',
    lineHeight: 1.1,
  },

  a: {
    color: '$text-base',
    textDecoration: 'none',
    transition: 'all 0.2s ease',

    'svg path': {
      transition: 'all 0.2s ease',
    },

    '&:hover': {
      color: '$accent-primary',

      'svg path': {
        fill: '$accent-primary',
      },
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  li: { listStyle: 'none' },

  button: {
    cursor: 'pointer',
    background: 'transparent',
    transition: 'all 0.2s ease',

    'svg path': {
      transition: 'all 0.2s ease',
    },

    '&:hover': {
      color: '$accent-primary',

      'svg path': {
        fill: '$accent-primary',
      },
    },

    '&:active': {
      transform: 'scale(0.95)',
    },
  },

  body: {
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: '#000000',
    backgroundImage: `url("${getPublicPath('/background.svg')}")`,
    willChange: 'background-size',
    backgroundAttachment: 'fixed',
    animation: `${animations.fadeIn} 1s ease`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300%',
    backgroundPosition: 'center center',
    overflowX: 'hidden',

    '@bp4': {
      backgroundAttachment: 'unset',
      animation: `${animations.background} 1s ease forwards`,
    },
  },

  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
    marginRight: '10px',
  },

  '::-webkit-scrollbar-corner': {
    background: 'none',
    border: 'none',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$shape-tertiary',
    borderRadius: '3px',
    cursor: 'move',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
    border: 'none',
  },

  '.animate': {
    opacity: 0,
    animation: `${animations.fadeIn} 1s ease forwards`,
  },
})()
