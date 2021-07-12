export const toogleNextTo = () => {
  return {
    type: "TOOGLE_NEXT_TO",
  };
};
export const setDemand = (value) => {
  return {
    type: "SET_DEMAND",
    payload: value,
  };
};
export const setSeatsStatus = (array) => {
  return {
    type: "SET_SEATS_STATUS",
    payload: array,
  };
};
export const setFreeSeats = (array) => {
  return {
    type: "SET_FREE_SEATS",
    payload: array,
  };
};
export const setStage = (value) => {
  return {
    type: "SET_STAGE",
    payload: value,
  };
};
export const setReservation = (array) => {
  return {
    type: "SET_RESERVATION",
    payload: array,
  };
};
export const markSeat = (obj) => {
  return {
    type: "MARK_SEAT",
    payload: obj,
  };
};
