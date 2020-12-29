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
    };
  },
  mounted() {
    this.$toast.clear();
  },
  methods: {
    answerChecker(e) {
      const objLen = Object.keys(this.MCQs[this.counter].answers).length;
      const answers = this.MCQs[this.counter].answer;
      let checkers = [];
      for (let i = 0; i < objLen; i++) {
        if (e.target[i].checked) {
          checkers.push(i + 1);
        }
      }
      if (JSON.stringify(answers) === JSON.stringify(checkers)) {
        this.MCQs[this.counter].answered = true;
        const mes = [
          "Congratulations you got something right",
          "Fine I will give you this win",
          "Wait... okay",
          "Brain cells finally started working?",
          "Oh come on...",
          "This does seem right",
          "Oh wow, you actually got it! Good job! Have a cookie!",
        ];
        const choice = Math.floor(Math.random() * mes.length);
        this.$toast.clear();
        this.$toast.open({
          message: mes[choice],
          position: "bottom",
        });
        setTimeout(() => {
          this.$toast.open({
            message: "The question was by: " + this.MCQs[this.counter].by,
            position: "bottom",
            type: "info",
          });
        }, 1000);
      } else {
        const mes = [
          "Boo boo! wrong answer!",
          "Are you even trying?",
          "This ain't no game, take it seriously",
          "wew try harder nerd",
          "Get a life",
          "Guess you didn't love this person enough :(",
          "Do you want me to answer instead?",
          "THAT IS NOT THE RIGHT ANSWER!!",
          "Have you tried unselecting somethings?",
        ];
        const choice = Math.floor(Math.random() * mes.length);
        this.$toast.clear();
        this.$toast.open({
          message: mes[choice],
          position: "bottom",
          type: "error",
        });
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