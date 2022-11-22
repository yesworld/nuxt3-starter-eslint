module.exports = {
  content: ['./src/**/*.{vue,js,scss}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '576px',
      md: '992px',
      lg: '1450px',
      // 'xl': '1800px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: '#262626', // bg-neutral-800
        primary: '#5c6b28',
        'primary-200': '#e7e8a6',
        secondary: '#141c11',
        third: '#8c4511',
        'third-200': '#da9432',
      },
      fontSize: {
        lg: ['18px', '24px'],
        xl: ['24px', '30px'],
        '2xl': ['30px', '40px'],
        '3xl': [
          '36px',
          {
            lineHeight: '40px',
            letterSpacing: '0.3px',
            fontWeight: '500',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '0.2px',
            fontWeight: '700',
          },
        ],
      },
    },
  },
}
