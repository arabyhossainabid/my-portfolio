/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  darkMode: 'class', // Enables dark mode via class strategy
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensures Tailwind scans all React files

  theme: {
    daisyui: {
      themes: ['light', 'black'],
    },
  },

  plugins: [daisyui],
};