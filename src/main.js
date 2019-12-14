import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Anasayfa from './Anasayfa.vue'
import Urunler from './Urunler.vue'
import Mobil from './Mobil.vue'
import Slider from './Slider.vue'
import Detay1 from './Detay1.vue'
import Eposta from './Eposta.vue'
import Kampanyalar from './Kampanyalar.vue'
import Tel from './Tel.vue'
import Baglantiyiatla from './Baglantiyiatla.vue'
import Navigasyon from './Navigasyon.vue'
import Uyegirisi from './Uyegirisi.vue'
import Galaxy from './Galaxy.vue'
import Erisilebilirlik from './Erisilebilirlik.vue'
import EasySlider from 'vue-easy-slider'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Anasayfa},
  {path: '/Urunler', component: Urunler},
  {path: '/Mobil', component: Mobil},
  {path: '/Detay1', component: Detay1},
  {path: '/Eposta', component: Eposta},
  {path: '/Kampanyalar', component: Kampanyalar},
  {path: '/Tel', component: Tel},
  {path: '/Baglantiyiatla', component: Baglantiyiatla},
  {path: '/Navigasyon', component: Navigasyon},
  {path: '/Uyegirisi', component: Uyegirisi},
  {path: '/Erisilebilirlik', component: Erisilebilirlik},
  {path: '/Galaxy', component: Galaxy},
  {path: '/Slider', component: Slider},

]

const router = new VueRouter ({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')





