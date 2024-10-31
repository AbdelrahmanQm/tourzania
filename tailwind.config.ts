import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      xmd: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      beige: "#f1dbb7",
      yellow: "#faab36",
      orange: "#f78104",
      red: "#fd5901",
      lightgreen: "#249ea0",
      green: "#008083",
      darkgreen: "#005f60",
      gray: "#555",
      darkgray: "#333",
      white: "#ffffff",
      lightgray: "#d3dce6",
    },
    extend: {
      fontFamily: {
        body: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
