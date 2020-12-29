import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
        answer: [1, 4],
        answered: false
      },
      {
        by: "Hammad",
        question: "Question 2",
        answers: {
          1: "first option",
          2: "second option"
        },
        answer: [1],
        answered: false
      }
    ],
    fillBlank: [
      {
        by: "Jawad",
        question: "Sparky get a ____",
        answer: ["l", "i", "f", "e"],
        answered: false
      },
      {
        by: "Hammad",
        question: "Sparky ____ get a",
        answer: ["l", "i", "f", "e"],
        answered: false
      },
      {
        by: "Fawad",
        question: "Sparky get a ____",
        answer: ["l", "i", "f", "e"],
        answered: false
      },
    ],
    messages: {
      Hammad:
      {
        message: "Test",
        status: false,
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
        status: false,
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
        status: false,
        reveal: false
      },
    }
  },
  mutations: {
    binaryAnswers(state, data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].answered) {
          const name = data[i].by
          state.messages[name].status = true;
        }
      }
      state.binary = data;
    },
    MCQsAnswers(state, data) {
      state.MCQs = data;
    },
    fillBlankAnswers(state, data) {
      state.fillBlank = data;
    }
  },
  actions: {},
  modules: {}
});