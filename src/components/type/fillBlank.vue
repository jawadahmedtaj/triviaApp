<template>
  <div>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <div>
      <p class="display-1">{{ fillBlank[counter].question }}</p>
    </div>
    <v-row justify="center">
      <v-btn
        depressed
        class="buttonAdjuster"
        color="warning"
        :disabled="fillBlank[counter].answered"
      >
        Check answers
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "fillBlank",
  props: {},
  data() {
    return {
      counter: 0,
      fillBlank: this.$store.state.fillBlank,
      rightAnswer: new Array(this.$store.state.MCQs.length).fill(" "),
      // keyboard: ["q","w","e","r"]
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
