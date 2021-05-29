module.exports = {
  purge: {
    content: ["./**/*.vue"],
    options: {
      safelist: ["bg-default-gray", "bg-primary", "p-*"]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "default-gray": "#363740",
        "secondary-gray": "#505050"
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
