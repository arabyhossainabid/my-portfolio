/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode via class strategy
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans all React files
  ],

  daisyui: {
    themes: [
      "light",
      "black",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

