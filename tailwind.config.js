/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./custom-screen-sizes.css", /* Add the custom-screen-sizes.css file */
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px', /* Replace with your desired screen size */
        'md': '425px',
        'lg': '768px', /* Replace with your desired screen size */
        'xl': '1024px', /* Replace with your desired screen size */
        '2xl': '1200px', /* Replace with your desired screen size */
        
      },
    
    },
  },
  plugins: [],
}