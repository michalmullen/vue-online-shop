import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Basket from "../views/Basket.vue";
import Admin from "../views/Admin.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/welcome",
		name: "welcome",
		component: Welcome,
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

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem("jwt") == null) {
			next({
				path: "/login",
				params: { nextUrl: to.fullPath }
			});
		} else {
			let user = JSON.parse(localStorage.getItem("user"));
			if (to.matched.some(record => record.meta.is_admin)) {
				if (user.is_admin == 1) {
					next();
				} else {
					next({ name: "userboard" });
				}
			} else {
				next();
			}
		}
	} else if (to.matched.some(record => record.meta.guest)) {
		if (localStorage.getItem("jwt") == null) {
			next();
		} else {
			next({ name: "userboard" });
		}
	} else {
		next();
	}
});

export default router;
