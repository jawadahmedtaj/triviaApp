<template>
  <div>
    <v-btn depressed color="primary" @click="adder"> Increment </v-btn>
    <v-spacer> </v-spacer>
    <v-btn color="warning" to="/"> Go back </v-btn>
  </div>
</template>

<script>
export default {
  name: "fillBlank",
  props: {},
  methods: {
    adder() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped lang="scss"></style>
