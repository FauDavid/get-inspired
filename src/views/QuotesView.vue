
<script>
export default {
  data() {
    return {
      fav: false
    };
  },
  methods: {
    favQuote() {
      this.fav = !this.fav;
    },
    getNewQuote() {
      this.$store.dispatch('loadInspiration');
    },
  },
  computed: {
    inspiration() {
      return this.$store.getters.inspiration;
    },
  },
  created() {
    this.$store.dispatch('loadInspiration');
  },
}
</script>

<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center align-center">
        <v-card dark max-width="400">

          <v-card-text class="text-h6 font-weight-bold">
            {{ inspiration.quote }}
          </v-card-text>

          <v-card-actions>
            <v-card-text class="text-h7 font-weight-light">
              {{ inspiration.author }}
            </v-card-text>
            <v-list-item>
              <v-row align="center" justify="end">
                <v-btn icon @click="favQuote">
                  <v-icon v-if="fav" icon>
                    mdi-heart
                  </v-icon>
                  <v-icon v-if="!fav" icon>
                    mdi-heart-outline
                  </v-icon>
                </v-btn>
                <v-btn icon @click="getNewQuote">
                  <v-icon icon>
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
