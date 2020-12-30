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
        by: "Tajamul",
        question: "who is the real chuss mastah?",
        options: ["Taju", "Yoona"],
        answer: "Taju",
        answered: false
      },
      {
        by: "Shumaita",
        question: "Who is cool, fun and gives lots of free chocolates?",
        options: ["Willy wonka", "Sparky"],
        answer: "Sparky",
        answered: false
      },
      {
        by: "UwU",
        question: "Are you gay?",
        options: ["Yes", "Yems"],
        answer: "Yems",
        answered: false
      },
      {
        by: "Rabei",
        question: "What do you do when you make in-game money?",
        options: ["accidentally propose to Sadia", "accidentally propose to Sadia and get rekt"],
        answer: "accidentally propose to Sadia and get rekt",
        answered: false
      },
      {
        by: "Ain",
        question: "Nobody: Sadia when she looks at yakhni boiz:",
        options: ["Sexist Monkeys", "Just Monkeys"],
        answer: "Sexist Monkeys",
        answered: false
      },
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
        by: "Wonki",
        question: "What to expect from Sadia during Among Us?",
        answers: {
          1: "Goes solo",
          2: "On a killing spree",
          3: "Kicks arse",
          4: "All of the above",
        },
        answer: [4],
        answered: false
      },
      {
        by: "Faraz",
        question: "How much do you hate Faraz Bijrani?",
        answers: {
          1: "Yes",
          2: "No",
          3: "A lot",
          4: "A little",
        },
        answer: [3],
        answered: false
      },
      {
        by: "Wonki",
        question: "How much do the ladeis adore Sadia?",
        answers: {
          1: "More than fried chicken definitely",
          2: "They big gay for her",
          3: "Bucketloads of infinite love",
          4: "All of the above and more",
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
          4: "Not Sparky"
        },
        answer: [1, 2, 3],
        answered: false
      },
      {
        by: "Ain",
        question: "We know what the fox says but what does Sadia say when she shows up on discord?",
        answers: {
          1: "Sojao tum sab :pepeangrygun:",
          2: "Tum loug abhi tak jaag rahe ho?",
          3: "Tum loug soute kyun nahi?",
          4: "All of the above"
        },
        answer: [4],
        answered: false
      },
      {
        by: "Zurnain",
        question: "How much eidi does Sadia gives to strangers whining online?",
        answers: {
          1: "5K",
          2: "2K",
          3: "1K",
        },
        answer: [3],
        answered: false
      },
      {
        by: "Sana",
        question: "Which emoji does Sparky use the most?",
        answers: {
          1: ":heart:",
          2: ":PepeAngryGun:",
          3: ":praycheems:",
          4: ":Poggies_C:",
        },
        answer: [2],
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
      {
        by: "Tajamul",
        question: "The kind of a leap are you famous for: _____",
        answer: ["s", "l", "e", "e", "p"],
        answered: false
      },
      {
        by: "Fawad",
        question: "Is it time for Dota 2? __",
        answer: ["n", "o"],
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
        message: "Many happy return of the day Spock the fellow boomer e.e but most importantly get a life... And may you have many more c:",
        status: false,
        reveal: false
      },
      Fawad:
      {
        message: "Happy Birthday Miss Sparky and Happy New Year. May 2021 give bigger pay and better work so you make more sound financial investments",
        status: false,
        reveal: false
      },
      Wonki:
      {
        message: "Happy birthday Sadia bajiiiii! May you have many more, and may you have many more monitors. It’s literally empowering to talk with you. You’re one of the women I look up to. I hope you have a peaceful life ahead of you, Ameen. Sparky face reveal added 10 years to my life, thank you. 👉👈",
        status: false,
        reveal: false
      },
      Shumaita:
      {
        message: "Happy birthday sparky ♥️♥️♥️ May you have many more. Hope we get to meet soon and when we do imma give you lots of candy or something hehe okay bye have a nice dayy 💖",
        status: false,
        reveal: false
      },
      Ain:
      {
        message: "Happiest birthday to the coolest, most badass woman in yakhni! Your retorts are to die for :')) Stay sarcastic, stay awesome. Have a good day gorgeous •u•",
        status: false,
        reveal: false
      },
      Tajamul:
      {
        message: "Message pending",
        status: false,
        reveal: false
      },
      Zurnain:
      {
        message: "Happy birthday Saddiiaaa, thank you for always helping me out and ordering stuff for me on aliexpress. And Thank you for giving me Eidi :3 May Allah grant you success and happiness 💕",
        status: false,
        reveal: false
      },
      Sana:
      {
        message: "Happy Birthdayyy Sparkyyy. Stay blessed and happy. You're an amazing human being 😍🥰",
        status: false,
        reveal: false
      },
      Rabei:
      {
        message: "Happy Birthday Sadiaa!! you’re a very strong, independent and amazing woman, and I absolutely love, adore and look up to you. Getting to know you has been such a pleasure. Pls keep kicking ass always!! 💕",
        status: false,
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