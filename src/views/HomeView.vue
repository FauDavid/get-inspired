
<script>
export default {
  data() {
    return {
      elapsedTime: 0,
      timer: '',
      fill: false,
      padding: 5,
      radius: 16,
      width: 1,
      selection: 1,
      seconds: 0,
      minutes: 0,
      hours: 0
    };
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.seconds = this.elapsedTime / 1000;
        this.elapsedTime += 1000;
        if (this.hours === this.selection) this.stop();
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    }
  },
};
</script>

<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center align-center">
        <v-progress-circular :rotate="360" :size="100" :width="3" :value="elapsedTime/60000" color="white">
          {{Math.round(elapsedTime/60000 * 100) / 100}}
        </v-progress-circular>
        <v-card dark max-width="400">
          <v-card-title class="text-h4 font-weight-thin mb-4">
            {{ formattedElapsedTime }}
          </v-card-title>
          <v-card-subtitle>Welcome! You are getting inspired</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="white" text @click="start">
              START
            </v-btn>
            <v-btn color="white" text @click="stop">
              STOP
            </v-btn>
            <v-btn color="white" text @click="reset">
              RESET
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>