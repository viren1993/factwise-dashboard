import React from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { Employee } from "../../../types/employee";

const SkillsRenderer: React.FC<CustomCellRendererProps<Employee, string[]>> = ({ value }) => {
  if (!value?.length) return null;

  return (
    <div className="flex items-center gap-1 flex-wrap h-full py-1">
      {value.map((skill) => (
        <span
          key={skill}
          className="bg-gray-100 border border-gray-200 rounded text-[10px] px-1.5 py-0.5 text-gray-600 whitespace-nowrap leading-tight"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsRenderer;
