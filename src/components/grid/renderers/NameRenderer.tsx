import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";
import { DEPT_CONFIG } from "../../../utils/departmentConfig";
import { getInitials } from "../../../utils/formatters";

const NameRenderer: React.FC<CustomCellRendererProps<Employee>> = ({
  data,
}) => {
  if (!data) return null;
  const cfg = DEPT_CONFIG[data.department];

  return (
    <div className="flex items-center py-0.5 gap-2.5 h-full">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${cfg.avatarBg} ${cfg.avatarText}`}
      >
        {getInitials(data.firstName, data.lastName)}
      </div>
      <div className="leading-tight">
        <div className="text-sm font-medium text-gray-800">
          {data.firstName} {data.lastName}
        </div>
        <div className="text-xs text-gray-400">{data.email}</div>
      </div>
    </div>
  );
};

export default NameRenderer;
