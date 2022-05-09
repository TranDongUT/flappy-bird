export const initialState = {
  status: "",
  posY: 200,
};

export default function birdReducer(state = initialState, action) {
  switch (action.type) {
    case "FLY":
      return {
        ...state,
        status: "fly",
        posY: state.posY - 50,
      };
    case "FALL":
      return {
        status: "fall",
        posY: state.posY + 20,
      };
    case "GAME_OVER":
      return initialState;
    default:
      return state;
  }
}
