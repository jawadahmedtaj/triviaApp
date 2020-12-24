<template>
  <div>
    <MCQ msg="MCQ" />
    <binary msg="binary" />
    <fillBlank msg="fillBlank" />
  </div>
</template>

<script>
import MCQ from "./type/MCQ";
import binary from "./type/binary";
import fillBlank from "./type/fillBlank";

export default {
  name: "Questions",
  props: {},
  components: {
    MCQ,
    binary,
    fillBlank
  }
};
</script>

<style scoped lang="scss"></style>
