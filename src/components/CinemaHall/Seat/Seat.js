import React from "react";
import { markSeat } from "../../../actions";
import { useDispatch } from "react-redux";
import "./Seat.css";

function Seat({ seat }) {
  const dispatch = useDispatch();


  return (
    <button
      onClick={() => dispatch(markSeat(seat))}
      className="seat"
      style={{
        color: `${seat.reserved ? "#8b0000" : "black"}`,
        backgroundColor: `${
          seat.marked ? "orange" : seat.reserved ? "darkgray" : "white"
        }`,
        gridColumn: ` ${seat.cords.y + 1} / span 1`,
        gridRow: ` ${seat.cords.x + 1} / span 1`,
        cursor: `${seat.reserved ? "normal" : "pointer"}`,
      }}
      disabled={seat.reserved}
    >
      {seat.id}
    </button>
  );
}

export default Seat;
