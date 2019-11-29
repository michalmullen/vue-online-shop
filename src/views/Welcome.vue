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
										<v-tab @click="reset">Login</v-tab>
										<v-tab @click="reset">Register</v-tab>
									</v-tabs>
								</v-toolbar>
								<v-tabs-items v-model="tabs">
									<v-tab-item>
										<v-card-text>
											<v-form ref="form" v-model="valid" lazy-validation>
												<v-text-field
													label="E-mail"
													name="email"
													prepend-icon="mdi-email"
													type="email"
													v-model="loginEmail"
													:rules="emailRules"
													required
												/>

												<v-text-field
													id="password"
													label="Password"
													name="password"
													prepend-icon="mdi-lock"
													type="password"
													v-model="loginPassword"
													:rules="passRules"
													required
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
													:rules="nameRules"
													required
												/>
												<v-text-field
													label="Email"
													name="email"
													v-model="email"
													prepend-icon="mdi-email"
													type="email"
													:rules="emailRules"
													required
												/>
												<v-text-field
													id="password"
													label="Password"
													v-model="password"
													name="password"
													prepend-icon="mdi-lock"
													type="password"
													:rules="passRules"
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
									<v-overlay :absolute="absolute" :value="overlay">
										<v-btn color="secondary" @click="overlay = false">{{
											overlayData
										}}</v-btn>
									</v-overlay>
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
			tabs: null,
			valid: true,
			absolute: true,
			overlay: false,
			overlayData: "asdfasdf",
			emailRules: [
				v => !!v || "E-mail is required",
				v => /.+@.+\..+/.test(v) || "E-mail must be valid"
			],
			passRules: [
				v => !!v || "Password is required",
				v => 8 <= v.length || "Name must be 8 or more characters long"
			],
			nameRules: [v => !!v || "Name is required"]
		};
	},
	methods: {
		clear() {
			this.loginEmail = "";
			this.loginPassword = "";
			this.$validator.reset();
		},
		login() {
			this.reset;
			if (this.$refs.form.validate()) {
				Vue.axios
					.post("http://localhost/api/login", {
						email: this.loginEmail,
						password: this.loginPassword
					})
					.then(response => {
						console.log(response.data);
						let is_admin = response.data.admin;
						localStorage.setItem("user", JSON.stringify(response.data));
						localStorage.setItem("id", response.data.id);
						if (localStorage.getItem("id") != null) {
							this.$emit("loggedIn");
							if (this.$route.params.nextUrl != null) {
								this.$router.push(this.$route.params.nextUrl);
							} else {
								console.log(is_admin);
								if (is_admin == 1) {
									this.$router.push("admin");
								} else {
									this.$router.push("/");
								}
							}
						}
					})
					.catch(error => {
						console.log(error);
						this.overlayData = error.response.data[0];
						this.overlay = true;
					});
			}
		},
		register() {
			if (this.$refs.form.validate()) {
				Vue.axios
					.post("http://localhost/api/user", {
						name: this.name,
						email: this.email,
						password: this.password
					})
					.then(response => {
						this.tabs = 0;
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		reset() {
			this.$refs.form.reset();
		},
		resetValidation() {
			this.$refs.form.resetValidation();
		}
	}
};
</script>
