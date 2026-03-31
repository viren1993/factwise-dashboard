import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee, Department } from "../../../types/employee";
import { DEPT_CONFIG } from "../../../utils/departmentConfig";

const DeptRenderer: React.FC<CustomCellRendererProps<Employee, Department>> = ({ value }) => {
  if (!value) return null;
  const cfg = DEPT_CONFIG[value];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}
    >
      {value}
    </span>
  );
};

export default DeptRenderer;
