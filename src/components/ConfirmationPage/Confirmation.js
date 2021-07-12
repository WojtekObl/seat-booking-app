import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { setStage } from "../../actions";

import "./Confirmation.css";

function Confirmation() {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation);

  return (
    <div className="confirmation">
      <h1 className="confirmation__header">
        Twoja rezerwacja przebiegła pomyślnie!
      </h1>
      <h3>Wybrałeś miejsca:</h3>
      <ul className="confirmation__list">
        {reservation.map((seat) => {
          return (
            <li key={seat.id}>
              <strong>{seat.id} </strong> rząd {seat.cords.x} miejsce{" "}
              {seat.cords.y}
            </li>
          );
        })}
      </ul>
      <h2 className="confirmation__msg">
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </h2>
      <Button
        onClick={() => dispatch(setStage(1))}
        variant="contained"
        color="primary"
        size="large"
      >
        Kolejna rezerwacja
      </Button>
    </div>
  );
}

export default Confirmation;
