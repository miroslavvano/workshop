//for visualization https://www.youtube.com/watch?v=Xs1EMmBLpn4&t=336s

export function bookFlight() {
  return new Promise((resolve, reject) => {
    fetch("https://api.example.com/bookFlight")
      .then((response) => response.json())
      .then((data) => resolve("Flight booked: " + data.flightNumber))
      .catch((err) => reject(err));
  });
}

export async function bookFlightSync() {
  return fetch("https://api.example.com/bookFlight")
    .then((response) => response.json())
    .then((data) => "Flight booked: " + data.flightNumber)
    .catch((err) => err);
}

export function bookHotel() {
  return new Promise((resolve, reject) => {
    fetch("https://api.example.com/bookHotel")
      .then((response) => response.json())
      .then((data) => resolve("Hotel booked: " + data.hotelName))
      .catch((err) => reject(err));
  });
}

export function arrangeTransport() {
  return new Promise((resolve, reject) => {
    fetch("https://api.example.com/arrangeTransport")
      .then((response) => response.json())
      .then((data) => resolve("Transport arranged: " + data.transportType))
      .catch((err) => reject(err));
  });
}

bookFlight()
  .then((result) => {
    console.log(result);
    return bookHotel();
  })
  .then((result) => {
    console.log(result);
    return arrangeTransport();
  })
  .then((result) => {
    console.log(result);
    console.log("Vacation is fully planned!");
  })
  .catch((error) => {
    console.error("Error planning vacation:", error);
  });
