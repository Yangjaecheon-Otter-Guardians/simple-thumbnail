/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-10': '#EDFFF2',
        'primary-20': '#DCFFE6',
        'primary-30': '#C0FFD2',
        'primary-40': '#D1FFA0',
        'primary-70': '#7BFFA0',
        'primary-100': '#0E0E0E',
        'primary-110': '#45F076',
        'primary-120': '#34E466',
        'primary-130': '#19D24D',
        'primary-160': '#16BD45',
        'grey-100': '#0A0A0A',
        'grey-80': '#484848',
        'grey-60': '#7D7D7D',
        'grey-40': '#A0A0A0',
        'grey-20': '#D0D0D0',
        'grey-10': '#CECECE',
        'grey-00': '#FBFBFB',
      },
      textColor: {
        active: '#0D0D0D',
        darken: '#303030',
        default: '#565656',
        muted: '#929292',
        disabled: '#C5C5C5',
        lighten: '#FBFBFB',
      },
      backgroundColor: {
        surface: '#FFFFFF',
        'on-surface': '#F0F0F0',
        divider: '#EDEDED',
        input: '#FAFAFA',
        'input-border-default': '#E2E2E2',
        'input-border-focus': '#1B1B1C',
      },
      accentColor: {
        'always-red': '#FF3040',
      },
      fontSize: {
        lg: '21px',
        md1: '18px',
        md2: '16px',
        sm: '14px',
        xsm: '12px',
      },
    },
  },
  plugins: [],
};
