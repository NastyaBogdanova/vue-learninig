import { createApp } from 'vue'
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@/scss/app.scss';
import App from '@/App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
})

createApp(App).use(vuetify).mount('#app')
