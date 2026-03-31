import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";

const MAX_PROJECTS = 25;
const TOTAL_DOTS = 10;

const ProjectsRenderer: React.FC<CustomCellRendererProps<Employee, number>> = ({
  value,
}) => {
  if (value === undefined || value === null) return null;
  const filled = Math.round((value / MAX_PROJECTS) * TOTAL_DOTS);

  return (
    <div className="flex gap-2 items-center h-full  min-h-[44px]">
      <span className="text-sm font-semibold text-gray-800 w-5 text-right tabular-nums">
        {value}
      </span>
      <div className="flex gap-0.5">
        {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-sm"
            style={{ background: i < filled ? "#2563a8" : "#e4dfd8" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsRenderer;
