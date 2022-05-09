export const initialState = {
  isPlaying: "",
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "PLAYING":
      return {
        ...state,
        isPlaying: true,
      };
    case "GAME_OVER":
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
}
