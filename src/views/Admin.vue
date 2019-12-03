<template>
	<v-container>
		<h1>Admin</h1>
		<v-layout row wrap>
			<v-flex
				v-for="card in cards"
				:key="card.day"
				xs12
				sm6
				md4
				lg3
				fluid
				class="pa-4"
			>
				<v-card>
					<v-toolbar flat color="white">
						<v-toolbar-title>{{ card.day }}</v-toolbar-title>
						<v-divider class="mx-4" inset vertical></v-divider>
						<v-spacer></v-spacer>

						<v-menu offset-y>
							<template v-slot:activator="{ on }">
								<v-btn color="primary" dark v-on="on">
									Add Item
								</v-btn>
							</template>
							<v-list>
								<v-list-item
									v-for="(item, index) in menuItems"
									:key="index"
									@click="save(card.id, index)"
								>
									<v-list-item-title>{{ item.title }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-toolbar>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">Name</th>
									<th class="text-left">Delete</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in card.items" :key="item.name">
									<td>{{ item.title }}</td>

									<td>
										<v-icon @click="deleteItem(card.id, item.id)" class="pl-1"
											>mdi-delete</v-icon
										>
									</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
	data: () => ({
		menuItems: [],
		cards: [
			{
				day: "Monday",
				id: 0,
				items: []
			},
			{
				day: "Tuesday",
				id: 1,
				items: []
			},
			{
				day: "Wednesday",
				id: 2,
				items: []
			},
			{
				day: "Thurday",
				id: 3,
				items: []
			},
			{
				day: "Friday",
				id: 4,
				items: []
			}
		]
	}),

	created() {
		Vue.axios
			.get("http://localhost/api/item")
			.then(response => {
				this.menuItems = response.data;
				console.log(this.menuItems);
			})
			.catch(error => {
				console.log(error);
			});
	},

	methods: {
		deleteItem(cardId, itemId) {
			let index = this.cards[cardId].items.findIndex(obj => obj.id == itemId);
			this.cards[cardId].items.splice(index, 1);
		},

		save(cardId, itemId) {
			this.cards[cardId].items.push(this.menuItems[itemId]);
		}
	}
};
</script>
