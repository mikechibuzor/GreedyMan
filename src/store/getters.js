export default {
  getMoves(state) {
    return state.moves;
  },
  getMaxMoves(state) {
    return state.maxMoves;
  },
  getFoodEaten(state) {
    return state.foodEaten;
  },
  getNumberOfFood(state) {
    return state.numberOfFood;
  },
  getMessage(state) {
    return state.message;
  },
  getTimeSpent(state) {
    return state.timeSpent;
  },
  getEndMoves(state) {
    return state.endMoves;
  },
  getStartButtonText(state) {
    return state.startButtonText;
  },
  getWin(state) {
    return state.win;
  },
};
