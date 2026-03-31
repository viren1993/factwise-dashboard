import React, { useRef, useCallback } from "react";
import { GridApi } from "ag-grid-community";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Strip from "./components/ui/Strip";
import Toolbar from "./components/toolbar/Toolbar";
import EmployeeGrid from "./components/grid/EmployeeGrid";

import { employees } from "./data/employees";
import { useEmployeeFilters } from "./hooks/useEmployeeFilters";
import { useDashboard } from "./hooks/useDashboard";

const App: React.FC = () => {
  const gridApiRef = useRef<GridApi | null>(null);

  const {
    quickFilter,
    setQuickFilter,
    deptFilter,
    setDeptFilter,
    statusFilter,
    setStatusFilter,
    departments,
    filteredData,
  } = useEmployeeFilters(employees);

  const dashboardData = useDashboard(filteredData);

  const handleGridReady = useCallback((api: GridApi) => {
    gridApiRef.current = api;
  }, []);

  const handleExport = useCallback(() => {
    gridApiRef.current?.exportDataAsCsv({ fileName: "factwise-employees.csv" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ef] font-sans">
      <Header />
      <Strip empData={dashboardData} />
      <Toolbar
        quickFilter={quickFilter}
        onQuickFilterChange={setQuickFilter}
        deptFilter={deptFilter}
        onDeptFilterChange={setDeptFilter}
        departments={departments}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onExport={handleExport}
      />
      <main className="flex-1 px-8 py-5">
        <EmployeeGrid
          rowData={filteredData}
          quickFilterText={quickFilter}
          onGridReady={handleGridReady}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
