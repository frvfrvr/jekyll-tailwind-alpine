/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.md",
    "!./node_modules/**/*", // Don't scan node_modules
    "!./vendor/**/*"        // Don't scan your Ruby gems
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}