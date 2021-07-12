import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { markSeat } from "../../actions";
import { setStage } from "../../actions";
import { setReservation } from "../../actions";
import { findSeatsInRow } from "./findSeatsInRow";
import Seat from "./Seat/Seat";

import "./CinemaHall.css";

function CinemaHall() {
  const [markedSeats, setMarkedSeats] = useState([]);
  const dispatch = useDispatch();
  const nextTo = useSelector((state) => state.nextTo);
  const seatsDemand = useSelector((state) => state.seatsDemand);
  const freeSeats = useSelector((state) => state.freeSeats);
  const seats = useSelector((state) => state.seatsStatus);

  useEffect(() => {
    markSeats();
  }, []);

  useEffect(() => {
    const markedSeats = seats.filter((seat) => seat.marked === true);
    setMarkedSeats(markedSeats);
  }, [seats]);

  const markSeats = () => {
    const freeSeatList = [...freeSeats];
    const amount = seatsDemand;
    let seatsToMark = [];

    if (freeSeats?.length < seatsDemand) {
      return alert("Nie wystarczającej ilość wolnych miejsc.");
    } else if (nextTo === false) {
      seatsToMark = freeSeatList.slice(0, amount);
    } else {
      seatsToMark = findSeatsInRow(freeSeatList, amount);
    }
    //mark seats in globl seatList
    seatsToMark.forEach((seatToMark) => {
      dispatch(markSeat(seatToMark))
    });
  };


  const handleBooking = () => {
    dispatch(setReservation(markedSeats));
    dispatch(setStage(3));
  };

  return (
    <div className="cinema-hall">
      <h1 className="cinama-hall__header">Wybierz miejsca na sali:</h1>

      <div className="cinema-hall__grid-containter">
        {seats.map((seat) => (
          <Seat seat={seat} key={seat.id} />
        ))}
      </div>

      <div className="cinema-hall__footer">
        <div className="cinema-hall__legend">
          <div className="legend-boxes">
            <div className="cinema-hall__legend-box avaible">nr</div>
            <p>Miejsce dostępne</p>
            <div className="cinema-hall__legend-box not-avaible">nr</div>
            <p>Miejsce zarezerwowane</p>
            <div className="cinema-hall__legend-box marked">nr</div>
            <p>Twój wybór</p>
          </div>
          <p className="cinema-hall__market-count">
            Wybrano {markedSeats.length}
          </p>
        </div>

        <div className="cinema-hall__buttons">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(setStage(1))}
          >
            Wstecz
          </Button>
          <Button
            onClick={() => handleBooking()}
            variant="contained"
            color="primary"
            size="large"
            disabled={!markedSeats.length}
          >
            REZERWUJ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CinemaHall;
