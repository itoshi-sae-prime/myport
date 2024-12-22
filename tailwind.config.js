/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false,
  screens: {
    sm: '350px',
    md: '640px',
    lg: '1024px',
    xl: '1280px',
  },
  fontFamily: {
    primary: "var(--font-jetbrainsMono)",
  },
  theme: {
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}