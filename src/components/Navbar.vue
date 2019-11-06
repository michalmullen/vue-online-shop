<template>
  <div>
    <v-navigation-drawer v-model="drawer" :width="200" app clipped>
      <v-list dense>
        <v-list-item link to="/user">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mitchell Mullen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="p-1"></v-divider>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/shop">
          <v-list-item-action>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Shop</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-icon>mid-logout</v-icon>
        <div class="pa-2">
          <v-icon>mid-logout</v-icon>
          <v-btn block color="#E9D046">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="#619952" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-black" link to="/">Zero Waste Foods</v-toolbar-title>
      <v-icon class="pl-1">mdi-leaf</v-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge v-model="show" color="#D7BC2F" class="text--color" left>
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon @mouseover="show = true" @mouseout="show = false">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    show: false
  })
};
</script>