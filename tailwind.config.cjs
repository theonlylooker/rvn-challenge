/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        rvnBG: "#222528",
        rvnComponentBG: "#2C2F33",
        rvnModalBG: "#393D41",
        rvnRed: "#DA584B",
        rvnRedOpacity: "#DA584B10",
        rvnRedGradient: "#D24D4D10",
        rvnRedAction: "#EBA59E",
        rvnTextSecondary: "#94979A",
        rvnTextSecondaryOpacity: "#94979A10",
      },
    },
  },
  plugins: [],
};
