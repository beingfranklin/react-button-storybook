module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000',
          hover: '#7D7D7D',
          pressed: '#E5E5E5',
          disabled: '#E5E5E5',
        },
        secondary: {
          DEFAULT: '#FFF',
          hover: '#C8C8C8',
          pressed: '#E5E5E5',
          disabled: '#C8C8C8',
        },
        tertiary: {
          DEFAULT: '#FFF',
          hover: '#C8C8C8',
          pressed: '#E5E5E5',
          disabled: '#C8C8C8',
        },
        fontPrimary: {
          DEFAULT: '#FFF',
          hover: '#FFF',
          pressed: '#C8C8C8',
          disabled: '#7D7D7D',
        },
        fontSecondary: {
          DEFAULT: '#000',
          hover: '#000',
          pressed: '#7D7D7D',
          disabled: '#7D7D7D',
        },
        fontTertiary: {
          DEFAULT: '#000',
          hover: '#000',
          pressed: '#7D7D7D',
          disabled: '#7D7D7D',
        },
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        'tertiary-border': '#000',
        'tertiary-border-hover': '#000',
        'tertiary-border-pressed': '#7D7D7D',
        'tertiary-border-disabled': '#7D7D7D',
      }),
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        'extra-2xl': '100px',
      },
      fontSize: {
        btn: '12px',
      },
      lineHeight: {
        'extra-loose': '16px',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      // backgroundColor: ['disabled'],
      // cursor: ['disabled']
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const buttons = {
        '.button': {
          display: 'inline-flex',
          padding: '12px 24px',
          alignItems: 'center',
          gap: '10px',
          borderRadius: theme('borderRadius.extra-2xl'),
          fontSize: theme('fontSize.btn'),
          fontFamily: theme('fontFamily.Montserrat'),
          fontWeight: '600',
          lineHeight: theme('lineHeight.extra-loose'),
        },
        '.button-primary': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.fontPrimary.DEFAULT'),
        },
        '.button-primary:hover': {
          backgroundColor: theme('colors.primary.hover'),
          color: theme('colors.fontPrimary.hover'),
        },
        '.button-primary:active': {
          backgroundColor: theme('colors.primary.pressed'),
          color: theme('colors.fontPrimary.pressed'),
        },
        '.button-primary:disabled': {
          backgroundColor: theme('colors.primary.disabled'),
          color: theme('colors.fontPrimary.disabled'),
          cursor: 'not-allowed',
        },
        '.button-secondary': {
          backgroundColor: theme('colors.secondary.DEFAULT'),
          color: theme('colors.fontSecondary.DEFAULT'),
        },
        '.button-secondary:hover': {
          backgroundColor: theme('colors.secondary.hover'),
          color: theme('colors.fontSecondary.hover'),
        },
        '.button-secondary:active': {
          backgroundColor: theme('colors.secondary.pressed'),
          color: theme('colors.fontSecondary.pressed'),
        },
        '.button-secondary:disabled': {
          backgroundColor: theme('colors.secondary.disabled'),
          color: theme('colors.fontSecondary.disabled'),
          cursor: 'not-allowed',
        },
        '.button-tertiary': {
          backgroundColor: theme('colors.tertiary.DEFAULT'),
          color: theme('colors.fontTertiary.DEFAULT'),
          border: `1px solid ${theme('borderColor.tertiary-border')}`,
        },
        '.button-tertiary:hover': {
          backgroundColor: theme('colors.tertiary.hover'),
          color: theme('colors.fontTertiary.hover'),
          border: `1px solid ${theme('borderColor.tertiary-border-hover')}`,
        },
        '.button-tertiary:active': {
          backgroundColor: theme('colors.tertiary.pressed'),
          color: theme('colors.fontTertiary.pressed'),
          border: `1px solid ${theme('borderColor.tertiary-border-pressed')}`,
        },
        '.button-tertiary:disabled': {
          backgroundColor: theme('colors.tertiary.disabled'),
          color: theme('colors.fontTertiary.disabled'),
          cursor: 'not-allowed',
          border: `1px solid ${theme('borderColor.tertiary-border-disabled')}`,
        },
      }
      addComponents(buttons)
    },
  ],
}
