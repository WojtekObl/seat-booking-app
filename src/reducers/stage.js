const stageReducer = (state = 1, action) => {
  switch (action.type) {
    case "SET_STAGE":
      return action.payload;
    default: 
      return state;
  }
};

export default stageReducer;
