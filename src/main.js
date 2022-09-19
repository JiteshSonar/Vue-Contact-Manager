import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// font awsom icon
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

// bootstrap CSS and  JS
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


import "./styles.css"  // main css file
createApp(App).use(store).use(router).mount('#app')
