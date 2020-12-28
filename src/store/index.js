import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    MCQs: [
      {
        by: "Jawad",
        question: "Why are you gay?",
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
        question: "Why are you gay?",
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
      Madi:
      {
        message: "Test",
        status: true,
        reveal: false
      },
      Jawad:
      {
        message: "Test1",
        status: false,
        reveal: false
      },
      Fawad:
      {
        message: "Test2",
        status: false,
        reveal: false
      },
      Muneeb:
      {
        message: "Test",
        status: true,
        reveal: false
      },
      Rabei:
      {
        message: "Test1",
        status: false,
        reveal: false
      },
      Shumaita:
      {
        message: "Test2",
        status: true,
        reveal: false
      },
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