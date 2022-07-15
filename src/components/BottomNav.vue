<template>

  <v-bottom-navigation grow v-model="activeItem" dark app>
    <v-tooltip top color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon plain value="home" :to="{ path: '/dashboard/home' }" v-bind="attrs" v-on="on">
          <v-icon>mdi mdi-home</v-icon>
        </v-btn>
      </template>
      <span>Home</span>
    </v-tooltip>

    <v-tooltip top color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon plain value="wallpapers" :to="{ path: '/dashboard/wallpapers' }" v-bind="attrs" v-on="on">
          <v-icon>mdi mdi-wallpaper</v-icon>
        </v-btn>
      </template>
      <span>Wallpapers</span>
    </v-tooltip>

    <v-tooltip top color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon plain value="quotes" :to="{ path: '/dashboard/quotes' }" v-bind="attrs" v-on="on">
          <v-icon>mdi mdi-format-quote-close</v-icon>
        </v-btn>
      </template>
      <span>Quotes</span>
    </v-tooltip>

    
    <v-tooltip top color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon plain value="music" :to="{ path: '/dashboard/music' }" v-bind="attrs" v-on="on">
          <v-icon>mdi mdi-music</v-icon>
        </v-btn>
      </template>
      <span>Music</span>
    </v-tooltip>
  </v-bottom-navigation>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class BottomNav extends Vue {
  activeItem = 'top';
}
</script>