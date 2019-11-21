import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";
import { ValidationProvider } from "vee-validate";

// Register it globally
// main.js or any entry file.
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	Vuelidate,
	render: h => h(App)
}).$mount("#app");

Vue.use(VueAxios, axios, Vuelidate);
