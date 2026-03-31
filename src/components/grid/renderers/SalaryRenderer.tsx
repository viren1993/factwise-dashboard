import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";
import { formatSalary } from "../../../utils/formatters";

const SalaryRenderer: React.FC<CustomCellRendererProps<Employee, number>> = ({ value }) => {
  if (value === undefined || value === null) return null;

  return (
    <span className="font-serif text-sm font-medium text-gray-800">
      {formatSalary(value)}
    </span>
  );
};

export default SalaryRenderer;
