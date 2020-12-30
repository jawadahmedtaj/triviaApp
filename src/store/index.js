import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    binary: [
      {
        by: "Gambit",
        question: "Is this statement true or false?",
        options: ["False", "True"],
        answer: "False",
        answered: false
      },
      {
        by: "UwU",
        question: "Are you gay?",
        options: ["Yes", "Yems"],
        answer: "Yems",
        answered: false
      }
    ],
    MCQs: [
      {
        by: "Hammad",
        question: "What generation does the processor i5 8600k belong to?",
        answers: {
          1: "4th Gen",
          2: "4th Gen",
          3: "4th Gen",
          4: "8th Gen",
        },
        answer: [1, 2, 3],
        answered: false
      },
      {
        by: "Faraz",
        question: "How much do you hate Faraz Bijrani?",
        answers: {
          1: "Yes",
          2: "No",
          3: "A little",
          4: "A lot",
        },
        answer: [4],
        answered: false
      },
      {
        by: "Tajamul",
        question: "What came first? Sbarky, Chimken or the Egg?",
        answers: {
          1: "Sbarky",
          2: "Chimken",
          3: "The egg",
        },
        answer: [1, 2, 3],
        answered: false
      },
    ],
    fillBlank: [
      {
        by: "Jawad",
        question: "Sparky get a ____",
        answer: ["l", "i", "f", "e"],
        answered: false
      },
    ],
    messages: {
      Gambit:
      {
        message: "Have a great year and even better sleepies xdd 2020 wasn't a great year, but it's just another step towards morphing reality into a place that is \"sparky\" (heh word play) Happy birthday! hf!",
        status: false,
        reveal: false
      },
      Hammad:
      {
        message: "Happy Birthday Sbarky! Stay happy and stay makin financial mistakes as long as they make you happy! uwu",
        status: false,
        reveal: false
      },
      Faraz:
      {
        message: "Happy birthday monkey!",
        status: false,
        reveal: false
      },
      Jawad:
      {
        message: "Many happy return of the day Spock the boomer e.e but most importantly get a life... And may you have many more c:",
        status: false,
        reveal: false
      },
      Fawad:
      {
        message: "Happy Birthday Miss Sparky and Happy New Year. May 2021 give bigger pay and better work so you make more sound financial investments",
        status: true,
        reveal: false
      },
      special:
      {
        message: "Maybe click the image, maybe it leads to somewhere... special?",
        status: false,
        reveal: false
      }
    }
  },
  mutations: {
    binaryAnswers(state, data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].answered && data[i].by !== "UwU") {
          const name = data[i].by
          state.messages[name].status = true;
        }
      }
      state.binary = data;
    },
    MCQsAnswers(state, data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].answered && data[i].by !== "UwU") {
          const name = data[i].by
          state.messages[name].status = true;
        }
      }
      state.MCQs = data;
    },
    fillBlankAnswers(state, data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].answered && data[i].by !== "UwU") {
          const name = data[i].by
          state.messages[name].status = true;
        }
      }
      state.fillBlank = data;
    }
  },
  actions: {},
  modules: {}
});