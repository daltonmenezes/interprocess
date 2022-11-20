import { createStitches, ScaleValue, CSS } from '@stitches/react'

import { createCodeTheme } from './lib/react-syntax-highlighter/theme'
import { createKeyframes } from './keyframes'

export const { styled, css, globalCss, getCssText, keyframes, theme, config } =
  createStitches({
    theme: {
      colors: {
        'text-title': 'hsl(0, 0%, 100%)',
        'text-base': 'rgba(255, 255, 255, 0.87)',
        'text-support': 'rgba(255, 255, 255, 0.6)',
        'shape-primary': '#101010',
        'shape-secondary': '#1F1F1F',
        'shape-tertiary': '#2F2F2F',
        'shape-quaternary': '#3F3F3F',
        'shape-quinary': '#4F4F4F',
        'shape-senary': '#5F5F5F',
        'accent-primary': '#ff7ac8',
        'accent-secondary': '#50e1c7',
        'border-primary': 'rgba(36, 36, 36, 0.547)',
        'shadow-primary': '#00000047',
        'shadow-secondary': 'rgba(0, 0, 0, 0.5)',

        'text-gradient':
          '-webkit-linear-gradient(0deg, $accent-primary 0%, $accent-secondary 100%)',
      },

      fonts: {
        default: `Roboto`,
      },
    },

    media: {
      bp1: `(min-width: 375px)`,
      bp2: `(min-width: 640px)`,
      bp3: `(min-width: 768px)`,
      bp4: `(min-width: 1024px)`,
      bp5: `(min-width: 1440px)`,
    },

    utils: {
      paddingVertical: (value: ScaleValue<'space'> | string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      paddingHorizontal: (value: ScaleValue<'space'> | string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),

      marginVertical: (value: ScaleValue<'space'> | string) => ({
        marginTop: value,
        marginBottom: value,
      }),

      marginHorizontal: (value: ScaleValue<'space'> | string) => ({
        marginLeft: value,
        marginRight: value,
      }),
    },
  })

export * from './lib/react-syntax-highlighter/theme'

export const codeTheme = createCodeTheme({
  primary: config.theme.colors['accent-primary'],
  secondary: config.theme.colors['accent-secondary'],
})

export const animations = createKeyframes(keyframes)

export type Mixin = CSS<typeof config>
