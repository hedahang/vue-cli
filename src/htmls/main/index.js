import Vue from 'vue'
import App from '../pages/index.vue'
import '../pwa/registerServiceWorker'
import router from '../router'
import store from '../store'
require("@/assets/js/common");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')