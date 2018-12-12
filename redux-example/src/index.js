import { createStore } from "redux";

function playlist(state = []) {
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log("subscribe", store.getState());
});

store.dispatch({ type: "ADD_TRACK", payload: "Rap God" });
