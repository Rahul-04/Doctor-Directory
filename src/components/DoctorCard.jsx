import React from "react";
import PropTypes from "prop-types";

export const DoctorCard = ({ doctor, onClick }) => (
  <div
    className="border p-4 rounded shadow cursor-pointer"
    onClick={() => onClick(doctor)}
  >
    <h3 className="text-lg font-semibold">{doctor.name}</h3>
    <p>
      {doctor.specialty} - {doctor.location}
    </p>
    <p>Rating: {doctor.rating}</p>
  </div>
);

// ✅ PropTypes declaration
DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
