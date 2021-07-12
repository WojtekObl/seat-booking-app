export const fetchSeatsStatus = async () => {
  const response = await fetch("http://localhost:3000/seats/");

  const seats = await response.json();

  return seats;
};
