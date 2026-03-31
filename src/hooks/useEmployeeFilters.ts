import { useState, useMemo } from "react";
import { Employee } from "../types/employee";

type StatusFilter = "All" | "Active" | "Inactive";

interface UseEmployeeFiltersReturn {
  quickFilter: string;
  setQuickFilter: (v: string) => void;
  deptFilter: string;
  setDeptFilter: (v: string) => void;
  statusFilter: StatusFilter;
  setStatusFilter: (v: StatusFilter) => void;
  departments: string[];
  filteredData: Employee[];
}

export function useEmployeeFilters(data: Employee[]): UseEmployeeFiltersReturn {
  const [quickFilter, setQuickFilter] = useState<string>("");
  const [deptFilter, setDeptFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const departments = useMemo<string[]>(
    () => ["All", ...Array.from(new Set(data.map((e) => e.department)))],
    [data],
  );

  const filteredData = useMemo<Employee[]>(() => {
    return data.filter((e) => {
      const deptOk = deptFilter === "All" || e.department === deptFilter;
      const statusOk =
        statusFilter === "All" ||
        (statusFilter === "Active" && e.isActive) ||
        (statusFilter === "Inactive" && !e.isActive);
      return deptOk && statusOk;
    });
  }, [data, deptFilter, statusFilter]);

  return {
    quickFilter,
    setQuickFilter,
    deptFilter,
    setDeptFilter,
    statusFilter,
    setStatusFilter,
    departments,
    filteredData,
  };
}
