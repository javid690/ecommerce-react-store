import React from "react";
import "./Map.css";

const Maps = () => {
  return (
    <div className="map-container">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.123456789!2d71.580024!3d34.015136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d925c567890123%3A0xabcdef1234567890!2sPeshawar%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
