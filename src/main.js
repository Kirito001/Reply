import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import router from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
