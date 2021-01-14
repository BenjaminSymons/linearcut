import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxLength: 0,
    piecesRequired: [],
    gappage: 0,
    outputList: [],
    inputLength: 0,
    inputQuantity: 1,
  },
  mutations: {
    updateInputLength(state, payload) {
      state.inputLength = payload;
    },
    updateInputQuantity(state, payload) {
      state.inputQuantity = payload;
    },
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
