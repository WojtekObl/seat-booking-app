const initialState = {
  nextTo: true
}

const nextToReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE_NEXT_TO":
      return {
        ...state, nextTo: !state.nextTo
      };
    default: 
      return state;
  }
};

export default nextToReducer;
