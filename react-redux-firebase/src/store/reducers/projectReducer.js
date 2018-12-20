const initState = {
  projects: [
    { id: "1", title: "Ivan Project", content: "test test test" },
    { id: "2", title: "Hans Project", content: "anothe test test" },
    { id: "3", title: "no name", content: "test anothe test" }
  ]
};

const projectReducer = (state = initState, actiom) => {
  return state;
};

export default projectReducer;
