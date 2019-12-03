<template>
	<v-container class="mx-auto">
		<h1>Today's Menu</h1>
		<v-layout row wrap>
			<v-flex
				v-for="card in cards"
				:key="card.title"
				xs12
				md6
				fluid
				class="pa-4"
			>
				<v-card>
					<v-img
						:src="card.src"
						class="white--text align-end"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="250px"
					>
						<v-card-title>{{ card.title }} ({{ card.price }}$)</v-card-title>
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
							Small plates, salads & sandwiches an inteimate setting with 12
							indoor seats plus patio seating.
						</div>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
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

	methods: {
		basket($id) {
			let ids = [];
			ids[-1] = prompt($id);
			localStorage.setItem("ids", JSON.stringify(ids));
		}
	}
};
</script>
