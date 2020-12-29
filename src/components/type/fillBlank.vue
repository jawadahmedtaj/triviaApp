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
        const mes = [
          "Congratulations you got one right",
          "Fine I will give you this one",
          "Wait... okay",
          "Does this even count?",
          "Is this even English?",
          "Brain cells finally started working?",
          "This does seem right",
          "Oh wow, you actually got it! Good job! Have a cookie!",
          "I am usually not this nice but okay you got it!",
          "Aye!",
          "Congratulations now you know your A B C",
        ];
        const choice = Math.floor(Math.random() * mes.length);
        this.$toast.clear();
        this.$toast.open({
          message: mes[choice],
          position: "bottom",
        });
        setTimeout(() => {
          this.$toast.open({
            message: "The question was by: " + this.binary[this.counter].by,
            position: "bottom",
            type: "info",
          });
        }, 1000);
      } else {
        const mes = [
          "Boo boo! wrong letter!",
          "Are you even trying?",
          "There are 26 letters, have you tried others?",
          "Chief... That ain't it",
          ":(",
          "wow",
          "Didn't you just try this?",
          "THAT IS NOT THE RIGHT LETTER!!",
          "I feel like you are plaing hangman, but I am the one who wants to be hanged",
          "Do you even know your A B C?",
        ];
        const choice = Math.floor(Math.random() * mes.length);
        this.$toast.clear();
        this.$toast.open({
          message: mes[choice],
          position: "bottom",
          type: "error",
        });
      }
      if (this.fillBlank[this.counter].question.indexOf("_") < 0) {
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
