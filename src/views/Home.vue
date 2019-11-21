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
											<v-form ref="form">
												<v-text-field
													label="Email"
													name="email"
													prepend-icon="mdi-email"
													type="email"
													v-model="loginEmail"
													required
													@change="$v.email.$touch()"
													:error-messages="emailErrors"
													@blur="$v.email.$touch()"
												/>

												<v-text-field
													id="password"
													label="Password"
													name="password"
													prepend-icon="mdi-lock"
													type="password"
													v-model="loginPassword"
													required
													:error-messages="nameErrors"
													:counter="8"
													@input="$v.name.$touch()"
													@blur="$v.name.$touch()"
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
											<v-form ref="form">
												<v-text-field
													label="Name"
													name="name"
													v-model="name"
													prepend-icon="mdi-account"
													type="text"
												/>
												<v-text-field
													label="Email"
													name="email"
													v-model="email"
													prepend-icon="mdi-email"
													type="email"
												/>
												<v-text-field
													id="password"
													label="Password"
													v-model="password"
													name="password"
													prepend-icon="mdi-lock"
													type="password"
													required
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
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
	mixins: [validationMixin],

	validations: {
		name: { required, minLength: minLength(8) },
		email: { required, email },
		select: { required },
		checkbox: {
			checked(val) {
				return val;
			}
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

	computed: {
		nameErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.name.minLength &&
				errors.push("Password must be at least 8 characters long.");
			!this.$v.name.required && errors.push("Password is required.");
			return errors;
		},
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push("Must be valid e-mail");
			!this.$v.email.required && errors.push("E-mail is required");
			return errors;
		}
	},

	methods: {
		login() {
			Vue.axios
				.post("http://localhost/api/login", {
					email: this.loginEmail,
					password: this.loginPassword
				})
				.then(function(response) {
					console.log(response.data[0]);
					this.$refs.form.reset();
					//localStorage.setItem('userId', response.data[0])
					//localStorage.setItem("login", true);
				})
				.catch(function(error) {
					console.log(error.response.data[0]);
					//localStorage.setItem("login", false);
				});
			//this.reset();
			this.$v.$touch();
		},
		register() {
			Vue.axios
				.post("http://localhost/api/user", {
					name: this.name,
					email: this.email,
					password: this.password
				})
				.then(function(response) {
					this.tabs = null;
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		reset() {
			this.$refs.form.reset();
		}
	}
};
</script>
