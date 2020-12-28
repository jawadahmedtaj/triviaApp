<template>
  <v-app>
    <v-container fluid>
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <v-slide-y-transition>
          <router-view />
        </v-slide-y-transition>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    questionShow: true,
    show: false,
    selected: null,
  }),
  methods: {
    questionDecider() {
      this.questionShow = false;
      this.show = true;
    },
  },
};
</script>

<style lang="scss">
.fullDisplay {
  height: 100vh;
  width: 100%;
}
</style>
