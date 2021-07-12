export const findSeatsInRow = (freeSeatList, amount) => {
  let seatsToMark =[]
  //find if there is a row of demand free seats, asign first seat of row
  const firstSeatToMark = freeSeatList.find((seat, index) => {
    return (
      seat.cords.y ===
      freeSeatList[index + amount - 1]?.cords.y - (amount - 1)
    );
  });

  //if not found, mark random seats
  if (firstSeatToMark === undefined) {
    seatsToMark = freeSeatList.slice(0, amount);
    alert("Nie ma tylu miejsc obok siebie, zaproponowano miejsca oddzielnie.");
  } else {
    //find first seat of row index in freeSeatList
    const firstSeatIndex = freeSeatList.findIndex(
      (freeSeat) => freeSeat.id === firstSeatToMark.id
    );
    //asign row of free seats for marking in  global store
    seatsToMark = freeSeatList.slice(
      firstSeatIndex,
      firstSeatIndex + amount
    );
  }
  return seatsToMark
};

