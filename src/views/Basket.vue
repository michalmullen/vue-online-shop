<template>
	<v-container>
		<h2 class="display-2 mb-4">Basket</h2>
		<v-card>
			<v-list>
				<template v-for="product in products">
					<v-list-item-title :key="product.product_id">{{
						product.title
					}}</v-list-item-title>
					<v-divider :key="product.product_id"></v-divider>
				</template>
			</v-list>
		</v-card>
		<v-container>
			<v-btn color="success" larger style="float: right;">Go to payment</v-btn>
		</v-container>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		products: [
			{
				product_id: "kitchen-1",
				photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
				title: "QW cooking utensils",
				sub_title:
					"Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
				price: 14.99,
				qty: 1
			},
			{
				product_id: "kitchen-1",
				photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
				title: "QW cooking utensils",
				sub_title:
					"Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
				price: 44.99,
				qty: 2
			},
			{
				product_id: "kitchen-1",
				photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
				title: "QW cooking utensils",
				sub_title:
					"Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
				price: 64.99,
				qty: 2
			}
		]
	})
};
</script>
