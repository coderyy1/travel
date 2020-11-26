
import Vue, { createApp } from 'vue';
import App from './App'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'




createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')

