/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hikeroo-bg': '#3F3D3D',
        'hikeroo-yellow': '#FFFF99',
      },
      fontFamily: {
        sans: ['var(--font-opensans)', 'sans-serif'],
        pacifico: ['var(--font-pacifico)', 'cursive'],
        mousememoirs: ['var(--font-mousememoirs)', 'sans-serif'],
      },
      fontSize: {
        'logo': ['32px', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        }],
        'logo-mobile': ['24px', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        }],
        'heading': ['96px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        }],
        'heading-tablet': ['72px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        }],
        'heading-mobile': ['48px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
        }],
        'body': ['32px', {
          lineHeight: '1.5',
        }],
        'body-mobile': ['24px', {
          lineHeight: '1.5',
        }],
        'button': ['20px', {
          lineHeight: '1.4',
        }],
      }
    },
  },
  plugins: [],
} 