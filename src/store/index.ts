import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inspiration: [],
    musicTrack: []
  },
  getters: {
    inspiration: state => {return state.inspiration},
    musicTrack: state => {return state.musicTrack},
  },
  mutations: {
    SET_INSPIRATION (state, inspiration) {
      state.inspiration = inspiration
    },
    SET_TRACK (state, musicTrack) {
      state.musicTrack = musicTrack
    },
  },
  actions: {
    async loadInspiration ({ commit }) {
      try {
         const response = await axios.get('https://api.goprogram.ai/inspiration');
         commit('SET_INSPIRATION', response.data);
       }
       catch (error) {
        console.log(error);
      }
    },
    async loadMusicTrack ({ commit }) {
      // try {
      //    const response = await axios.get('https://api.goprogram.ai/inspiration');
      //    commit('SET_TRACK', response.data);
      //  }
      //  catch (error) {
      //   console.log(error);
      // }
    }
  },
  modules: {
  }
})
