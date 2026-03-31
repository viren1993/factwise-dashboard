import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";
import { formatTenure } from "../../../utils/formatters";

const TenureRenderer: React.FC<CustomCellRendererProps<Employee, string>> = ({ data }) => {
  if (!data) return null;

  return (
    <span className="text-xs text-gray-400 tabular-nums">
      {formatTenure(data.hireDate)}
    </span>
  );
};

export default TenureRenderer;
