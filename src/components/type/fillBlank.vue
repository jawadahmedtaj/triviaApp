<template>
  <div>
    {{ msg }}
    <v-btn depressed color="primary" @click="adder"> Increment </v-btn>
  </div>
</template>

<script>
export default {
  name: "fillBlank",
  props: {
    msg: String,
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
