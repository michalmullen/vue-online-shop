import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  VeeValidate,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueAxios, axios, VeeValidate);
