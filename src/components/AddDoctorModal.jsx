// src/components/AddDoctorModal.jsx
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import PropTypes from "prop-types";
import { DoctorForm } from "./DoctorForm";

export const AddDoctorModal = ({ isOpen, onClose, onAdd }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      //   static
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <DialogPanel className="bg-white p-6 rounded shadow-xl w-full max-w-md">
          <DialogTitle className="text-xl font-bold mb-4">
            Add New Doctor
          </DialogTitle>
          <DoctorForm
            onAdd={(doctor) => {
              onAdd(doctor); // close modal after submission
            }}
            onClose={() => onClose()}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

AddDoctorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
