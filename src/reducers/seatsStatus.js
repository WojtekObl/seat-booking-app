const seatsStatusReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SEATS_STATUS":
      return action.payload;
    case "MARK_SEAT":
      return state.map((seat) => {
        if (seat.id === action.payload.id && seat.reserved === false) {
          seat?.marked ? (seat.marked = false) : (seat.marked = true);
        }
        return seat;
      });
    default:
      return state;
  }
};

export default seatsStatusReducer;
