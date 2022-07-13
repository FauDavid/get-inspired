<template>
  <v-form v-model="valid">
    <v-container>
      <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required color="light-gray">
      </v-text-field>
      <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required color="light-gray">
      </v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required color="light-gray"></v-text-field>
    </v-container>
  </v-form>
</template>