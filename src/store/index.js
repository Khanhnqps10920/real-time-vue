import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export const store = new Store({
  modules: {
    chat: {
      namespaced: true,
      // state
      state: () => ({
        name: null,
        feedBack: null
      }),
      // getters
      getters: {
        // getName: state => {
        //   return state.name;
        // }
      },
      // mutations
      mutations: {
        changeName: (state, payload) => {
          state.name = payload;
        },
        changeFeedBack: (state, payload) => {
          state.feedBack = payload;
        }
      },
      // actions
      actions: {
        changeName: ({ commit }, payload) => {
          commit("changeName", payload);
        },
        changeFeedBack: ({ commit }, payload) => {
          commit("changeFeedBack", payload);
        }
      }
    }
  }
});