export default {
  movesReset(state) {
    return (state.moves = 0);
  },
  resetFoodEaten(state) {
    return (state.foodEaten = 0);
  },
  increaseMove(state) {
    return state.moves++;
  },
  increaseFoodEaten(state) {
    return state.foodEaten++;
  },
  updateMaxMoves(state, payload) {
    return (state.maxMoves = payload.value);
  },
  updateNumberOfFood(state, payload) {
    return (state.numberOfFood = payload.value);
  },
  updateMessage(state, payload) {
    return (state.message = payload.value);
  },
  updateTimeSpent(state, payload) {
    return (state.timeSpent = payload.value);
  },
  updateEndMoves(state, payload) {
    return (state.endMoves = payload.value);
  },
  updateStartButtonText(state, payload) {
    return (state.startButtonText = payload.value);
  },
  updateWin(state, payload) {
    return (state.win = payload.value);
  },
};
