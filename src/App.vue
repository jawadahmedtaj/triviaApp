<template>
  <v-app>
    <v-container class="fullDisplay" fluid>
      <div id="app">
        <v-fade-transition hide-on-leave>
          <router-view />
        </v-fade-transition>
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
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.backButtonAdjuster {
  position: absolute !important;
  left: 1%;
  top: 2%;
}
.leftMoveButton {
  position: absolute !important;
  bottom: 5%;
  left: 5%;
}
.rightMoveButton {
  position: absolute !important;
  bottom: 5%;
  right: 5%;
}
</style>