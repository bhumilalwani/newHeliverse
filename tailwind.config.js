/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens:{
            'my1':'480px'
        },
      extend: {
        fontFamily:{
            sora:"sora-regular"
        }
      },
    },
    plugins: [],
  }