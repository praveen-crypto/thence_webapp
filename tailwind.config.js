/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
        xl: '0rem',
        '2xl': '1rem',
        '3xl': '8rem',
        '4xl': '10rem',
      },
    },
    extend: {
      screens: {
        'xl': '1280px',
        '2xl': '1366px',
        '3xl': '1700px',
        '4xl': '1900px',
      },
    },
  },
  plugins: [],
}

