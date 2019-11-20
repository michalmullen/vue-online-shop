import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Basket from "../views/Basket.vue";
import Admin from "../views/Admin.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		meta: {
			guest: true
		}
	},
	{
		path: "/about",
		name: "about",
		component: About,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/menu",
		name: "menu",
		component: Menu,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/basket",
		name: "basket",
		component: Basket,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/admin",
		name: "admin",
		component: Admin,
		meta: {
			requiresAuth: true,
			is_admin: true
		}
	},
	{
		path: "/user",
		name: "user",
		component: User,
		meta: {
			requiresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
