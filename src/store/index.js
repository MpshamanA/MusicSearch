import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //stateは直接触らない
  state: {
    drawer: null,
    albums: [],
    keyword: "",
    idToken: null,
    sideTggle: true,
  },
  mutations: {
    drawerSwich(state) {
      state.drawer = !state.drawer;
    },
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
    updateAlbums(state, albums) {
      state.albums = albums;
    },
    updateKeyword(state, keyword) {
      state.keyword = keyword;
    },
    sideSwich(state) {
      state.sideTggle = !state.sideTggle;
    },
  },
  getters: {
    idToken: (store) => store.idToken,
  },
  actions: {},
  modules: {},
});
