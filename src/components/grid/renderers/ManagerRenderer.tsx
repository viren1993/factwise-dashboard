import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";

const ManagerRenderer: React.FC<CustomCellRendererProps<Employee, string | null>> = ({ value }) => {
  return value ? (
    <span className="text-xs text-gray-700">{value}</span>
  ) : (
    <span className="text-xs text-gray-300 italic">No manager</span>
  );
};

export default ManagerRenderer;
