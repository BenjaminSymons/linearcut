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
  mutations: {},
  actions: {},
  modules: {},
});
