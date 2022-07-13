<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import BottomNav from './components/BottomNav.vue';
import TopToolbar from './components/TopToolbar.vue';

export default Vue.extend({
    name: "App",
    data: () => ({
    //
    }),
    components: { BottomNav, TopToolbar }
});
</script>
