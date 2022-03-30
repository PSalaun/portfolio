module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      ui: ['Arial', 'sans-serif'],
      sans: ['Trebuchet MS', 'sans-serif'],
    },
    colors: {
      'dark': '#44403C',
      'light': '#FAFAF9',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};