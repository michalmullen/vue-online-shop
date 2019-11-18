import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	Vuelidate,
	axios,
	render: h => h(App)
}).$mount("#app");
