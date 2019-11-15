<template>
  <v-container>
    <v-card>
      <v-card-title>Menu Selector</v-card-title>
      <v-divider></v-divider>
      <v-sheet height="500">
        <v-calendar type="month" now="2019-11-14" value="2019-11-14" :events="events"></v-calendar>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        name: "Vacation",
        start: "2019-11-30"
      },
      {
        name: "Meeting",
        start: "2019-11-07"
      },
      {
        name: "30th Birthday",
        start: "2019-11-03"
      },
      {
        name: "New Year",
        start: "2019-11-01"
      },
      {
        name: "New Year",
        start: "2019-11-01"
      },
      {
        name: "New Year",
        start: "2019-11-01"
      },
      {
        name: "Conference",
        start: "2019-11-21"
      },
      {
        name: "Hackathon",
        start: "2019-11-30",
        id: [1, 3, 4]
      }
    ]
  })
};
</script>