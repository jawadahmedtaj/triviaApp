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
    <v-row justify="center">
      <v-fade-transition>
        <p
          class="display-1 mt-12"
          v-if="
            fillBlank[counter].answered === true || rightAnswer[counter] !== ''
          "
        >
          {{ rightAnswer[counter] }}
        </p>
      </v-fade-transition>
    </v-row>
    <v-row justify="space-between">
      <v-btn
        class="leftMoveButton"
        depressed
        color="warning"
        v-on:click="counterUpdate(-1)"
        :disabled="counter === 0"
      >
        <v-icon>mdi-arrow-left-bold-circle</v-icon>
      </v-btn>
      <v-btn
        class="rightMoveButton"
        depressed
        color="warning"
        v-on:click="counterUpdate(1)"
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
      posHolder: 0,
      firstCheck: false,
      rightAnswer: new Array(this.$store.state.MCQs.length).fill(" "),
    };
  },
  mounted() {},
  methods: {
    onKeyPress(button) {
      const wordPos = this.fillBlank[this.counter].answer.indexOf(button);
      if (!this.firstCheck) {
        this.posHolder = this.fillBlank[this.counter].question.indexOf("_");
        this.firstCheck = true;
      }
      if (wordPos > -1) {
        console.log("wordPos: ", wordPos);
        this.fillBlank[this.counter].question = this.replaceAt(
          this.fillBlank[this.counter].question,
          this.posHolder + wordPos,
          button
        );
        this.fillBlank[this.counter].answer[wordPos] = "_";
      }
    },
    replaceAt(str, index, replace) {
      return str.substring(0, index) + replace + str.substring(index + 1);
    },
    counterUpdate(num) {
      this.counter += num;
      this.firstCheck = false;
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
