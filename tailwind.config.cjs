module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,md}"],
  theme: {
    fontFamily: {
      sans: ["raleway", "system-ui"],
      serif: ["Libre Baskerville", "Georgia"],
      europa_light: ["europa_light"],
      europa_bold: ["europa_bold"],
      europa_regular: ["europa_regular"]
    },
    colors: {
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      contrast: "var(--contrast)",
      grey2: "var(--grey2)",
      grey3: "var(--grey3)",
      base: "var(--base)",
      accent: "var(--accent)",
      purple: "var(--purple)",
    },
  }
};
