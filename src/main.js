import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import VueLazyload from 'vue-lazyload'

const loadimage = require('./assets/load-loading.gif')

createApp(App)
    .use(router)
    .use(VueLazyload, {
        preLoad: 1.3,
        loading: loadimage,
        attempt: 1
      })
    .mount('#app')
