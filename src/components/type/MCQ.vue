<template>
  <div>
    <v-btn class="backButtonAdjuster" color="warning" to="/">
      <v-icon color=""> mdi-home </v-icon>
    </v-btn>
    <div>MCQ</div>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "MCQ",
  props: {},
  data() {
    return {
      MCQs: this.$store.state.MCQs,
    };
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss"></style>
