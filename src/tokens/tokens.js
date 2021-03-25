const colors = {
  basic: {
    white: '#ffffff',
    black: '#000000',
  },
  background: {
    one: '#ecf0f2',
    two: '#006384',
    three: '#3a3a3a',
    four: '#f5f6f6',
  },
  grey: {
    light: '#787b80',
    mid: '#2d3a3c',
    dark: '#34393b',
  },
  blue: {
    dark: '#004769',
  },
  header: {
    background: '#002d44',
    link: '#99aab4'
  }
};
  
const fontSizes = {
  '4xl': '96px',
  xxxl: '66px',
  xxl: '60px',
  xl: '48px',
  l: '38px',
  m: '28px',
  s: '20px',
  xs: '18px',
  xxs: '16px',
  xxxs: '14px',
  '4xs': '12px',
};

const section = {
  padding: {
    s: '18px',
    m: '24px',
  },
  maxWidth: '1190px'
}
  
const breakpoints = {
  xs: { min: 0, max: 374 },
  s: { min: 375, max: 767 },
  m: { min: 768, max: 1479 },
  l: { min: 1480, max: Infinity },
};

const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs.min}px)`,
  s: `(min-width: ${breakpoints.s.min}px)`,
  m: `(min-width: ${breakpoints.m.min}px)`,
  l: `(min-width: ${breakpoints.l.min}px)`,
};
  
module.exports = {
  customProperties: {
    breakpoint: breakpoints,
    color: colors,
    section,
    font: {
      size: fontSizes,
    },
  },
  customMedia: mediaQueries,
  environmentVariables: {},
  customSelectors: {},
};
