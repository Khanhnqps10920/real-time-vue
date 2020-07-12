<template>
  <div class="chat container">
    <h2 center teal-text>Ninja chat</h2>
    <ChatScreen></ChatScreen>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChatScreen from "../components/ChatScreen.vue";

export default {
  computed: {
    ...mapState("chat", ["name"])
  },
  components: {
    ChatScreen
  }
};
</script>

<style>
</style>