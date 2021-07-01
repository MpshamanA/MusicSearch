import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: null,
    albums: [],
    keyword: "",
    idToken: null,
  },
  mutations: {
    drawerSwich(state, drawer) {
      state.drawer = !drawer;
    },
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
  },
  getters: {
    idToken: (store) => store.idToken,
  },
  actions: {},
  modules: {},
});
