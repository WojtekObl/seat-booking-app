const seatsDemandReducer = (state = 1, action) => {
  switch (action.type) {
    case "SET_DEMAND":
      return action.payload;
    default: 
      return state;
  }
};

export default seatsDemandReducer;
