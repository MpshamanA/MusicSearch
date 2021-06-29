<template>
  <div>
    <!-- ヘッダー -->
    <v-app-bar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>MusicSearch</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="search-box">
        <input
          type="text"
          size="40"
          class="textbox"
          placeholder="検索"
          v-model="keyword"
        />
        <v-btn @click="search()" height="24">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <v-btn v-if="!toggle" class="mr-5" elevation="2" plain>
        <v-icon>mdi-lock</v-icon>
        ログアウト
      </v-btn>

      <v-btn v-if="toggle" class="mr-5" elevation="2" to="/" plain>
        <v-icon>mdi-lock-open</v-icon>
        ログイン
      </v-btn>

      <v-btn v-if="toggle" class="mr-5" elevation="2" plain>
        <v-icon>mdi-account</v-icon>
        新規登録
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
      tokenID: null,
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      keyword: "",
      albums: [],
    };
  },
  methods: {
    /* logout() {
      this.$store.commit("updateIdToken", null);
    }, */
    test() {
      this.$store.commit("drawerSwich", this.$store.state.drawer);
      console.log(this.$store.state.drawer);
    },
    search() {
      if (this.$store.state.keyword != this.keyword) {
        //thisを退避させる
        const vm = this;
        this.$router.push(`/main/${this.keyword}`);
        //iTunesのAPIを叩いてresponseをstoreにalbumsに代入 これをMainViewで読み込む
        this.$axios
          .get(
            `https://itunes.apple.com/search?term=${this.$route.params.keyword}&entity=album`
          )
          .then((response) => {
            vm.$store.state.albums = response.data.results;
            vm.$store.state.keyword = vm.keyword;
          });
      }
    },
  },
  created() {},
  mounted() {
    /* //storeのidTokenを監視
    //idTokenに変化があった場合に発火
    //thisを対比させる
    let _t = this;
    //watchメソッドを使って監視
    this.$store.watch(
      () => _t.$store.getters.idToken,
      (token) => {
        //tokenの状態（ログインの有無）によってtoggleを更新する
        this.tokenID = token;
        if (this.tokenID !== null) {
          this.toggle = true;
        } else {
          this.toggle = false;
        }
      }
    ); */
  },
};
</script>

<style scoped>
.router-link-exact-active {
}
.textbox {
  background-color: #eee;
}
.search-box {
  border: solid 2px #aaa;
}
</style>
