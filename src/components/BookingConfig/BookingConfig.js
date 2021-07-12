import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useSelector, useDispatch } from "react-redux";
import { toogleNextTo } from "../../actions";
import { setDemand } from "../../actions";
import { setSeatsStatus } from "../../actions";
import { setFreeSeats } from "../../actions";
import { setStage } from "../../actions";

import { fetchSeatsStatus } from "../../api/fetchSeatsStatus";

import "./BookingConfig.css";

function BookingConfig() {
  const [seatsError, setSeatsError] = useState({ error: false, message: "" });
  const nextTo = useSelector((state) => state.nextTo.nextTo);
  const seatsDemand = useSelector((state) => state.seatsDemand);
  const dispatch = useDispatch();

  const handleOnSubmit = async () => {
    setSeatsError({ error: false, message: "" });

    const bookingData = await fetchSeatsStatus();
    const freeSeats = bookingData.filter((seat) => !seat.reserved);
    dispatch(setSeatsStatus(bookingData));
    dispatch(setFreeSeats(freeSeats));

    if (!seatsDemand) {
      setSeatsError({ error: true, message: "Musisz podać liczbę miejsc" });
    } else if (seatsDemand > freeSeats.length) {
      setSeatsError({
        error: true,
        message: `Pozostało tylko ${freeSeats.length} wolnych miejsc.`,
      });
    } else {
      dispatch(setStage(2));
    }
  };

  return (
    <div className="booking-config">
      <h1 className="booking-config__header">Wybierz ilość miejsc</h1>

      <TextField
        value={seatsDemand}
        onChange={(event) => dispatch(setDemand(event.target.valueAsNumber))}
        error={seatsError.error}
        helperText={seatsError.error ? seatsError.message : ""}
        margin="dense"
        variant="outlined"
        type="number"
        label="Liczba miejsc"
        required={true}
      ></TextField>
      <FormControlLabel
        control={
          <Checkbox
            checked={nextTo}
            onChange={() => dispatch(toogleNextTo())}
            name="seatsNextTo"
            color="primary"
          />
        }
        label="Czy miejsca mają być obok siebie?"
      />
      <Button
        className="booking-config__button"
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => handleOnSubmit()}
        disabled={!seatsDemand}
      >
        Wybierz miejsca
      </Button>
    </div>
  );
}

export default BookingConfig;
