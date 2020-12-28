<template>
  <v-app>
    <v-container class="fullDisplay" fluid>
      <div id="app">
        <div id="nav">
          <v-btn class="buttonAdjuster" color="primary" to="/binary"
            >Yes or No Questions</v-btn
          >
          <v-btn class="buttonAdjuster" color="warning" to="/MCQ">MCQs</v-btn>
          <v-btn color="error" to="/fillBLank">Fill in the blanks</v-btn>
        </div>
      </div>
    </v-container>
  </v-app>
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
