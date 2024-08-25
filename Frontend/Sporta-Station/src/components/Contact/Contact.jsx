import React from "react";
import "./contact.css";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

function Contact() {
  const mapContainerStyle = {
    position: "relative",
    width: "100%",
    height: "200px",
  };

  // Coordinates for Event Location
  const eventLocation = {
    lat: 28.637778,
    lng: 77.243056,
  };

  return (
    <div id="contact" className="container-contact">
      <div className="contact-one">
        <h1>Description</h1>
        <p>
          <i>
            "Welcome to Sporthaton, your premier
            destination for sports event management. With a passion for
            athletics and a commitment to excellence, we specialize in
            orchestrating unforgettable sports experiences for athletes,
            spectators, and communities alike."
          </i>
        </p>
      </div>
      <div className="contact-two">
        <h1>Contact us at:</h1>
        <p>Location: Delhi</p>
        <p>Email: sporthaton@email.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="contact-three">
        <LoadScript>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={eventLocation}
            zoom={15}
          >
            <Marker position={eventLocation} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Contact;
