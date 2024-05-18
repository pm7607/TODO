/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'merriweather-sans': ['"Merriweather Sans"', 'sans-serif'],
      },
      colors:{
        bgDark:"rgba(31, 35, 45, 1)",
        textop:"rgba(240,138,46,85)",
        btc:"rgba(255,247,228,100)",
        textbtnclr:"rgba(43,48,62,100)",
      },
    },
  },
  plugins: [
   
  ],
};

