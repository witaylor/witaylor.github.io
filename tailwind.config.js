module.exports = {
  purge: ['./**/*.html'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'primary-blue': '#5D8CD3',
      'primary-blue-translucent': 'rgba(93, 140, 211, 0.98)',
      // Job indicator
      'job-green': '#6FCF97',
      'job-yellow': '#FFE600',
      'job-red': '#FF7878',
      // Projects
      'travelhack-blue': '#55AFE6',
      'wesbos-yellow': '#FFC600',
      'solar-system-blue': '#213769',
      // Work
      'expedia-group-blue': '#000099',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      black: '#1D1D1F',
      white: '#FFFFFF',
      link: '#1565C0',
    }),
    fontFamily: {
      sans: [
        '"Josefin Sans"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Open Sans"',
        '"Helvetica Neue"',
        'sans-serif',
      ],
      cursive: [
        '"Gloria Hallelujah"',
        '"Josefin Sans"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Open Sans"',
        '"Helvetica Neue"',
        'sans-serif',
      ],
    },
    extend: {
      flex: {
        '2': '2 2 0%',
      },
      maxHeight: {
        '32': '32px',
        '64': '64px',
        '128': '128px',
      },
      maxWidth: {
        '40': '40%',
        '110': '110%',
        '50': '50%',
        '2/3': '66.66%',
        '64': '64px',
        '128': '128px',
        '256': '256px',
        '80': '80%',
        '680': '680px',
      },
      minHeight: {
        '64': '64px',
        '128': '128px',
      },
      minWidth: {
        '650': '650px',
        '110': '110%',
        '700': '700px',
        '1024': '1024px',
      },
      top: {
        '50': '50%',
      },
      spacing: {
        '1/1': '100%',
      },
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
