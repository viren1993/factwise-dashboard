import React from "react";

interface CardProps {
  label: string;
  value: string | number;
  sub?: string;
}

const Card: React.FC<CardProps> = ({ label, value, sub }) => (
  <div className="py-4 pr-8 mr-8 border-r border-gray-200 last:border-r-0 last:mr-0 min-w-[130px]">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
      {label}
    </p>
    <p className="font-serif text-3xl text-gray-900 leading-none">{value}</p>
    {sub && <p className="text-[11px] text-gray-400 mt-1">{sub}</p>}
  </div>
);

export default Card;
