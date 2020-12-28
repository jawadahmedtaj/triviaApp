import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Binary from "../components/type/binary.vue"
import MCQ from "../components/type/MCQ.vue"
import fillBlank from "../components/type/fillBlank.vue"
import messages from "../components/messages.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/binary",
    name: "Binary",
    component: Binary
  },
  {
    path: "/MCQ",
    name: "MCQ",
    component: MCQ
  },
  {
    path: "/fillBlank",
    name: "Fill in the blanks",
    component: fillBlank
  },
  {
    path: "/wishes",
    name: "Messages",
    component: messages
  },
];

const router = new VueRouter({
  routes
});

export default router;
