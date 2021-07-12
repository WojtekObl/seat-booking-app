import React from "react";
import CinemaHall from "./components/CinemaHall/CinemaHall";
import Confirmation from "./components/ConfirmationPage/Confirmation";
import "./App.css";
import BookingConfig from "./components/BookingConfig/BookingConfig.js";
import { useSelector } from "react-redux";

function App() {
  const stage = useSelector((state) => state.stage);
  return (
    <div className="app">
      {stage === 1 ? (
        <BookingConfig />
      ) : stage === 2 ? (
        <CinemaHall />
      ) : (
        <Confirmation />
      )}
    </div>
  );
}

export default App;
