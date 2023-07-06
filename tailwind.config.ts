import { theme } from './src/lib/config/general'
// @ts-ignore Could not find a declaration file for module '@tailwindcss/typography'.
import typography from '@tailwindcss/typography'
// @ts-ignore Could not find a declaration file for module 'daisyui'.
import daisyui from 'daisyui'
// @ts-ignore Could not find a declaration file for module '@tailwindcss/forms'.
// import forms from '@tailwindcss/forms'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  // theme: { extend: {} },
  theme: {
    extend: {
      colors: {
        primary: '#3F9378',
        secondary: '#2E3855',
        'base-100': '#E5EBEB',
        'base-200': '#E5EBEB',
        'pfp-navy': '#2E3855',
        'light-blue': '#E7F5F5',
        'light-green': '#DDF3EA',
        white: '#FFFFFF',
        'baby-blue': '#D0E6F2',
        'pfp-green': '#3F9378',
        'pfp-orange': '#EC8B5A',
      },
      letterSpacing: {
        menu: '0.15em',
      },
      fontFamily: {
        sans: ['Public Sans', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [typography, daisyui],
  daisyui: { themes: theme.map(({ name }) => name) }
}
