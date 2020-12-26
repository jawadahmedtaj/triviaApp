<template>
  <v-app>
    <v-container>
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
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <v-slide-y-transition>
          <router-view />
        </v-slide-y-transition>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Questions from "./components/Questions";

export default {
  name: "App",
  components: {
    Questions
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
            2: "second option"
          },
          answer: 1,
          answered: false
        },
        {
          question: "Question 2",
          answers: {
            1: "first option",
            2: "second option"
          },
          answer: 2,
          answered: false
        }
      ]
    },
    binary: {
      madi: [
        {
          question: "Question 1",
          answer: 1,
          answered: false
        },
        {
          question: "Question 2",
          answer: 2,
          answered: false
        }
      ]
    },
    fillBlank: {
      jawad: [
        {
          question: "Sparky get a ____",
          answer: "life",
          answered: false
        }
      ]
    }
  }),
  methods: {
    questionDecider() {
      this.questionShow = false;
      this.show = true;
    }
  }
};
</script>

<style lang="scss">
.fullDisplay {
  height: 100vh;
  width: 100%;
}
</style>
