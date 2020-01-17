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

          <v-overflow-btn class="my-2" :items="schools" label="School" item-value="text"></v-overflow-btn>
          <v-card-text>
            The school will be given your name so that you recive your
            order.
          </v-card-text>
          <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <h1>Point Amount</h1>
          <h3>Total Order Sum: {{ subtotal }}</h3>
          <h3>Total Point Sum: {{ user.coins }}</h3>
          <h3>Point Sum After Purchase: {{ user.coins - subtotal }}</h3>

          <v-alert type="warning" v-if="user.coins < subtotal">You do not have enough points!</v-alert>

          <v-btn
            color="primary"
            @click="updateUser(), saveOrder(), (e1 = 3)"
            v-if="user.coins >= subtotal"
          >Continue</v-btn>

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
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data: () => ({
    items: JSON.parse(localStorage.getItem("basket")),
    subtotal: localStorage.getItem("subtotal"),
    e1: 0,
    schools: ["Prague Collage", "Teeside University", "CISP"],
    user: JSON.parse(localStorage.getItem("user"))
  }),
  methods: {
    updateUser() {
      console.log("update");
      let params = new URLSearchParams();
      params.append("email", this.user.email);
      params.append("password", this.user.password);
      params.append("name", this.user.name);
      params.append("coins", this.user.coins - this.subtotal);
      Vue.axios
        .put(`http://zero.food/api/user/${this.user.id}`, params)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    saveOrder() {
      Vue.axios
        .post("http://zero.food/api/order", {
          user_id: this.user.id,
          user_name: this.user.name,
          order: JSON.stringify(this.items)
        })
        .catch(error => {
          console.log(error);
        });
      localStorage.removeItem("basket");
    }
  }
};
</script>
