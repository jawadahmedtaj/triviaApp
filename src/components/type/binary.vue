<template>
  <div>
    <v-row>
      <v-col>
        <v-btn class="backButtonAdjuster" color="warning" to="/">
          <v-icon color=""> mdi-home </v-icon>
        </v-btn>
        <p class="question">What is this?</p>
        <v-spacer></v-spacer>
        <v-btn depressed class="buttonAdjuster" color="primary"> Yes </v-btn>
        <v-btn depressed color="error"> No </v-btn>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "binary",
  methods: {},
  data() {
    return {
      binary: undefined,
    };
  },
  mounted() {
    this.binary = this.$store.state.binary;
  },
};
</script>

<style scoped lang="scss"></style>
