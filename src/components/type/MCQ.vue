<template>
  <div>
    <v-row>
      <v-col>
        <v-btn class="backButtonAdjuster" color="warning" to="/">
          <v-icon color=""> mdi-home </v-icon>
        </v-btn>
        <v-row justify="center">
          <p class="display-1">{{ MCQs[counter].question }}</p>
        </v-row>
        <v-row justify="center">
          <form @submit.prevent="answerChecker" action="" id="questions">
            <p v-for="(answer, key) in MCQs[counter].answers" :key="key">
              <v-checkbox
                :label="answer"
                :disabled="MCQs[counter].answered"
              ></v-checkbox>
            </p>
            <v-btn
              type="submit"
              depressed
              class="buttonAdjuster"
              color="warning"
              :disabled="MCQs[counter].answered"
            >
              Check answers
            </v-btn>
          </form>
        </v-row>
        <v-row justify="center">
          <v-fade-transition>
            <p
              class="display-1 mt-12"
              v-if="
                MCQs[counter].answered === true || rightAnswer[counter] !== ''
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
            :disabled="counter === MCQs.length - 1"
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
  name: "MCQs",
  data() {
    return {
      counter: 0,
      MCQs: this.$store.state.MCQs,
      rightAnswer: new Array(this.$store.state.MCQs.length).fill(" "),
    };
  },
  methods: {
    answerChecker(e) {
      const objLen = Object.keys(this.MCQs[this.counter].answers).length;
      const answers = this.MCQs[this.counter].answer;
      let checkers = [];
      console.log(answers);
      for (let i = 0; i < objLen; i++) {
        if (e.target[i].checked) {
          checkers.push(i + 1);
        }
      }
      if (JSON.stringify(answers) === JSON.stringify(checkers)) {
        this.MCQs[this.counter].answered = true;
        this.rightAnswer[this.counter] =
          "Congratulations for once in your life you got something right! Question by: " +
          this.MCQs[this.counter].by;
      } else {
        this.MCQs[this.counter].answered = true;
        this.MCQs[this.counter].answered = false;
        this.rightAnswer[this.counter] = "Boo boo! wrong answer";
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("MCQsAnswers", this.MCQs);
  },
};
</script>

<style scoped lang="scss">
#questions {
  margin-top: 25px;
}
</style>