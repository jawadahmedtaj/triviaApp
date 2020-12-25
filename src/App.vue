<template>
  <div>
    <v-row class="d-flex justify-center align-content-center" height="100%">
      <v-col class="">
        <v-slide-y-reverse-transition>
          <div v-show="questionShow">
            <v-btn depressed primary @click="questionDecider"> Click me </v-btn>
          </div>
        </v-slide-y-reverse-transition>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-content-center" height="100%">
      <v-col class="">
        <v-slide-y-transition>
          <div v-show="show"><Questions /></div>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Questions from "./components/Questions";

export default {
  name: "App",
  components: {
    Questions,
  },
  data: () => ({
    questionShow: true,
    show: false,
    selected: null,
    MCQs: {
      madi: [
        {
          question: "Question 1",
          answers: {
            1: "first option",
            2: "second option",
          },
          answer: 1,
          answered: false,
        },
        {
          question: "Question 2",
          answers: {
            1: "first option",
            2: "second option",
          },
          answer: 2,
          answered: false,
        },
      ],
    },
    binary: {
      madi: [
        {
          question: "Question 1",
          answer: 1,
          answered: false,
        },
        {
          question: "Question 2",
          answer: 2,
          answered: false,
        },
      ],
    },
    fillBlank: {
      jawad: [
        {
          question: "Sparky get a ____",
          answer: "life",
          answered: false,
        },
      ],
    },
  }),
  methods: {
    questionDecider() {
      console.log("Question decider clicked!");
    },
  },
};
</script>

<style lang="scss">
.fullDisplay {
  height: 100vh;
  width: 100%;
}
</style>