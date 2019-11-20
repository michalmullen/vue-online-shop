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

export default {
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
			Vue.axios
				.post("http://localhost/api/login", {
					email: this.loginEmail,
					password: this.loginPassword
				})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
			localStorage.setItem("login", true);
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
		}
	}
};
</script>
