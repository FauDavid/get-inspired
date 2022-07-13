<template>

  <v-bottom-navigation
    grow
    v-model="activeItem"
    dark
    app
  >
  
  <v-tooltip top color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          plain
          value="top"
          :to="{name: 'wallpapers'}"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>mdi mdi-wallpaper</v-icon>
        </v-btn>
      </template>
      <span>Wallpapers</span>
    </v-tooltip>

      <v-tooltip top color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          plain
          value="quotes"
          :to="{name: 'quotes'}"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>mdi mdi-format-quote-close</v-icon>
        </v-btn>
      </template>
      <span>Quotes</span>
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