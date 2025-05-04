/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'sans-serif'], // Roboto as default sans-serif font
          // Optional: Define other fonts from your import if needed
          anton: ['Anton', 'sans-serif'],
          barlow: ['Barlow', 'sans-serif'],
          oswald: ['Oswald', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          quicksand: ['Quicksand', 'sans-serif'],
          teko: ['Teko', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };