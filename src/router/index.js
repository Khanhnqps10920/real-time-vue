import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Chat from "../views/Chat.vue";

// store
import {
  store
} from '../store/index';

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    beforeEnter: (to, from, next) => {

      console.log(store, to, from);

      if (store.state.chat.name) {
        next();
      } else {
        store.dispatch('chat/changeFeedBack', "You Must Enter A Chat Name");

        next({
          name: "Home"
        });
      }

    }
  }

];

const router = new VueRouter({
  routes
});

export default router;