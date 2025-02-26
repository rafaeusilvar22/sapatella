/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        '3xl': '1280px' // Breakpoint personalizado para telas muito grandes
      },
      colors: {
        primary: {
          500: '#CF215B', // main color 
          600: '#b91c1c',
          900: '#2C0713'
        },
        secondary: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D3D3D3', // bg input header
          400: '#A3A3A3',
          500: '#737373',
          600: '#4F4F4F', // text color
          700: '#404040',
          800: '#B0B0B0'
        }
      }
    }
  },
  plugins: []
};