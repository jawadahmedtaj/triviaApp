<template>
  <div>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <div>
      <p>Fill in the blank:</p>
      <div>
        <input type="text" maxlength="1" placeholder="_" />
      </div>
    </div>
    <v-btn depressed color="primary" @click="adder"> Check Answer </v-btn>
    <v-spacer> </v-spacer>
  </div>
</template>

<script>
export default {
  name: "fillBlank",
  props: {},
  data() {
    return {
      fillBlank: this.$store.state.fillBlank,
    };
  },
  mounted() {
  },
  methods: {
    adder() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped lang="scss"></style>
