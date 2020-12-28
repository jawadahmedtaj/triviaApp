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
            <v-btn text color="teal accent-4" @click="revealChecker(key)">
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
    };
  },
  methods: {
    revealChecker(value) {
      if (this.messages[value].status) {
        this.messages[value].reveal = true;
      } else {
        let mes = [
          "You must venture back into questions and answer atleast 1 accurately to finally reveal this secret",
          "Peepopointlaugh",
          "You thought you were getting a reward but you got me... Dio",
        ];
        const choice = Math.floor(Math.random() * mes.length);
        alert(mes[choice]);
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
