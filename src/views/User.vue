<template>
	<v-container>
		<v-card>
			<v-card-title>
				<v-icon class="pr-1">mdi-account</v-icon>Name
			</v-card-title>
			<v-card-subtitle>
				<v-icon small class="pr-1 pl-1">mdi-email</v-icon>Email
			</v-card-subtitle>
			<v-card-text>Coin Amount: {{ coins }}</v-card-text>
			<v-card-actions>
				<v-btn text v-on:click="coins += 20">
					<v-icon class="pr-1">mdi-plus</v-icon>20
				</v-btn>
				<v-btn text v-on:click="coins += 50">
					<v-icon class="pr-1">mdi-plus</v-icon>50
				</v-btn>
				<v-btn text v-on:click="coins += 100">
					<v-icon class="pr-1">mdi-plus</v-icon>100
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		coins: 0
	})
};
</script>
