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
		component: Home
	},
	{
		path: "/about",
		name: "about",
		component: About
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: "/menu",
		name: "menu",
		component: Menu
	},
	{
		path: "/basket",
		name: "basket",
		component: Basket
	},
	{
		path: "/admin",
		name: "admin",
		component: Admin
	},
	{
		path: "/user",
		name: "user",
		component: User
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
