/** @type {import('tailwindcss').Config} */
export const tailwindConf = {
  content: [
    // apps content
    `app/**/*.{js,ts,jsx,tsx}`,
    // pages
    `./pages/**/*.{js,ts,jsx,tsx}`,
    `./components/**/*.{js,ts,jsx,tsx}`,
    // packages content
    `../../packages/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
