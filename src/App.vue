<template>
  <v-app>
    <v-main>
      <Questions />
    </v-main>
  </v-app>
</template>

<script>
import Questions from "./components/Questions";

export default {
  name: "App",

  components: {
    Questions,
  },

  data: () => ({}),
};
</script>

<style lang="scss">
</style>