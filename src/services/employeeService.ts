export const fetchEmployees = async () => {
  const res = await fetch("/api/employees.json");

  if (!res.ok) {
    throw new Error("Failed to fetch employees");
  }

  const data = await res.json();
  return data.employees;
};
