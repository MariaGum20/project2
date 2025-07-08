import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Стили Vuetify
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})