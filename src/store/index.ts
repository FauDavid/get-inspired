import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inspiration: [],
    favInspirations: []
  },
  getters: {
    inspiration: state => {return state.inspiration},
  },
  mutations: {
    SET_ITEMS (state, inspiration) {
      state.inspiration = inspiration
    },
  },
  actions: {
    async loadInspiration ({ commit }) {
      try {
         const response = await axios.get('https://api.goprogram.ai/inspiration');
         commit('SET_ITEMS', response.data);
       }
       catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
