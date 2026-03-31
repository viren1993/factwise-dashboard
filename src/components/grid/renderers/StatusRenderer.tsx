import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";

const StatusRenderer: React.FC<CustomCellRendererProps<Employee, boolean>> = ({ value }) => {
  if (value === undefined || value === null) return null;

  return value ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
      Inactive
    </span>
  );
};

export default StatusRenderer;
