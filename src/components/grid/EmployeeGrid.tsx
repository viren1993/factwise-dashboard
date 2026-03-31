import React, { useRef, useCallback, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { GridReadyEvent, GridApi } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Employee } from "../../types/employee";
import columnDefs from "../../config/columnDefs";

interface EmployeeGridProps {
  rowData: Employee[];
  quickFilterText: string;
  onGridReady?: (api: GridApi) => void;
}

const EmployeeGrid: React.FC<EmployeeGridProps> = ({
  rowData,
  quickFilterText,
  onGridReady,
}) => {
  const gridRef = useRef<AgGridReact<Employee>>(null);

  const defaultColDef = useMemo(
    () => ({ resizable: true, suppressMovable: false }),
    [],
  );

  const handleGridReady = useCallback(
    (e: GridReadyEvent<Employee>) => {
      onGridReady?.(e.api);
    },
    [onGridReady],
  );

  return (
    <div
      className="ag-theme-alpine w-full rounded-lg shadow-md border border-gray-200"
      style={{ height: 530 }}
    >
      <AgGridReact<Employee>
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        quickFilterText={quickFilterText}
        pagination
        paginationPageSize={10}
        animateRows
        rowSelection="multiple"
        enableCellTextSelection
        suppressRowClickSelection
        onGridReady={handleGridReady}
        rowHeight={46}
      />
    </div>
  );
};

export default EmployeeGrid;
