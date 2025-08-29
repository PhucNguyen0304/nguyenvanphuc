/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oklabRed: 'oklab(0.8 0.1 0.1)',
      },
      animation: {
    'spin-slow': 'spin 8s linear infinite',
    'fade-in': 'fadeIn 2s ease-in forwards',
    'blink': 'blink 1s step-end infinite',
     'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
          'float-wide': 'floatWide 8s ease-in-out infinite',
  'float-rotate': 'floatRotate 6s ease-in-out infinite',
  },
    keyframes: {
      floatWide: {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(60px, -40px)' },
  },
  floatRotate: {
    '0%': { transform: 'translate(0, 0) rotate(0deg)' },
    '50%': { transform: 'translate(-40px, 30px) rotate(180deg)' },
    '100%': { transform: 'translate(0, 0) rotate(360deg)' },
  },
      float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
  },
    },
  },
  plugins: [],
}
