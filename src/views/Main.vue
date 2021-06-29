<template>
  <div>
    <Header class="hed" />
    <div class="flex">
      <div class="sticky">
        <Sideber class="" />
      </div>
      <main>
        <!--  <div class="title"><h1>さぁ！音楽を楽しもう</h1></div> -->
        <div class="main">
          <v-row align-content="center">
            <v-col v-for="(album, i) in albums" :key="i" cols="4">
              <v-card
                width="500px"
                class="mt-3 ml-3"
                color="#fff"
                :href="album.collectionViewUrl"
              >
                <div class="d-flex flex-no-wrap justify-space-around">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="album.collectionName"
                    ></v-card-title>

                    <v-card-subtitle
                      v-text="album.artistName"
                    ></v-card-subtitle>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="album.artworkUrl100"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/header.vue";
import Sideber from "../components/sideber.vue";
export default {
  name: "Main",

  components: {
    Header,
    Sideber,
  },
  data: () => ({}),
  methods: {},
  computed: {
    ...mapState({
      albums: "albums",
    }),
  },
};
</script>

<style scoped>
/*仮*/
.title {
  margin-left: 230px; /* サイドバーのwidth分marginを付与 */
  margin-top: 20px;
}

.hed {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.flex {
  margin-top: 64px;
  display: flex;
}
.main {
  flex: 1;
  margin-left: 230px; /* サイドバーのwidth分marginを付与 */
}
.color-w {
  color: #fff;
}
.sticky {
  position: fixed; /*後に変更 */
}
</style>
