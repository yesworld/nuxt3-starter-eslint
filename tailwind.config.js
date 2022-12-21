module.exports = {
  content: ['./src/**/*.{vue,js,scss}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: '#27272f', // bg-neutral-800
        smoke: '#f9f9fb',
        'primary-700': '#7ad0e9',
        primary: '#dcf4fd',
        secondary: '#34c4ae',
        'secondary-200': '#d6f5f0',
        third: '#f54749',
        fourth: '#fbaf38',
      },
    },
  },
}
