<template>
  <div>
    <MCQ msg="MCQ" />
    <binary msg="binary" @onClickChild="onClickChild" />
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
    fillBlank,
  },
  methods: {
    onClickChild(value) {
      console.log(value, "Emitted from questions");
    },
  },
};
</script>

<style scoped lang="scss"></style>
