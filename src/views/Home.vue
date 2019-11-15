<template>
	<v-container class="fluid">
		<v-row class="text-center">
			<v-content>
				<h1 class="display-3">
					Order Food You Love With the Environment in Mind
				</h1>
				<p class="pt-4">
					This website offers us the best quality food and beverages at a
					reasonable price, and here is all natural and organic product which is
					directly from the farm. They also maintain the food ecosystem. They
					have the delivery option for different appetite. They also have the
					chilled facility to maintain the maximum freshness of the food.
				</p>
			</v-content>
			<v-content>
				<v-container class="fill-height" fluid>
					<v-row align="center" justify="center">
						<v-col cols="12" sm="8" md="8">
							<v-card class="elevation-12">
								<v-toolbar color="primary" dark flat>
									<v-tabs
										v-model="tabs"
										background-color="primary"
										centered
										grow
										icons-and-text
									>
										<v-tab>Login</v-tab>
										<v-tab>Register</v-tab>
									</v-tabs>
								</v-toolbar>
								<v-tabs-items v-model="tabs">
									<v-tab-item>
										<v-card-text>
											<v-form>
												<v-text-field
													label="Email"
													name="email"
													prepend-icon="mdi-email"
													type="email"
													v-model="loginEmail"
												/>

												<v-text-field
													id="password"
													label="Password"
													name="password"
													prepend-icon="mdi-lock"
													type="password"
													v-model="loginPassword"
												/>
											</v-form>
										</v-card-text>
										<v-card-actions>
											<v-spacer />
											<v-btn color="secondary" @click="login">Login</v-btn>
										</v-card-actions>
									</v-tab-item>
									<v-tab-item>
										<v-card-text>
											<v-form>
												<v-text-field
													label="Name"
													name="name"
													v-model="name"
													:error-messages="nameErrors"
													prepend-icon="mdi-account"
													type="text"
												/>
												<v-text-field
													label="Email"
													name="email"
													v-model="email"
													:error-messages="nameErrors"
													prepend-icon="mdi-email"
													type="email"
												/>
												<v-text-field
													id="password"
													label="Password"
													v-model="password"
													:error-messages="passwordErrors"
													name="password"
													prepend-icon="mdi-lock"
													type="password"
												/>
											</v-form>
										</v-card-text>
										<v-card-actions>
											<v-spacer />
											<v-btn color="secondary" @click="register"
												>Register</v-btn
											>
										</v-card-actions>
									</v-tab-item>
								</v-tabs-items>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-content>
		</v-row>
	</v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
	required,
	maxLength,
	minLength,
	email
} from "vuelidate/lib/validators";

export default {
	mixins: [validationMixin],

	validations: {
		name: { required, maxLength: maxLength(10) },
		email: { required, email },
		password: { required, minLength: minLength(8) }
	},
	computed: {
		nameErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.name.maxLength &&
				errors.push("Name must be at most 10 characters long");
			!this.$v.name.required && errors.push("Name is required.");
			return errors;
		},
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push("Must be valid e-mail");
			!this.$v.email.required && errors.push("E-mail is required");
			return errors;
		},
		passwordErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.password.minLength &&
				errors.push("Name must be at most 10 characters long");
			!this.$v.name.required && errors.push("Name is required.");
			return errors;
		}
	},

	data() {
		return {
			loginEmail: "",
			loginPassword: "",
			name: "",
			email: "",
			password: "",
			tabs: null
		};
	},
	methods: {
		login() {
			console.log(this.loginEmail, this.loginPassword);
			const url = "localhost/flight/login";
			// The data we are going to send in our request
			let data = {
				email: this.loginEmail,
				password: this.loginPassword
			};
			// The parameters we are gonna pass to the fetch function
			let fetchData = {
				method: "POST",
				body: data,
				headers: new Headers()
			};
			fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
				.then(function(data) {
					console.log(data);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	},
	register() {
		this.$v.$touch();
	}
};
</script>
