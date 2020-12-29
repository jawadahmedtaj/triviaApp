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
    <v-row justify="space-between">
      <v-btn
        class="leftMoveButton"
        depressed
        color="warning"
        v-on:click="counter -= 1"
        :disabled="counter === 0"
      >
        <v-icon>mdi-arrow-left-bold-circle</v-icon>
      </v-btn>
      <v-btn
        class="rightMoveButton"
        depressed
        color="warning"
        v-on:click="counter += 1"
        :disabled="counter === fillBlank.length - 1"
      >
        <v-icon>mdi-arrow-right-bold-circle</v-icon>
      </v-btn>
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
