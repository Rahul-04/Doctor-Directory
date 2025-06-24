export const exportToCSV = (doctors) => {
  const rows = [
    ["Name", "Specialty", "Location", "Rating"],
    ...doctors.map((d) => [d.name, d.specialty, d.location, d.rating]),
  ];
  const csvContent = rows.map((e) => e.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", "doctors_report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
