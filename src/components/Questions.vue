<template>
  <div>
    <MCQ msg="MCQ" />
    <binary msg="binary" />
  </div>
</template>

<script>
import MCQ from "./type/MCQ";
import binary from "./type/binary";

export default {
  name: "Questions",
  props: {},
  components: {
    MCQ,
    binary,
  },
};
</script>

<style scoped lang="scss">
</style>