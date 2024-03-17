/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "1024px"
    // }, use the automatic now for now unless you have to create new ones
    extend: {},
    colors: {
      primary: "#010a5e",
      primarylight: "#010d78",
      secondary: "#ffcc00",
      paragraph: "#c0c0c0",    
      white: '#fff',
      black: "#000",
      green: "#007936",
      red: "#cc3433",
      dark: '#000',
      darkLight: "#171717",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem"
      }
    },
    fontFamily: {
      oswald: ["Oswald", "san-serif"],
      dmsans: ["DM Sans", "sans-serif"]
    }
  },
  plugins: [],
}