import seatsStatusReducer from "./seatsStatus";

test("Finding and marking seat", () => {
  const initialState = [
    {
      id: "s02",
      cords: {
        x: 0,
        y: 2,
      },
      reserved: true,
    },
    {
      id: "s03",
      cords: {
        x: 0,
        y: 3,
      },
      reserved: false,
    },
  ];

  const action = {
    type: "MARK_SEAT",
    payload: {
      id: "s03",
      cords: {
        x: 0,
        y: 3,
      },
      reserved: false,
    },
  };
  const result = seatsStatusReducer(initialState, action);
  expect(result[1].marked).toBe(true);
});
