import { useMemo } from "react";
import { Employee, DashboardData } from "../types/employee";

export function useDashboard(rows: Employee[]): DashboardData {
  return useMemo<DashboardData>(() => {
    if (!rows.length) {
      return {
        total: 0,
        active: 0,
        avgSalary: 0,
        avgRating: "0.00",
        depts: 0,
        projects: 0,
      };
    }
    const active = rows.filter((r) => r.isActive).length;
    const avgSalary = rows.reduce((acc, r) => acc + r.salary, 0) / rows.length;
    const avgRating = (
      rows.reduce((acc, r) => acc + r.performanceRating, 0) / rows.length
    ).toFixed(2);
    const depts = new Set(rows.map((r) => r.department)).size;
    const projects = rows.reduce((acc, r) => acc + r.projectsCompleted, 0);

    return {
      total: rows.length,
      active,
      avgSalary,
      avgRating,
      depts,
      projects,
    };
  }, [rows]);
}
