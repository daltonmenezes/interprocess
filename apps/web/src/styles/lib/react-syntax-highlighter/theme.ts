export function createCodeTheme({
  primary,
  secondary,
}: {
  primary: string
  secondary: string
}) {
  return {
    'code[class*="language-"]': {
      textAlign: 'left',
      graySpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      color: '#eee',
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1em',
      lineHeight: '1.5em',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
    },

    'pre[class*="language-"]': {
      textAlign: 'left',
      graySpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      color: '#eee',
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '1em',
      lineHeight: '1.5em',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      overflow: 'auto',
      position: 'relative',
      // margin: '0.5em 0',
      // padding: '1.25em 1em',
    },

    'code[class*="language-"]::-moz-selection': {
      background: '#363636',
    },

    'pre[class*="language-"]::-moz-selection': {
      background: '#363636',
    },

    'code[class*="language-"] ::-moz-selection': {
      background: '#363636',
    },

    'pre[class*="language-"] ::-moz-selection': {
      background: '#363636',
    },

    'code[class*="language-"]::selection': {
      background: '#363636',
    },

    'pre[class*="language-"]::selection': {
      background: '#363636',
    },

    'code[class*="language-"] ::selection': {
      background: '#363636',
    },

    'pre[class*="language-"] ::selection': {
      background: '#363636',
    },

    ':not(pre) > code[class*="language-"]': {
      graySpace: 'normal',
      borderRadius: '0.2em',
      padding: '0.1em',
    },

    '.language-css > code': {
      color: secondary,
    },

    '.language-sass > code': {
      color: secondary,
    },

    '.language-scss > code': {
      color: secondary,
    },

    '[class*="language-"] .namespace': {
      Opacity: '0.7',
    },

    atrule: {
      color: secondary,
    },

    'attr-name': {
      color: '#64ffa4',
    },

    'attr-value': {
      color: secondary,
    },

    attribute: {
      color: secondary,
    },

    boolean: {
      color: secondary,
    },

    builtin: {
      color: '#ffcb6b',
    },

    cdata: {
      color: primary,
    },

    char: {
      color: primary,
    },

    class: {
      color: '#ffcb6b',
    },

    'class-name': {
      color: primary,
    },

    comment: {
      color: '#616161',
    },

    constant: {
      color: secondary,
    },

    deleted: {
      color: secondary,
    },

    doctype: {
      color: '#616161',
    },

    entity: {
      color: secondary,
    },

    function: {
      color: primary,
    },

    hexcode: {
      color: '#f2ff00',
    },

    id: {
      color: secondary,
      fontWeight: 'bold',
    },

    important: {
      color: secondary,
      fontWeight: 'bold',
    },

    inserted: {
      color: primary,
    },

    keyword: {
      color: secondary,
    },

    number: {
      color: secondary,
    },

    operator: {
      color: 'gray',
    },

    prolog: {
      color: '#616161',
    },

    property: {
      color: primary,
    },

    'pseudo-class': {
      color: secondary,
    },

    'pseudo-element': {
      color: secondary,
    },

    punctuation: {
      color: 'gray',
    },

    regex: {
      color: '#f2ff00',
    },

    selector: {
      color: secondary,
    },

    string: {
      color: secondary,
    },

    symbol: {
      color: secondary,
    },

    tag: {
      color: secondary,
    },

    unit: {
      color: secondary,
    },

    url: {
      color: secondary,
    },

    variable: {
      color: secondary,
    },
  } as { [key: string]: React.CSSProperties }
}
