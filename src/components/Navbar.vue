<template>
	<div>
		<v-navigation-drawer v-model="drawer" :width="200" app clipped temporary>
			<v-list dense>
				<v-list-item link to="/user">
					<v-list-item-action>
						<v-icon>{{ account }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item link to="/">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/menu">
					<v-list-item-action>
						<v-icon>mdi-food-apple</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Menu</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/admin" v-if="admin === true">
					<v-list-item-action>
						<v-icon>mdi-account-supervisor</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Admin</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/about">
					<v-list-item-action>
						<v-icon>mdi-information</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>About</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<template v-slot:append v-if="loggedIn === true">
				<div class="pa-2">
					<v-btn block color="secondary" @click="logout">Logout</v-btn>
				</div>
			</template>
		</v-navigation-drawer>
		<v-app-bar app clipped-left color="primary" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-spacer></v-spacer>
			<v-toolbar-title class="font-weight-black" link to="/"
				>Zero Waste Foods</v-toolbar-title
			>
			<v-icon class="pl-1">mdi-leaf</v-icon>
			<v-spacer></v-spacer>
			<v-menu bottom left>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-badge v-model="show" color="#D7BC2F" class="text--color" left>
							<template v-slot:badge>
								<span>{{ items.length }}</span>
							</template>
							<v-icon @mouseover="show = true" @mouseout="show = false"
								>mdi-cart</v-icon
							>
						</v-badge>
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="(item, i) in items" :key="i">
						<v-list-item-avatar
							><v-img :src="item.image"></v-img
						></v-list-item-avatar>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
						<v-text-field
							v-model="item.order_amount"
							class="mx-4"
							label="Rows"
							max="50"
							min="1"
							step="1"
							style="width: 80px"
							type="number"
						></v-text-field>
					</v-list-item>
					<v-divider></v-divider>
					<v-list-item
						><v-list-item-subtitle class="text-right"
							>Subtotal: <b>30$ </b>
						</v-list-item-subtitle>
					</v-list-item>
					<v-list-item
						><v-btn block color="primary">Checkout</v-btn></v-list-item
					>
				</v-list>
			</v-menu>
		</v-app-bar>
	</div>
</template>

<script>
import Vue from "vue";

export default {
	name: "Navbar",
	props: {
		source: String
	},
	data: () => ({
		drawer: false,
		show: false,
		name: "No User",
		loggedIn: false,
		account: "mdi-account",
		admin: false,
		items: []
	}),
	created() {
		// gets called when page is loaded
		this.checkIfIsLogged();
		this.getBasket();
	},
	destroyed() {
		localStorage.removeItem("menu");
	},
	watch: {
		// call method if the route changes
		$route: "checkIfIsLogged"
	},
	mounted() {
		// listens for basket being updated in menu
		this.$root.$on("Menu", () => {
			// updates basket for nav
			// needs timeout to get updated data, if not will get old data
			setTimeout(this.getBasket, 500);
		});
	},
	methods: {
		logout() {
			localStorage.clear();
			Vue.axios.get("http://localhost/api/logout");
			this.$router.push("Welcome");
		},
		checkIfIsLogged() {
			if (localStorage.getItem("id") == null) {
				this.loggedIn = false;
				this.account = "mdi-account-off";
				this.name = "No User";
				this.admin = false;
			} else {
				let user = JSON.parse(localStorage.getItem("user"));
				this.loggedIn = true;
				this.account = "mdi-account";
				this.name = user.name;
				if (user.admin == 1) {
					this.admin = true;
				}
				Vue.axios
					.get(`http://localhost/api/user/${localStorage.getItem("id")}`)
					.then(response => {
						console.log("changing data");
						console.log(response.data);
						localStorage.setItem("user", JSON.stringify(response.data));
					});
			}
		},
		getBasket() {
			if (localStorage.getItem("basket") != null) {
				this.items = JSON.parse(localStorage.getItem("basket"));
			}
		}
	}
};
</script>
