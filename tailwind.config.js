/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryColor":"#0f171e",
        "secondaryColor":"#1a242f",
        "fontPrimary":"white",
        "fontSecondary":"#79b8f3",
        "slate-gray":"#6D6D6D"
      },
      boxShadow:{
        '3xl':"0 10px 40px rgba(0,0,0,0.1)"
      
      }
    },
  },
  plugins: [],
}

