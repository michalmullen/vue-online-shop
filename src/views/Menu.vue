<template>
  <v-container class="mx-auto">
    <h1>Today's Menu</h1>
    <v-layout row wrap>
      <v-flex v-for="card in cards" :key="card.title" xs12 md6 fluid class="pa-4">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-text>
            <v-row align="center" class="mx-0 pb-2">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <!-- <div class="my-4 subtitle-1 black--text">$ • Italian, Cafe</div> -->

            <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="pr-2">mdi-cart-arrow-right</v-icon>
              </template>
              <span>Buy Now</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-cart-plus</v-icon>
              </template>
              <span>Add to Basket</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 6
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      }
    ]
  })
};
</script>