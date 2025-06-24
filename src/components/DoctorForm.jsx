import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const doctorSchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  specialty: Yup.string().required("Please enter specialty"),
  location: Yup.string().required("Please enter locatione"),
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Phone number should be '123-456-7890' format"
    )
    .required("Please enter phone number"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter email address"),
  rating: Yup.number().min(1).max(5).required("Please enter rating"),
});

export const DoctorForm = ({ onAdd, onClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      specialty: "",
      location: "",
      phone: "",
      email: "",
      rating: "",
    },
    validationSchema: doctorSchema,
    onSubmit: (values, { resetForm }) => {
      onAdd({ id: Date.now(), ...values });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-2">
      {["name", "specialty", "location", "phone", "email", "rating"].map(
        (field) => (
          <div key={field}>
            <input
              name={field}
              onChange={formik.handleChange}
              value={formik.values[field]}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="border px-2 py-1 w-full"
            />
            {formik.errors[field] && (
              <p className="text-red-500 text-sm">{formik.errors[field]}</p>
            )}
          </div>
        )
      )}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Doctor
      </button>
      <button
        type="button"
        onClick={() => onClose()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        style={{ float: "right" }}
      >
        Close
      </button>
    </form>
  );
};

DoctorForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
