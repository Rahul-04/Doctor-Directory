import React, { useEffect, useState } from "react";
import { fetchDoctors } from "../api/doctors";
import { DoctorCard } from "../components/DoctorCard";
import { DoctorModal } from "../components/DoctorModal";
import { AddDoctorModal } from "../components/AddDoctorModal";
import { SearchBar } from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";
import { exportToCSV } from "../utils/csvExporter";

const DoctorDirectory = () => {
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    fetchDoctors()
      .then(setDoctors)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let results = doctors;
    if (query)
      results = results.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    if (specialty) results = results.filter((d) => d.specialty === specialty);
    if (location) results = results.filter((d) => d.location === location);
    setFiltered(results);
  }, [query, specialty, location, doctors]);

  const handleAdd = (doctor) => setDoctors([doctor, ...doctors]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  const handleSelect = (doctor) => {
    console.log("Selected:", doctor); // debug
    setSelected(doctor);
  };

  console.log("selected: ", selected);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Doctor Directory</h1>
      <div style={{ padding: "0 0 10px 0" }}>
        <SearchBar value={query} onChange={setQuery} />
      </div>
      <FilterBar
        specialty={specialty}
        location={location}
        setSpecialty={setSpecialty}
        setLocation={setLocation}
      />
      <button
        onClick={() => exportToCSV(filtered)}
        className="my-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download Report
      </button>
      <div style={{ float: "right" }}>
        <button
          onClick={() => setIsAddOpen(true)}
          className="my-2 bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Doctor
        </button>
      </div>

      <AddDoctorModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAdd}
      />
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} onClick={handleSelect} />
        ))}
      </div>
      {selected && (
        <DoctorModal
          isOpen={true}
          doctor={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default DoctorDirectory;
