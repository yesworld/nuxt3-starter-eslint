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
        secondary: '#22C55E',
        'secondary-200': '#d1ffcb',
        third: '#f54749',
        fourth: '#fbaf38',
      },
    },
  },
}
