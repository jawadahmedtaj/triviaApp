<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String,
    },
    destroy: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    keyboard: null,
  }),
  mounted() {
    this.keyboard = new Keyboard({
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      layout: {
        default: ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"],
      },
    });
  },
  methods: {
    onKeyPress(button) {
      this.$emit("onKeyPress", button);
    },
  },
  watch: {
    destroy() {
      if (this.destroy === true) {
        this.keyboard.destroy();
      } else {
        this.keyboard = new Keyboard({
          onChange: this.onChange,
          onKeyPress: this.onKeyPress,
          layout: {
            default: [
              "q w e r t y u i o p",
              "a s d f g h j k l",
              "z x c v b n m",
            ],
          },
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>