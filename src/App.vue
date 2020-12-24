<template>
  <v-row justify="center">
    <v-slide-y-transition>
      <v-card-text v-show="show"> <Questions /> </v-card-text>
    </v-slide-y-transition>
  </v-row>
</template>

<script>
import Questions from "./components/Questions";

export default {
  name: "App",

  components: {
    Questions,
  },

  data: () => ({
    show: true,
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
};
</script>

<style lang="scss">
</style>