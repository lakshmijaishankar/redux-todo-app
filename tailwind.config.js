/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        theme: {
          'very-dark-blue': 'var(--Very-Dark-Blue)',
          'very-dark-desaturated-blue': 'var(--Very-Dark-Desaturated-Blue)',
          'light-grayish-blue': 'var(--Light-Grayish-Blue)',
          'light-grayish-blue-hover': 'var(--Light-Grayish-Blue-hover)',
          'dark-drayish-blue': 'var(--Dark-Grayish-Blue)',
          'very-dark-drayish-blue': 'var(--Very-Dark-Grayish-Blue)',
          'very-dark-drayish-blue': 'var(--Very-Dark-Grayish-Blue)',
        }
      },
    },
  },
  plugins: [],
}

