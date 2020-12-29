<template>
  <v-container class="">
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <div class="messagesFixer">
      <v-row no-gutters>
        <v-card
          shaped
          class="mx-5 my-5"
          min-width="310"
          max-width="310"
          v-for="(message, key) in messages"
          :key="key"
        >
          <v-card-text>
            <p class="display-1 text--primary">
              {{ key }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              @click="revealChecker(key)"
              :disabled="message.reveal"
            >
              Reveal message
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="message.reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 50%"
            >
              <v-card-text>
                <p>
                  {{ message.message }}
                </p>
                <a target="_blank" :href="link" @click="linkChange">
                  <v-img
                    v-if="key === 'special'"
                    src="../assets/imgs/magik.png"
                  ></v-img>
                </a>
              </v-card-text>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Wishes",
  data() {
    return {
      reveal: false,
      messages: this.$store.state.messages,
      counter: 0,
      link: "https://youtu.be/DLzxrzFCyOs",
    };
  },
  mounted() {
    this.$toast.clear();
  },
  methods: {
    linkChange() {
      this.$toast.open({
        message: "Okay sorry :( please click the image again c:",
        position: "bottom",
        type: "error",
        duration: 60000,
      });
      if (this.counter === 101) {
        this.link = "https://youtu.be/y6120QOlsfU";
        this.$toast.clear();
        this.$toast.open({
          message: "AAAAAA okay serious this time, click image again pls c:",
          position: "bottom",
          duration: 60000,
        });
      } else if (this.counter === 102) {
        this.link = "#";
      }
      this.counter++;
    },
    revealChecker(value) {
      if (this.messages[value].status) {
        this.messages[value].reveal = true;
      } else if (value === "special") {
        this.counter++;
        if (this.counter === 1) {
          this.$toast.open({
            message: "This does seem to be doing something... Keep going?",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 5) {
          this.$toast.open({
            message: "You are close keep going!",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 7) {
          this.$toast.open({
            message: "Congratulations you are an android developer now!",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 40) {
          this.$toast.open({
            message:
              "Sorry I lied earlier, you are nowhere near close enough, but click faster!",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 75) {
          this.$toast.open({
            message: "A",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 76) {
          this.$toast.open({
            message: "l",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 77) {
          this.$toast.open({
            message: "m",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 78) {
          this.$toast.open({
            message: "o",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 79) {
          this.$toast.open({
            message: "s",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 80) {
          this.$toast.open({
            message: "t",
            position: "bottom",
            type: "info",
          });
        } else if (this.counter === 100) {
          this.messages[value].reveal = true;
          this.$toast.open({
            message: "YOU GOT IT!",
            position: "bottom",
          });
        }
      } else {
        const mes = [
          "You must venture back into questions and answer atleast 1 question by this person accurately to reveal their wish",
          "Peepopointlaugh",
          "You thought you were getting a reward but you got me... Dio",
        ];
        const choice = Math.floor(Math.random() * mes.length);
        this.$toast.clear();
        this.$toast.open({
          message: mes[choice],
          position: "bottom",
          type: "info",
        });
      }
    },
  },
};
</script>

<style lang="scss">
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.messagesFixer {
  flex-direction: row !important;
}
.marginFix {
  margin-top: 50px;
}
</style>
