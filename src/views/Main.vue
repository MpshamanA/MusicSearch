<template>
  <div>
    <Header class="hed" />
    <div class="flex">
      <Sideber class="" />
      <main>
        <v-row align-content="center">
          <v-col v-for="(item, i) in items" :key="i" cols="4">
            <v-card :color="item.color" dark width="500px" class="mt-3 ml-3">
              <div class="d-flex flex-no-wrap justify-space-around">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      v-if="item.artist === 'Ellie Goulding'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>

                    <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.src"></v-img>
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
import Header from "../components/header.vue";
import Sideber from "../components/sideber.vue";
export default {
  name: "Main",

  components: {
    Header,
    Sideber,
  },
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
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
  background-color: bisque;
  flex: 1;
}
</style>
