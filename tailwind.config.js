/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#223240",
        secondary: "#c47d57",
        text: "#e4ded5",
        right: "#302f39",
        "logo-color": "#d4ac8e",
        "blend-head": "#e4ded5",
        button: "#b55730",
        main: "#2d4850",
      },
      fontFamily: {
        head: "Fraunces72ptsupersoft",
        Palanquin: "Palanquin",
        Geomanist: "Geomanist",
      },
      backgroundImage: {
        background: "url('/Images/noise.webp')",
        "wavy-bg": "url('/Images/wavy-bg.svg')",
        noise:
          "url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61bbc96064c698bc567db060_noise10.webp')",
      },
    },
  },
  plugins: [],
};
