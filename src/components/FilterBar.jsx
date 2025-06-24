import PropTypes from "prop-types";

export const FilterBar = ({
  specialty,
  location,
  setSpecialty,
  setLocation,
}) => (
  <div className="flex gap-2">
    <select
      value={specialty}
      onChange={(e) => setSpecialty(e.target.value)}
      className="border p-2"
    >
      <option value="">All Specialties</option>
      <option value="Cardiology">Cardiology</option>
      <option value="Neurology">Neurology</option>
    </select>
    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="border p-2"
    >
      <option value="">All Locations</option>
      <option value="New York">New York</option>
      <option value="Los Angeles">Los Angeles</option>
    </select>
  </div>
);

FilterBar.propTypes = {
  specialty: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  setSpecialty: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
};
