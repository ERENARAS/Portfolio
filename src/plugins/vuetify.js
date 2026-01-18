import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#3625f4',
          'primary-light': '#5c4dff',
          secondary: '#8b5cf6',
          background: '#0f0f12',
          surface: '#1a1a20',
          'surface-hover': '#23232a',
          'text-dim': '#9590cb',
          error: '#ef4444',
          success: '#22c55e',
          warning: '#f59e0b',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'text-transform: none;',
    },
  },
})
