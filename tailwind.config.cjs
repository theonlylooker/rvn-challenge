/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rvnBG: "#222528",
        rvnComponentBG: "#2C2F33",
        rvnRed: "#DA584B",
        rvnRedGradient: "#D24D4D10",
      },
    },
  },
  plugins: [],
};
