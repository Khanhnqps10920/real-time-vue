<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent>
          <label for="name">Enter your name:</label>
          <input
            type="text"
            name="name"
            :value="name"
            @input=" e => { changeName(e.target.value); }"
          />
          <p v-if="feedBack" class="red-text">{{ feedBack }}</p>
          <button class="btn teal" @click="enterChat">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("chat", ["changeName", "changeFeedBack"]),
    // other methods
    enterChat() {
      if (this.name) {
        this.changeFeedBack(null);
        this.$router.push({
          name: "Chat"
        });
      } else {
        this.changeFeedBack("You Must Enter A Chat Name");
      }
    }
  },
  computed: {
    ...mapState("chat", ["name", "feedBack"])
    // ...mapGetters("chat", ["getName"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin: 30px;
}
</style>
