<template>
  <v-container class="fullDisplay" fluid>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <div>
      <v-card shaped class="mx-auto" max-width="344">
        <v-card-text>
          <p class="display-1 text--primary">el·ee·mos·y·nar·y</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            Learn More
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <p class="display-1 text--primary">Origin</p>
              <p>
                late 16th century (as a noun denoting a place where alms were
                distributed): from medieval Latin eleemosynarius, from late
                Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
              </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text color="teal accent-4" @click="reveal = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    messages: this.$store.state.messages,
  }),
  methods: {},
};
</script>

<style lang="scss">
.fullDisplay {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.buttonAdjuster {
  margin-right: 50px;
}
</style>
