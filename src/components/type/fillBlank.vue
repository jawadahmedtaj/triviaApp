<template>
  <div>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <v-row justify="center">
      <p class="display-1">{{ fillBlank[counter].question }}</p>
    </v-row>
    <v-row justify="center" class="keyboardWidth">
      <SimpleKeyboard
        @onKeyPress="onKeyPress"
        :destroy="fillBlank[counter].answered"
      />
    </v-row>
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";

export default {
  name: "fillBlank",
  components: {
    SimpleKeyboard,
  },
  props: {},
  data() {
    return {
      counter: 0,
      fillBlank: this.$store.state.fillBlank,
      rightAnswer: new Array(this.$store.state.MCQs.length).fill(" "),
    };
  },
  mounted() {},
  methods: {
    onKeyPress(button) {
      console.log("Button: ", button);
    },
  },
};
</script>

<style scoped lang="scss">
.keyboardWidth {
  // width: 900px !important;
  min-width: 900px;
}
</style>
