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
				<v-data-table
					:headers="headers"
					:items="card.items"
					class="elevation-1 p-4"
				>
					<template v-slot:top>
						<v-toolbar flat color="white">
							<v-toolbar-title>{{ card.day }}</v-toolbar-title>
							<v-divider class="mx-4" inset vertical></v-divider>
							<v-spacer></v-spacer>
							<v-dialog v-model="dialog" max-width="500px">
								<template v-slot:activator="{ on }">
									<v-btn color="primary" dark class="mb-2" v-on="on"
										>New Item</v-btn
									>
								</template>
								<v-card>
									<v-card-text>
										<v-container>
											<v-row
												sm="3"
												md="2"
												v-for="item in menuItems"
												:key="item.title"
											>
												<v-checkbox
													v-model="selected"
													:label="item.title"
													:value="item.title"
												></v-checkbox>
											</v-row>
										</v-container>
									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="secondary" text @click="close">Cancel</v-btn>
										<v-btn color="secondary" text @click="save">Save</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</v-toolbar>
					</template>
					<template v-slot:card.action="{ item }">
						<v-icon small @click="deleteItem(card.item)">
							mdi-delete
						</v-icon>
					</template>
				</v-data-table>
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
		dialog: false,
		headers: [
			{
				text: "Menu Item",
				align: "left",
				sortable: false,
				value: "name"
			},
			{ text: "Actions", value: "action", sortable: false }
		],
		defaultItem: {
			name: ""
		},
		menuItems: [],
		selected: [],
		cards: [
			{
				day: "Monday",
				items: []
			},
			{
				day: "Tuesday",
				items: []
			},
			{
				day: "Wednesday",
				items: []
			},
			{
				day: "Thurday",
				items: []
			},
			{
				day: "Friday",
				items: []
			}
		]
	}),

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "New Item" : "Edit Item";
		}
	},

	watch: {
		dialog(val) {
			val || this.close();
		}
	},

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
		deleteItem(item) {
			const index = this.desserts.indexOf(item);
			confirm("Are you sure you want to delete this item?") &&
				this.desserts.splice(index, 1);
		},

		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.desserts[this.editedIndex], this.editedItem);
			} else {
				this.desserts.push(this.editedItem);
			}
			this.close();
		}
	}
};
</script>
