<template>
  <div>
    <Header class="hed" />
    <div class="flex">
      <Sideber class="" />
      <main>
        <v-row align-content="center">
          <v-col v-for="(album, i) in albums" :key="i" cols="4">
            <v-card
              dark
              width="500px"
              class="mt-3 ml-3"
              color="#000"
              :href="album.collectionViewUrl"
            >
              <div class="d-flex flex-no-wrap justify-space-around">
                <div>
                  <v-card-title
                    class="text-h5 color-w"
                    v-text="album.collectionName"
                  ></v-card-title>

                  <v-card-subtitle v-text="album.artistName"></v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="album.artworkUrl100"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
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
.hed {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.flex {
  margin-top: 64px;
  display: flex;
}
main {
  border: solid 3px #ccc;
  flex: 1;
}
.color-w {
  color: #fff;
}
</style>
