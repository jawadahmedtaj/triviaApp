<template>
  <v-container class="fullDisplay" fluid>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <div>Test</div>
  </v-container>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
  methods: {},
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
.buttonAdjuster {
  margin-right: 50px;
}
</style>
