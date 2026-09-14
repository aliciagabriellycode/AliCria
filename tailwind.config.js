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
          DEFAULT: '#211F26',
          soft: '#4B4855',
          muted: '#726E7A',
        },
        paper: {
          DEFAULT: '#FBFAF8',
          white: '#FFFFFF',
        },
        line: {
          DEFAULT: '#E7E3ED',
          soft: '#EFECF4',
        },
        surface: '#F5F2FA',
        brand: {
          DEFAULT: '#4B2A7A',
          deep: '#331D57',
          bright: '#6B3FA0',
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
        lift: '0 20px 45px -20px rgba(51, 29, 87, 0.35)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
