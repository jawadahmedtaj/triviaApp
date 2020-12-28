import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    MCQs: [
      {
        by: "Jawad",
        question: "Question 1",
        answers: {
          1: "first option",
          2: "second option"
        },
        answer: 1,
        answered: false
      },
      {
        by: "Jawad",
        question: "Question 2",
        answers: {
          1: "first option",
          2: "second option"
        },
        answer: 2,
        answered: false
      }
    ],
    binary: [
      {
        by: "Jawad",
        question: "Question 1",
        answer: 1,
        answered: false
      },
      {
        by: "Jawad",
        question: "Question 2",
        answer: 2,
        answered: false
      }
    ],
    fillBlank: [
      {
        by: "Jawad",
        question: "Sparky get a ____",
        answer: "life",
        answered: false
      }
    ],
    messages: {
      maadi: "",
      jawad: "",
      fawad: ""
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {},
  modules: {}
});