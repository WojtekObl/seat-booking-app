import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CinemaHall.css";
import { setSeatsStatus } from "../../actions";

function ProposeSeats() {
  const dispatch = useDispatch();
  const nextTo = useSelector((state) => state.nextTo);
  const seatsDemand = useSelector((state) => state.seatsDemand);
  const freeSeats = useSelector((state) => state.freeSeats);
  const seats = useSelector((state) => state.seatsStatus);
  const seatList = [...seats];
  
    if (freeSeats?.length < seatsDemand) {
      console.log("Nie wystarczająca ilość wolnych miejsc");
    } else if (nextTo === false) {
      console.log("next TO = false");
      const seatsProposition = freeSeats.slice(0, seatsDemand);
      seatsProposition.map((proposition) => {
        const indexToMark = seatList.findIndex(
          (seat) => seat.id == proposition.id
        );
        seatList[indexToMark].proposed = true;
      });
    } else {
      const findSeatsInRow = () => {
        const array2 = [...freeSeats];
        const amount = seatsDemand;
        console.log("amount", amount);
        const firstSeatToMark = array2.find((seat, index) => {
          return (
            seat.cords.y === array2[index + amount - 1].cords.y - (amount - 1)
          );
        });
        if (firstSeatToMark) {
          const firstSeatIndex = array2.findIndex(
            (seat2) => seat2.id === firstSeatToMark.id
          );
          const seatsInRow = array2.slice(
            firstSeatIndex,
            firstSeatIndex + amount
          );
          console.log("seats in row", seatsInRow);
          return seatsInRow;
        } else return alert("Nie ma tylu miejsc obok siebie");
      };
      const seatsProposition = findSeatsInRow();
      seatsProposition.map((proposition) => {
        const indexToMark = seatList.findIndex(
          (seat) => seat.id == proposition.id
        );
        seatList[indexToMark].proposed = true;
      });
    }

    dispatch(setSeatsStatus(seatList));

}

export default ProposeSeats;
