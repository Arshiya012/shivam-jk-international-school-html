/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,php}"],
  theme: {
    container: {
      padding: "15px",
      center: true,
      screens: {
        sm: "100%",
        md: "767px",
        lg: "991px",
        xl: "1199px",
      },
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "30px",
      xl: "48px",
      "2xl": "60px",
    },
    screens: {
      //as per bs3
      "2xl": { max: "1399px" },
      xl: { max: "1199px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "575px" },
    },
    extend: {
      colors: {
        p: {
          1: "var(--color-p-1)",
          2: "var(--color-p-2)",
        },
        s: {
          1: "var(--color-s-1)",
        },
        b: {
          1: "var(--color-b-1)",
          2: "var(--color-b-2)",
        },
        g: {
          1: "var(--color-g-1)",
        },
        w: {
          1: "var(--color-w-1)",
        },
      },

      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        bry: ["BrittanySignature", "sans-serif"],
      },
    },
  },
  plugins: [],
};
