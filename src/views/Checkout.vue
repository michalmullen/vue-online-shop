<template>
	<v-container>
		<h1>Checkout</h1>
		<v-stepper v-model="e1">
			<v-stepper-header>
				<v-stepper-step :complete="e1 > 1" step="1">School</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step :complete="e1 > 2" step="2">Payment</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step :complete="e1 > 2" step="2">Finish</v-stepper-step>

				<v-divider></v-divider>
			</v-stepper-header>

			<v-stepper-items>
				<v-stepper-content step="1">
					<v-card-title>Select School</v-card-title>

					<v-overflow-btn
						class="my-2"
						:items="schools"
						label="School"
						item-value="text"
					></v-overflow-btn>
					<v-card-text
						>The school will be given your name so that you recive your
						order.</v-card-text
					>
					<v-btn color="primary" @click="e1 = 2">
						Continue
					</v-btn>
				</v-stepper-content>

				<v-stepper-content step="2">
					<h1>Point Amount</h1>
					<h3>Total Point Sum:</h3>
					<h3>Total Order Sum:</h3>
					<h3>Point Sum After Purchase:</h3>

					<v-btn color="primary" @click="e1 = 3">
						Continue
					</v-btn>

					<v-btn text @click="e1 = 1">Go Back</v-btn>
				</v-stepper-content>

				<v-stepper-content step="3">
					<h1 class="text-center">Thank You for your purchase!</h1>
				</v-stepper-content>
			</v-stepper-items>
		</v-stepper>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		items: JSON.parse(localStorage.getItem("basket")),
		subtotal: 0,
		e1: 0,
		schools: ["Prague Collage", "Teeside University", "CISP"]
	})
};
</script>
