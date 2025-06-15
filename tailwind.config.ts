import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const containerPlugin = plugin(function ({ addUtilities, theme }) {
  return addUtilities({
    '.container-xs': {
      maxWidth: theme('screens.xs'),
      marginInline: 'auto',
    },
    '.container-sm': {
      maxWidth: theme('screens.sm'),
      marginInline: 'auto',
    },
    '.container-md': {
      maxWidth: theme('screens.md'),
      marginInline: 'auto',
    },
    '.container-lg': {
      maxWidth: theme('screens.lg'),
      marginInline: 'auto',
    },
    '.container-xl': {
      maxWidth: theme('screens.xl'),
      marginInline: 'auto',
    },
    '.container-2xl': {
      maxWidth: theme('screens.2xl'),
      marginInline: 'auto',
    },
    '.container-3xl': {
      maxWidth: theme('screens.3xl'),
      marginInline: 'auto',
    },
    '.container-4xl': {
      maxWidth: theme('screens.4xl'),
      marginInline: 'auto',
    },
    '.container-5xl': {
      maxWidth: theme('screens.5xl'),
      marginInline: 'auto',
    },
  })
})

export default {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        // default tailwind values
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px', // hd
        '2xl': '1536px',
        '3xl': '1920px', // full hd
        '4xl': '2560px', // 2k
        '5xl': '3840px', // 4k
      },
      colors: {
        primary: {
          50: 'hsl(221, 28%, 95%)',
          100: 'hsl(221, 28%, 90%)',
          200: 'hsl(221, 28%, 80%)',
          300: 'hsl(221, 28%, 70%)',
          400: 'hsl(221, 28%, 60%)',
          500: 'hsl(221, 28%, 50%)',
          600: 'hsl(221, 28%, 40%)',
          700: 'hsl(221, 28%, 30%)',
          800: 'hsl(221, 28%, 20%)',
          900: 'hsl(221, 28%, 10%)',
        },
        secondary: {
          50: 'hsl(357, 83%, 95%)',
          100: 'hsl(357, 83%, 90%)',
          200: 'hsl(357, 83%, 80%)',
          300: 'hsl(357, 83%, 70%)',
          400: 'hsl(357, 83%, 60%)',
          500: 'hsl(357, 83%, 50%)',
          600: 'hsl(357, 83%, 40%)',
          700: 'hsl(357, 83%, 30%)',
          800: 'hsl(357, 83%, 20%)',
          900: 'hsl(357, 83%, 10%)',
        },
      },
      fontFamily: {
        enriqueta: ['var(--font-figtree)'],
        cormorantGaramond: ['var(--cormorant-garamond)'],
      },
    },
  },
  plugins: [containerPlugin, scrollbar],
} satisfies Config
