/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        slg: { max: '1224px' },
        smd: { max: '900px' },
        ssm: { max: '768px' },
        sms: { max: '576px' },
        smss: { max: '524px' },
      },
      fontSize: {
        14: '14px',
        13: '13px',
        12: '12px',
        11: '11px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
      },
      lineHeight: {
        0.2: '0.2',
      },

      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'bg-color': ' #f6f6f9',
        'bg-primary': '#7380ec',
        'bg-basic': 'rgba(0, 200, 150, 0.80)',
        'bg-light': 'rgba(132,139,200,0.18)',
      },
      textColor: {
        basic: 'rgba(0, 200, 150, 0.80)',
      },
      borderWidth: {
        1: '1px',
      },
      color: {
        primary: '#7380ec',
      },
      Colors: {
        400: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        40: '40px',
        250: '250px',
        280: '280px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },

      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
