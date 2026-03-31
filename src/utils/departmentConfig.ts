import { Department, DeptStyle } from "../types/employee";

export const DEPT_CONFIG: Record<Department, DeptStyle> = {
  Engineering: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    dot: "bg-blue-500",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-700",
    bar: "#2563a8",
  },
  Marketing: {
    bg: "bg-purple-100",
    text: "text-purple-700",
    dot: "bg-purple-500",
    avatarBg: "bg-purple-100",
    avatarText: "text-purple-700",
    bar: "#7c3aaa",
  },
  Sales: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    dot: "bg-orange-500",
    avatarBg: "bg-orange-100",
    avatarText: "text-orange-700",
    bar: "#c05c2e",
  },
  HR: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    avatarBg: "bg-emerald-100",
    avatarText: "text-emerald-700",
    bar: "#1a8a5a",
  },
  Finance: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-500",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-700",
    bar: "#b5860a",
  },
};

export const getRatingColor = (rating: number): string => {
  if (rating >= 4.5) return "#1a8a5a";
  if (rating >= 4.0) return "#2563a8";
  if (rating >= 3.5) return "#b5860a";
  return "#c05c2e";
};
