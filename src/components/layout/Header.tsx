import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#1a1814] flex items-center justify-between px-8 h-16 border-b-[3px] border-orange-600 shrink-0">
      <div className="flex items-center gap-3">
        <span className="font-serif text-xl text-white tracking-tight">
          FactWise
        </span>
        <div className="w-px h-5 bg-white/20" />
        <span className="text-[11px] font-medium uppercase tracking-[2px] text-white/50">
          People Intelligence
        </span>
      </div>
    </header>
  );
};

export default Header;
