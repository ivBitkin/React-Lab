const initialState = ["Homelist", "Worklist"];

export default function playlist(state = initialState, action) {
  if (action.type === "ADD_PLAYLIST") {
    return state;
  } else if (action.type === "DELETE_PLAYLIST") {
    return state;
  }

  return state;
}
