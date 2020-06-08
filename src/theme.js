// theme.js
// const breakpoints = [ '40em', '52em', '64em', '80em' ];

// aliases
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3]; 

export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    world: "",
    zero:'hsl(11, 0%, 97%)',
    one:'hsl(11, 0%, 84%)',
    two: 'hsl(11, 0%, 71%)',
    three: 'hsl(11, 0%, 68%)',
    four: 'hsl(11, 0%, 55%)',
    five: 'hsl(11, 0%, 42%)',
    six: 'hsl(11, 0%, 29%)',
    seven: 'hsl(11, 0%, 16%)',
    eight: 'hsl(11, 0%, 3%)',
    black: 'hsl(11, 0%, 0%)',
    white: '#fff',
    blue: '#077ce0',
    navy: '#004175',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary'
    }
  }
}
