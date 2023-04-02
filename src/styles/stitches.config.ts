import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
        bodybgcolor: '#22212C',
        textcolor: '#837E9F',
        bgcards: '#302F3D',
        bgtechs: '#CB92B1',
    },

    fontSizes: {
      md:'0.875rem',
      lg:'1.438rem',
      xl: '1.5rem',
      '2xl':'2rem'
  },
}
});