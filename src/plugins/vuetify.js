// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#6750A4',
          'primary-c': '#EADDFF',
          secondary: '#625B71',
          'secondary-c': '#d3e3fd',
          tertiary: '#7D5260',
          'tertiary-c': '#c4eed0',
          error: '#B3261E',
          'error-c': '#F9DEDC',
          surface: '#FFFBFE',
          'surface-variant': '#f2f6fc',
          background: '#eaf1fb',
          outline: '#79747E'
        }
      },
      dark: {
        colors: {
          primary: '#D0BCFF',
          'primary-c': '#4F378B',
          secondary: '#CCC2DC',
          'secondary-c': '#4A4458',
          tertiary: '#EFB8C8',
          'tertiary-c': '#633B48',
          error: '#F2B8B5',
          'error-c': '#8C1D18',
          surface: '#1C1B1F',
          'surface-variant': '#2d2f33',
          background: '#353940',
          outline: '#938F99',
        }
      }
    }
  }
})
