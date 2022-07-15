
<script>
import VueWindow from "../util/VueWindow";
import axios from "axios";
export default {
  data() {
    return {
      fetchedImage: '',
      fetchedImageMobile: '',
      randomGenerated: 0,
      saveImage: '',
      showAlert: false,
      numImagesAvailable: 219,
      numItemsToGenerate: 1,
      collectionID: 928423,
      desktopDimension: "1920x1080",
      mobileDimension: "1440x2800",
    };
  },
  computed: {
    isMobile() {
      return VueWindow.isMobile;
    }
  },
  mounted() {
    this.fetchImage();
  },
  methods: {
    downloadImage() {
      // const url = window.URL.createObjectURL(new Blob([this.saveImage]));
      // const link = document.createElement("a");
      // link.href = url;
      // link.setAttribute("download", "file.jfif"); //or any other extension
      // document.body.appendChild(link);
      // link.click();
    },
    fetchImage() {
      this.randomGenerated = Math.floor(Math.random() * this.numImagesAvailable);
      this.fetchedImage = `https://source.unsplash.com/collection/${this.collectionID}/${this.desktopDimension}?sig=${this.randomGenerated}`;
      axios.get(this.fetchedImage).then((response) => this.saveImage = response.data)
      this.fetchedImageMobile = `https://source.unsplash.com/collection/${this.collectionID}/${this.mobileDimension}?sig=${this.randomGenerated}`;
    }
  }
}
</script>

<template>
  <v-img transition="scale-transition" max-height="auto" max-width="auto"
    :src="isMobile ? fetchedImageMobile : fetchedImage">
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-row>
    </template>


    <v-container fluid>
      <v-btn plain @click="downloadImage"> Download </v-btn>
    </v-container>

  </v-img>
</template>