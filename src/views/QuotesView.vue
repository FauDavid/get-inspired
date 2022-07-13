
<script>
export default {
  data() {
    return {
        fav: false
    };
},
  computed: {
    inspiration() {
      return this.$store.getters.inspiration;
    },
  },
  created() {
    this.$store.dispatch('loadInspiration');
  },
  methods: {
    favQuote() {
      this.fav = !this.fav;
    },
  }
}
</script>

<template>
  <v-container grid-list-md text-xs-center>
    <v-card class="mx-auto" dark max-width="400">
      <v-card-title>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        {{ inspiration.quote }}
      </v-card-text>

      <v-card-actions>
        <v-card-text class="text-h6 font-weight-light">
          {{ inspiration.author }}
        </v-card-text>
        <v-list-item>
          <v-row align="center" justify="end">
            <v-btn plain @click="favQuote">
              <v-icon v-if="fav" icon>
                mdi-heart
              </v-icon>
              <v-icon v-if="!fav" icon>
                mdi-heart-outline
              </v-icon>
            </v-btn>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
