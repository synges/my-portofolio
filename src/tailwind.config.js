module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },

        secondary: {
          100: '#7c8ba1',
          200: '#667892',
          300: '#506582',
          400: '#3a5173',
          500: '#243E63',
          600: '#203859',
          700: '#1d324f',
          800: '#192b45',
          900: '#16253b',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
