import doctors from "../data/doctors.json";
export const fetchDoctors = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(doctors), 1000);
  });
};
