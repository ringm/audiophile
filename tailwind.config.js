module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#D87D4A',
        accentSec: '#fbaf85',
        light: '#fafafa',
        lightSec: '#f1f1f1',
        lightTer: '#CFCFCF',
        dark: '#101010',
        darkSec: '#191919',
        darkTer: '#808080',
      },
      backgroundImage: {
        'home-mobile': "url(/assets/home/mobile/image-header.jpg)",
        'home-tablet': "url(/assets/home/tablet/image-header.jpg)",
        'home-desktop': "url(/assets/home/desktop/image-hero.jpg)",
      },
      width: {
        '280px': '280px',
        '320px': '320px',
        '475px': '475px',
        '520px': '520px',
        '945px': '945px'
      },
      height: {
        '125px': '125px',
        '185px': '185px',
        '200px': '200px',
        '280px': '280px',
        '320px': '320px',
        '475px': '475px',
        '520px': '520px',
        '600px': '600px',
        '720px': '720px',
        '945px': '945px'
      },
      letterSpacing: {
        'superWidest': '0.625em'
      },
      borderRadius: {
        DEFAULT: '8px'
      },
      gridTemplateColumns: {
        '40/60': '40% 60%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
