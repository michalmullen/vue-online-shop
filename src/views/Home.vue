<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col>
        <h1>Green Team</h1>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile>Colum</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>
