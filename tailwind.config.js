/** @type {import('tailwindcss').Config} */

export default {
  prefix: 'ak-',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface1: 'var(--color-surface1)',
        surface2: 'var(--color-surface2)',
        surface3: 'var(--color-surface3)',

        text1: 'var(--color-text1)',
        text2: 'var(--color-text2)',
        text3: 'var(--color-text3)',
        text4: 'var(--color-text4)',

        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',

        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',

        black: 'var(--color-black)',
        white: 'var(--color-white)',
      },
      borderRadius: {
        DEFAULT: 'var(--rounded)',
      },
      fontFamily: {
        sans: 'var(--fontFamily-sans)',
        DEFAULT: 'var(--fontFamily-sans)',
      },
      fontSize: {
        title1: [
          'var(--fontSize-title1)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
        title2: [
          'var(--fontSize-title2)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
        title3: [
          'var(--fontSize-title3)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
        title4: [
          'var(--fontSize-title4)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
        body1: ['var(--fontSize-body1)', 'normal'],
        body2: ['var(--fontSize-body2)', 'normal'],
        body3: ['var(--fontSize-body3)', 'normal'],
        body4: ['var(--fontSize-body4)', 'normal'],
        body5: ['var(--fontSize-body5)', 'normal'],
        body6: ['var(--fontSize-body6)', 'normal'],
      },
    },
  },
  plugins: [],
};
