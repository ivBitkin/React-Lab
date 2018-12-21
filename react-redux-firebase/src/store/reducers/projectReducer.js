const initState = {
  projects: [
    { id: "1", title: "Ivan Project", content: "test test test" },
    { id: "2", title: "Hans Project", content: "anothe test test" },
    { id: "3", title: "no name", content: "test anothe test" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
