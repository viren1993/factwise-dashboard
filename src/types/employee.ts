export type Department =
  | "Engineering"
  | "Marketing"
  | "Sales"
  | "HR"
  | "Finance";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: Department;
  position: string;
  salary: number;
  hireDate: string;
  age: number;
  location: string;
  performanceRating: number;
  projectsCompleted: number;
  isActive: boolean;
  skills: string[];
  manager: string | null;
}

export interface DashboardData {
  total: number;
  active: number;
  avgSalary: number;
  avgRating: string;
  depts: number;
  projects: number;
}

export interface DeptStyle {
  bg: string;
  text: string;
  dot: string;
  avatarBg: string;
  avatarText: string;
  bar: string;
}
