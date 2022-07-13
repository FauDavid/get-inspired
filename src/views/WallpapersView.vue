
<script>
export default {
data() {
    return {
        fetchedImage: '',
        randomGenerated: 0,
        showAlert: false
    };
},
  computed: {
    inspiration() {
      return this.$store.getters.inspiration;
    },
  },
  created() {
    this.$store.dispatch('loadInspiration');
    this.fetchImage();
  },
  methods: {
    downloadImage() {
    // TODO: Download the image that is showed to the user.
    this.showAlert = true
    },
    fetchImage() {
      this.randomGenerated =  Math.floor(Math.random() * 219);
      this.fetchedImage = `https://source.unsplash.com/collection/76333785/1920x1080?sig=${this.randomGenerated}.jpg`;
    }
  }
}
</script>

<template>
  <v-img transition="scale-transition" max-height="529" max-width="1920" :src="fetchedImage">
    <v-alert color="grey" dismissible dense v-if="showAlert" type="info">
      Work in progress.
    </v-alert>
    <v-btn plain @click="downloadImage"> Download </v-btn>
  </v-img>
</template>