import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxLength: 250,
    piecesRequired: [],
    gappage: 0,
    outputList: []
  },
  mutations: {
    updateMaxLength(state, payload) {
      state.maxLength = payload;
    },
    updateGappage(state, payload) {
      state.gappage = payload;
    },
    adjustArr(state, pieces) {
      state.piecesRequired = pieces;
    }
  },
  actions: {},
  modules: {},
});
