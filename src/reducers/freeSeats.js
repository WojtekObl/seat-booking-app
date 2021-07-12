const freeSeatsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FREE_SEATS":
      return action.payload;
    default: 
      return state;
  }
};

export default freeSeatsReducer;