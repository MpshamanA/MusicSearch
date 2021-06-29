import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: null,
    albums: [],
    keyword: "",
  },
  mutations: {
    drawerSwich(state, drawer) {
      state.drawer = !drawer;
    },
  },
  actions: {},
  modules: {},
});
