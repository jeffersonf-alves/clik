import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import VueLazyload from 'vue-lazyload'

const loadimage = require('./assets/load-loading.gif')
const errorimage = require('./assets/loading.png')

createApp(App)
    .use(router)
    .use(VueLazyload, {
        preLoad: 1.3,
        error: errorimage,
        loading: loadimage,
        attempt: 1
      })
    .mount('#app')
