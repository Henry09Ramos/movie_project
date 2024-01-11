/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,react}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {},
    // colors:{
    // "dark-purple":"#081A51",
    // 'light-white': 'rgba(255,255,255,0.18)',
    // "lay-white":"#f8fafc"
    // },
  },
  plugins: [],
}

