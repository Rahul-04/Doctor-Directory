import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import PropTypes from "prop-types";

export const DoctorModal = ({ isOpen, onClose, doctor }) => {
  console.log("This is a modal"); // ✅ safe now

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      static
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <DialogPanel className="bg-white p-6 rounded shadow-xl">
          <DialogTitle className="text-xl font-bold">{doctor.name}</DialogTitle>
          <p>Specialty: {doctor.specialty}</p>
          <p>Location: {doctor.location}</p>
          <p>Phone: {doctor.phone}</p>
          <p>Email: {doctor.email}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

DoctorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
