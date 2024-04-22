/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins" , "sans-serif"],
        openSans:["Open Sans" , "sans-serif"]
      },

      backgroundImage: {

        'template-pattern': "url(/src/assets/TemplateSectionImage.png)"
      }
    },
  },
  plugins: [],
}

