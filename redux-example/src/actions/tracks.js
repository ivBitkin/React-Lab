var mockApiData = [
  {
    id: 1,
    name: "Rap God"
  },
  {
    id: 2,
    name: "Welcome Home"
  },
  {
    id: 3,
    name: "Hello"
  },
  {
    id: 4,
    name: "Stay with me"
  },
  {
    id: 5,
    name: "Dirt"
  }
];

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log("I got tracks !");
    dispatch({ type: "FETCH_TRACKS_SUCCESS", payload: mockApiData });
  }, 2000);
};
