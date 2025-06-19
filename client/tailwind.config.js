/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize :{
        'course-details-small': ['26px', '36px'],
        'course-details-large': ['36px', '46px'],
        'home-heading-small': ['28px', '46px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['15px', '21px'],
      }
    },
  },
  plugins: [],
}