import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";
import { getRatingColor } from "../../../utils/departmentConfig";

const RatingRenderer: React.FC<CustomCellRendererProps<Employee, number>> = ({
  value,
}) => {
  if (value === undefined || value === null) return null;
  const color = getRatingColor(value);
  const pct = `${((value / 5) * 100).toFixed(0)}%`;

  return (
    <div className="flex gap-2 items-center h-full min-h-[44px]">
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: pct, background: color }}
        />
      </div>
      <span
        className="text-xs font-semibold min-w-[26px] text-right"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  );
};

export default RatingRenderer;
