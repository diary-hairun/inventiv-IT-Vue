import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar.vue'

Vue.config.productionTip = false

import '../src/css/bootstrap.min.css';
import '../src/css/all.min.css';
import '../src/css/style.css';

Vue.component('navbar', Navbar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')