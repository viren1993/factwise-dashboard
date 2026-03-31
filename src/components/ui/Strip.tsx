import React from "react";
import Card from "./Card";
import { DashboardData } from "../../types/employee";
import { formatSalary } from "../../utils/formatters";

interface StripProps {
  empData: DashboardData;
}

const Strip: React.FC<StripProps> = ({ empData }) => (
  <div className="bg-white border-b border-gray-200 px-8 flex flex-wrap">
    <Card
      label="Total Employees"
      value={empData.total}
      sub={`${empData.active} active`}
    />
    <Card
      label="Avg. Salary"
      value={formatSalary(empData.avgSalary)}
      sub="across all roles"
    />
    <Card label="Avg. Performance" value={empData.avgRating} sub="out of 5.0" />
    <Card label="Departments" value={empData.depts} sub="unique teams" />
    <Card
      label="Projects Delivered"
      value={empData.projects}
      sub="total completed"
    />
  </div>
);

export default Strip;
