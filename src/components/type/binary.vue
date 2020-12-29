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
    };
  },
  mounted() {
    this.$toast.clear();
  },
  methods: {
    answerChecker(value) {
      if (value === this.binary[this.counter].answer) {
        this.binary[this.counter].answered = true;
        const mes = [
          "Congratulations you got something right",
          "Fine I will give you this win",
          "Wait... okay",
          "Brain cells finally started working?",
          "Yes congratulations you got 1 out of 2 choices correct... Big brain move",
          "This does seem right",
          "Oh wow, you actually got it! Good job! Have a cookie!",
          "I am usually not this nice but okay you got it!",
          "Aye!",
          "You ain't smart... The question was just dumb c:",
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
          "Boo boo! wrong answer!",
          "Are you even trying?",
          "Sigh... Just select the other option and get this over with please",
          "Get a life, the other option is the correct one",
          ":(",
          "wow",
          "Have you tried the other option?",
          "THAT IS NOT THE RIGHT ANSWER!!",
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
    this.$store.commit("binaryAnswers", this.binary);
  },
};
</script>

<style scoped lang="scss"></style>