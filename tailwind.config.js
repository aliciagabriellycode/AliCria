/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B1427',
          soft: '#4A4258',
          muted: '#6B6379',
        },
        paper: {
          DEFAULT: '#FAF8F5',
          white: '#FFFFFF',
        },
        line: {
          DEFAULT: '#E7E3ED',
          soft: '#EFECF4',
        },
        surface: '#F2ECFF',
        lilac: '#D8C9FB',
        brand: {
          DEFAULT: '#5A2BC9',
          deep: '#26104F',
          bright: '#8E63F2',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        '6xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '7xl': ['4.75rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(33, 31, 38, 0.04)',
        lift: '0 28px 50px -28px rgba(90, 43, 201, 0.55)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
