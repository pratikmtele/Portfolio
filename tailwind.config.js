/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-white": "#F9FAFB",
        "light-gray": "#e0e0e0",
        gray: "#71717A",
      },
      fontSize: {
        xm: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        mxl: "36px",
        "2xl": "48px",
        "3xl": "64px",
      },
    },
  },
  plugins: [],
};
