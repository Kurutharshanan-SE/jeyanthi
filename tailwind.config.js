export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F1',
        shell: '#F3EBDF',
        sand: '#E6D8C3',
        clay: '#B08968',
        bark: '#4A3B2E',
        ink: '#2C231B',
        moss: '#6E7C5B',
        gold: '#B4924F',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      borderRadius: {
        arch: '999px 999px 40px 40px',
      },
    },
  },
  plugins: [],
}
