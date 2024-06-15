import { throwError } from "../../helpers/throw-error";

async function bookFlightAwait() {
  try {
    const response = await fetch("https://api.example.com/bookFlight");
    const data = await response.json();
    return "Flight booked: " + data.flightNumber;
  } catch (error) {
    throwError(error, "Error booking flight");
  }
}

async function bookHotelAwait() {
  try {
    const response = await fetch("https://api.example.com/bookHotel");
    const data = await response.json();
    return "Hotel booked: " + data.hotelName;
  } catch (error) {
    throwError(error, "Error booking hotel");
  }
}

async function arrangeTransportAwait() {
  try {
    const response = await fetch("https://api.example.com/arrangeTransport");
    const data = await response.json();
    return "Transport arranged: " + data.transportType;
  } catch (error) {
    throwError(error, "Error arranging transport");
  }
}

export async function planVacationAwait() {
  try {
    const flight = await bookFlightAwait();
    const hotel = await bookHotelAwait();
    const transport = await arrangeTransportAwait();

    console.log("Vacation is fully planned!", flight, hotel, transport);
  } catch (error) {
    throwError(error, "Error planning vacation");
  }
}
