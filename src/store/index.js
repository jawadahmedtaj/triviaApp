import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    binary: [
      {
        by: "Jawad",
        question: "Question 1? (currect answer is yes, but it can be more than just yes or no but please keep it simple)",
        answer: 1,
        answered: false
      },
      {
        by: "Hammad",
        question: "Question 2? (currect answer is yes, but it can be more than just yes or no but please keep it simple)",
        answer: 2,
        answered: false
      }
    ],
    MCQs: [
      {
        by: "Jawad",
        question: "Why are you gay?",
        answers: {
          1: "first option",
          2: "second option",
          3: "third option",
          4: "fourth option",
        },
        answer: 1,
        answered: false
      },
      {
        by: "Hammad",
        question: "Question 2",
        answers: {
          1: "first option",
          2: "second option"
        },
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
      Hammad:
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
      boiiiiii:
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
    },
    binaryAnswers(state, data) {
      state.binary = data;
    }
  },
  actions: {},
  modules: {}
});