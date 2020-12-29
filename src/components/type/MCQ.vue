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
              <input type="checkbox" :value="answer" :name="answer" />
              <label :for="key">{{ answer }}</label>
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
        <v-row justify="center" class="mt-12"> </v-row>
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
      console.log(e.target[4].value);
      console.log("checking");
    },
  },
  beforeDestroy() {},
};
</script>

<style scoped lang="scss">
#questions {
  margin-top: 25px;
}
label {
  margin-left: 25px;
}
</style>