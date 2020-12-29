<template>
  <div>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <v-row justify="center">
      <p class="display-1">{{ fillBlank[counter].question }}</p>
    </v-row>
    <v-row justify="center" class="keyboardWidth">
      <SimpleKeyboard @onKeyPress="onKeyPress" />
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
  data() {
    return {
      counter: 0,
      fillBlank: this.$store.state.fillBlank,
      posHolder: 0,
      firstCheck: false,
      rightAnswer: new Array(this.$store.state.fillBlank.length).fill(
        "Fill in the blanks!"
      ),
    };
  },
  mounted() {
    this.posHolder = this.fillBlank[this.counter].question.indexOf("_");
  },
  methods: {
    onKeyPress(button) {
      const wordPos = this.fillBlank[this.counter].answer.indexOf(button);
      if (wordPos > -1) {
        this.fillBlank[this.counter].question = this.replaceAt(
          this.fillBlank[this.counter].question,
          this.posHolder + wordPos,
          button
        );
        this.fillBlank[this.counter].answer[wordPos] = "_";
      } else {
        this.counter += 1;
        this.counter -= 1;
        this.rightAnswer[this.counter] = "Boo boo! Guess again";
      }
      if (this.fillBlank[this.counter].question.indexOf("_") < 0) {
        this.rightAnswer[this.counter] =
          "Congratulations for once in your life you got something right! Question by: " +
          this.fillBlank[this.counter].by;
        this.fillBlank[this.counter].answered = true;
      }
    },
    replaceAt(str, index, replace) {
      return str.substring(0, index) + replace + str.substring(index + 1);
    },
    counterUpdate(num) {
      this.counter += num;
      this.firstCheck = false;
      this.posHolder = this.fillBlank[this.counter].question.indexOf("_");
    },
  },
  beforeDestroy() {
    this.$store.commit("fillBlankAnswers", this.fillBlank);
  },
};
</script>

<style scoped lang="scss">
.keyboardWidth {
  width: 65vw;
  // min-width: 95vw;
}
</style>
