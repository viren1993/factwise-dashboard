import React from "react";

type StatusFilter = "All" | "Active" | "Inactive";

interface ToolbarProps {
  quickFilter: string;
  onQuickFilterChange: (value: string) => void;
  deptFilter: string;
  onDeptFilterChange: (value: string) => void;
  departments: string[];
  statusFilter: StatusFilter;
  onStatusFilterChange: (value: StatusFilter) => void;
  onExport: () => void;
}

const STATUS_OPTIONS: StatusFilter[] = ["All", "Active", "Inactive"];

const SearchIcon: React.FC = () => (
  <svg
    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const DownloadIcon: React.FC = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Toolbar: React.FC<ToolbarProps> = ({
  quickFilter,
  onQuickFilterChange,
  deptFilter,
  onDeptFilterChange,
  departments,
  statusFilter,
  onStatusFilterChange,
  onExport,
}) => {
  const selectClass =
    "py-2 px-3 text-sm border border-gray-200 rounded-md bg-white text-gray-800 outline-none focus:border-orange-500 cursor-pointer transition-colors";

  return (
    <div className="flex items-center gap-3 px-8 py-4 bg-[#f7f4ef] flex-wrap">
      <div className="relative flex-1 max-w-xs">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search employees…"
          value={quickFilter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onQuickFilterChange(e.target.value)
          }
          className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-md bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-orange-500 transition-colors"
        />
      </div>
      <select
        value={deptFilter}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onDeptFilterChange(e.target.value)
        }
        className={selectClass}
      >
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <select
        value={statusFilter}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onStatusFilterChange(e.target.value as StatusFilter)
        }
        className={selectClass}
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <div className="flex-1" />
      <button
        onClick={onExport}
        className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1814] text-white text-xs font-medium rounded-md hover:bg-[#3d3a34] transition-colors"
      >
        <DownloadIcon />
        Export CSV
      </button>
    </div>
  );
};

export default Toolbar;
