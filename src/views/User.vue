<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-icon class="pr-1">mdi-account</v-icon>
        {{ user.name }}
      </v-card-title>
      <v-card-subtitle>
        <v-icon small class="pr-1 pl-1">mdi-email</v-icon>
        {{ user.email }}
      </v-card-subtitle>
      <v-card-text>Coin Amount: {{ coins }}</v-card-text>
      <v-card-actions>
        <v-btn text v-on:click="coins += 20" @click="putData">
          <v-icon class="pr-1">mdi-plus</v-icon>20
        </v-btn>
        <v-btn text v-on:click="coins += 50" @click="putData">
          <v-icon class="pr-1">mdi-plus</v-icon>50
        </v-btn>
        <v-btn text v-on:click="coins += 100" @click="putData">
          <v-icon class="pr-1">mdi-plus</v-icon>100
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    coins: 0
  }),
  created() {
    this.coins = parseInt(this.user.coins);
  },
  methods: {
    putData() {
      let params = new URLSearchParams();
      params.append("email", this.user.email);
      params.append("password", this.user.password);
      params.append("name", this.user.name);
      params.append("coins", this.coins);
      Vue.axios
        .put(`http://mitch.zerofood.cz/user/${this.user.id}`, params)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
