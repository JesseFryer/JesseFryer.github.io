/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10p': '10%',
        '25p': '25%',
        '50p': '50%',
        '75p': '75%',
        '90p': '90%',
      },
    },
  },
  plugins: [],
}