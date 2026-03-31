import { ColDef, ValueGetterParams } from "ag-grid-community";
import { Employee } from "../types/employee";
import NameRenderer from "../components/grid/renderers/NameRenderer";
import DeptRenderer from "../components/grid/renderers/DeptRenderer";
import RatingRenderer from "../components/grid/renderers/RatingRenderer";
import SalaryRenderer from "../components/grid/renderers/SalaryRenderer";
import StatusRenderer from "../components/grid/renderers/StatusRenderer";
import SkillsRenderer from "../components/grid/renderers/SkillsRenderer";
import ProjectsRenderer from "../components/grid/renderers/ProjectsRenderer";
import TenureRenderer from "../components/grid/renderers/TenureRenderer";
import ManagerRenderer from "../components/grid/renderers/ManagerRenderer";

const columnDefs: ColDef<Employee>[] = [
  {
    headerName: "Employee",
    field: "firstName",
    cellRenderer: NameRenderer,
    valueGetter: (p: ValueGetterParams<Employee>) =>
      `${p.data?.firstName ?? ""} ${p.data?.lastName ?? ""}`,
    minWidth: 230,
    flex: 2,
    pinned: "left",
    sortable: true,
    filter: true,
    cellClass: "flex items-center",
  },
  {
    headerName: "Department",
    field: "department",
    cellRenderer: DeptRenderer,
    minWidth: 130,
    flex: 1,
    sortable: true,
    filter: true,
  },
  {
    headerName: "Position",
    field: "position",
    minWidth: 170,
    flex: 1.5,
    sortable: true,
    filter: true,
    cellClass: "text-xs text-gray-600",
  },
  {
    headerName: "Location",
    field: "location",
    minWidth: 120,
    flex: 1,
    sortable: true,
    filter: true,
    cellClass: "text-xs text-gray-400",
  },
  {
    headerName: "Salary",
    field: "salary",
    cellRenderer: SalaryRenderer,
    minWidth: 130,
    flex: 1,
    sortable: true,
    filter: "agNumberColumnFilter",
    type: "numericColumn",
  },
  {
    headerName: "Performance",
    field: "performanceRating",
    cellRenderer: RatingRenderer,
    minWidth: 160,
    flex: 1.2,
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Projects",
    field: "projectsCompleted",
    cellRenderer: ProjectsRenderer,
    minWidth: 130,
    flex: 1,
    sortable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Skills",
    field: "skills",
    cellRenderer: SkillsRenderer,
    minWidth: 220,
    flex: 2,
    sortable: false,
    filter: false,
  },
  {
    headerName: "Tenure",
    field: "hireDate",
    cellRenderer: TenureRenderer,
    minWidth: 90,
    flex: 0.8,
    sortable: true,
    filter: false,
  },
  {
    headerName: "Manager",
    field: "manager",
    cellRenderer: ManagerRenderer,
    minWidth: 150,
    flex: 1.2,
    sortable: true,
    filter: true,
  },
  {
    headerName: "Status",
    field: "isActive",
    cellRenderer: StatusRenderer,
    minWidth: 100,
    flex: 0.8,
    sortable: true,
    filter: true,
    filterValueGetter: (p: ValueGetterParams<Employee>) =>
      p.data?.isActive ? "Active" : "Inactive",
  },
];

export default columnDefs;
