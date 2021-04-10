export default {
  movesCount(context) {
    context.commit("increaseMove");
  },
  resetMoves(context) {
    context.commit("movesReset");
  },
  resetWin(context, payload) {
    context.commit("udateWin", payload);
  },
  updateMaximumMoves(context, payload) {
    context.commit("updateMaxMoves", payload);
  },
  updateFoodNumber(context, payload) {
    context.commit("updateNumberOfFood", payload);
  },
  messageUpdate(context, payload) {
    context.commit("updateMessage", payload);
  },
  timeSpentUpdate(context, payload) {
    context.commit("updateTimeSpent", payload);
  },
  endMovesUpdate(context, payload) {
    context.commit("updateEndMoves", payload);
  },
  foodEatenIncrease(context) {
    context.commit("increaseFoodEaten");
  },
  foodEatenReset(context) {
    context.commit("resetFoodEaten");
  },
  startButtonTextUpdate(context, payload) {
    context.commit("updateStartButtonText", payload);
  },
  winUpdate(context, payload) {
    context.commit("updateWin", payload);
  },
};
