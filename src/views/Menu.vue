<template>
	<v-container class="mx-auto">
		<div v-for="card in cards" :key="card.day">
			<v-list-group value="false">
				<template v-slot:activator value="false">
					<v-list-item-title class="display-1">{{
						card.day
					}}</v-list-item-title>
				</template>
				<v-list-item-content>
					<v-layout row wrap>
						<v-flex
							xs12
							md6
							fluid
							class="pa-4"
							v-for="item in card.items"
							:key="item.title"
						>
							<v-hover v-slot:default="{ hover }">
								<v-card>
									<v-img
										:src="item.image"
										class="white--text align-end"
										gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
										height="250px"
										:alt="item.title"
									>
										<v-card-title>{{ item.title }}</v-card-title>
										<v-expand-transition>
											<div
												v-if="hover"
												class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
												style="height: 100%;"
											>
												{{ item.price }}$
											</div>
										</v-expand-transition>
									</v-img>

									<v-card-text style="position: relative">
										<v-btn
											absolute
											dark
											fab
											top
											right
											color="secondary"
											@click="basket(item.id)"
										>
											<v-icon>mdi-cart</v-icon>
										</v-btn>
										<v-row align="center" class="mx-0 pb-2">
											<v-rating
												:value="4.5"
												color="amber"
												dense
												half-increments
												readonly
												size="14"
											></v-rating>

											<div class="grey--text ml-4">4.5 (413)</div>
											<v-spacer></v-spacer>
										</v-row>

										<!-- <div class="my-4 subtitle-1 black--text">$ • Italian, Cafe</div> -->

										<div>
											{{ item.description }}
										</div>
									</v-card-text>
								</v-card>
							</v-hover>
						</v-flex>
					</v-layout>
				</v-list-item-content>
			</v-list-group>
		</div>
	</v-container>
</template>

<style>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.5;
	position: absolute;
	width: 100%;
}
</style>

<script>
import Vue from "vue";

export default {
	data: () => ({
		cards: [
			{
				id: 1,
				title: "Burger",
				src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
				price: 20
			},
			{
				id: 2,
				title: "Salad",
				src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
				price: 10
			},
			{
				id: 3,
				title: "Spaget",
				src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
				price: 23
			},
			{
				id: 4,
				title: "Soup",
				src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
				price: 16
			}
		]
	}),

	beforeCreate() {
		// if (localStorage.getItem("menu") != null) {
		// 	this.cards = JSON.parse(localStorage.getItem("menu"))[0].items;
		// } else {
		Vue.axios
			.get("http://localhost/api/menu")
			.then(response => {
				this.cards = JSON.parse(response.data.menu);
			})
			.catch(error => {
				console.log(error);
			});
		// }
	},

	methods: {
		basket($id) {
			// if basket is empty creates localstorage item and adds item
			if (localStorage.getItem("basket") == null) {
				Vue.axios
					.get(`http://localhost/api/item/${$id}`)
					.then(response => {
						console.log(response.data);
						let basketItems = [response.data];
						basketItems[0].order_amount = 1;
						localStorage.setItem("basket", JSON.stringify(basketItems));
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				let basket = JSON.parse(localStorage.getItem("basket"));
				if (basket.some(e => e.id === $id)) {
					console.log("true");
					let index = basket.findIndex(x => x.id === $id);
					basket[index].order_amount += 1;
					localStorage.setItem("basket", JSON.stringify(basket));
					console.log(localStorage.getItem("basket"));
				} else {
					Vue.axios
						.get(`http://localhost/api/item/${$id}`)
						.then(response => {
							let basketItems = [response.data];
							basketItems[0].order_amount = 1;
							basket.push(basketItems[0]);
							localStorage.setItem("basket", JSON.stringify(basket));
							console.log(localStorage.getItem("basket"));
						})
						.catch(error => {
							console.log(error);
						});
				}
			}
			this.$root.$emit("Menu");
		}
	}
};
</script>
