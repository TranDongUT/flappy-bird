const initialState = {
  posX: 300,
  pipes: [{ height: 200 }],
};

export default function pipeReducer(state = initialState, action) {
  switch (action.type) {
    case "RUNNING":
      return {
        ...state,
        posX: state.posX - 50,
      };
    case "RENDER_PIPE":
      //Math.floor(Math.random() * (max - min + 1)) + min;
      const height = Math.round(Math.random() * 200) + 40;
      return {
        ...state,
        pipes: [...state.pipes, { height: height }],
      };
    case "GAME_OVER":
      return initialState;
    default:
      return state;
  }
}
