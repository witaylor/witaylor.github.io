/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#EFE6D8",
        ink: "#1F1F1F", // primary text color
        stone: "#555555", // secondary text color
        accent: "#88498F", // primary accent color
        "accent-light": "#A86BB0", // lighter accent for buttons
        "accent-dark": "#6B3A70", // darker accent for hover states
        "button-light": "#E1CCA7", // neutral beige button
        "button-light-hover": "#D4B681", // darker beige for hover
      },
    },
    fontFamily: {
      sans: [
        "Open sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "Lora",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
  },
  plugins: [],
};
