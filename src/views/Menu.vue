<template>
	<v-container class="mx-auto">
		<div v-for="card in cards" :key="card.day">
			<h1>{{ card.day }}</h1>
			<v-layout row wrap>
				<v-flex
					xs12
					md6
					fluid
					class="pa-4"
					v-for="item in card.items"
					:key="item"
				>
					<v-card>
						<v-img
							:src="item.image"
							class="white--text align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							height="250px"
						>
							<v-card-title>{{ item.title }} (200$)</v-card-title>
						</v-img>

						<v-card-text style="position: relative">
							<v-btn absolute dark fab top right color="secondary">
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
				</v-flex>
			</v-layout>
		</div>
	</v-container>
</template>

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
				console.log(response.data.menu);
			})
			.catch(error => {
				console.log(error);
			});
		// }
		console.log(this.cards);
	},

	methods: {
		basket($id) {
			let ids = [];
			ids[-1] = prompt($id);
			localStorage.setItem("ids", JSON.stringify(ids));
		}
	}
};
</script>
