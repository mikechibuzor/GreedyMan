import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store = createStore({
  state() {
    return {
      moves: 0,
      maxMoves: 0,
      numberOfFood: 0,
      foodEaten: 0,
      startButtonText: "Start game",
      message: "Greedy Hunter",
      endMoves: `The aim is to eat all the food in record time`,
      timeSpent: `Configure your game grid below.`,
      win: false,
    };
  },
  getters,
  mutations,
  actions,
});

export default store;
