<template>
  <div>
    <v-row>
      <v-col>
        <v-btn depressed color="primary" @click="onClickChild1">
          Binary click me
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn color="warning" to="/"> Go back </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "binary",
  methods: {
    onClickChild1() {
      console.log("Log from binary");
      this.$emit("onClickChild", "value");
    },
  },
};
</script>

<style scoped lang="scss"></style>
