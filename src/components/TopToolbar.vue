<!-- eslint-disable @typescript-eslint/no-empty-function -->
<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu" dark>
      <v-list dense>
        <v-list-item @click="doNothing">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-content>
            <v-img src="..\src\assets\logo-horizontal.svg" max-width="100px"></v-img>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="doNothing">
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="doNothing">
          <v-list-item-action>
            <v-icon>help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app fixed dark elevation="0">
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.meta.title || "Default title" }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-img src="../assets/logo-horizontal.svg" max-width="100px"></v-img>

    </v-app-bar>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class TopToolbar extends Vue {
    showMenu = false;
    toggleMenu(): void {
      this.showMenu = !this.showMenu;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    doNothing(): void {
    }
    logout(): void {
      this.$router.replace({ name: 'login' })
    }
  }
</script>