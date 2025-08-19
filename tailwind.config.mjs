/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333',
        'orange': '#f27a1a',
        'medium-dark-gray': '#f2f2f2',
        'placeholder-text-gray': '#7d7d7d',
        'peach': '#ffefe7',
        'orange-pink': '#ffdfdd',
        'dark-peach': '#ff3e62',
        'medium-grey': '#B0B0B0',
        'mediumDark-gray': '#404040',
        'dropdownBg': "#F3F3F3",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },

    },
  },
  plugins: [],
};
