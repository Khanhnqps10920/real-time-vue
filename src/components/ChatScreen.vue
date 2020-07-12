<template>
  <div class="card">
    <div class="card-content">
      <ul class="messages">
        <p class="red-text center-align" v-if="loading">Loading</p>
        <li v-else v-for="(message,i) in listMessage" :key="message.id + i">
          <span class="teal-text">{{ message.name }}:</span>
          <span class="grey-text text-darken-3">{{ message.content }}</span>
          <span class="grey-text time">{{ message.timestamp }}</span>
        </li>
      </ul>
    </div>
    <div class="card-action">
      <NewMessage></NewMessage>
    </div>
  </div>
</template>

<script>
// database
// import database from "../firebase/init";

import NewMessage from "./NewMessage.vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    NewMessage
  },
  computed: {
    ...mapState("chat", ["listMessage", "loading"])
  },
  methods: {
    ...mapActions("chat", ["fetchListMessage"])
  },
  created() {
    // fetch data
    this.fetchListMessage();
  }
};
</script>

<style>
.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 1.2em;
}

.teal-text {
  margin-right: 0.5em;
}

.messages li {
  margin: 10px 0;
}
</style>