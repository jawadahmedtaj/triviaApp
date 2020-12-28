<template>
  <div>
    <v-row>
      <v-col>
        <v-btn class="backButtonAdjuster" color="warning" to="/">
          <v-icon color=""> mdi-home </v-icon>
        </v-btn>
        <v-row justify="center">
          <p class="display-1">{{ binary[counter].question }}</p>
        </v-row>
        <v-row justify="center" class="mt-12">
          <v-btn
            depressed
            class="buttonAdjuster"
            color="primary"
            @click="answerChecker(1)"
            :disabled="binary[counter].answered"
          >
            Yes
          </v-btn>
          <v-btn
            depressed
            color="error"
            @click="answerChecker(2)"
            :disabled="binary[counter].answered"
          >
            No
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-fade-transition>
            <p class="display-1 mt-12" v-if="rightAnswer[counter] !== ''">
              {{ rightAnswer[counter] }}
            </p>
          </v-fade-transition>
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
            :disabled="counter === binary.length - 1"
          >
            <v-icon>mdi-arrow-right-bold-circle</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "binary",
  data() {
    return {
      counter: 0,
      binary: this.$store.state.binary,
      rightAnswer: new Array(this.$store.state.binary.length),
    };
  },
  methods: {
    answerChecker(value) {
      if (value === this.binary[this.counter].answer) {
        this.binary[this.counter].answered = true;
        this.rightAnswer[this.counter] =
          "Congratulations for once in your life you got something right! Question by: " +
          this.binary[this.counter].by;
      } else {
        this.binary[this.counter].answered = true;
        this.binary[this.counter].answered = false;
        this.rightAnswer[this.counter] = "Boo boo! wrong answer";
      }
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped lang="scss"></style>
