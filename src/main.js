import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './I18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-vue/dist/bootstrap-vue'

createApp(App).use(router).use(i18n).mount('#app')
