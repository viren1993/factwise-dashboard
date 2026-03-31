import React from "react";

interface FooterProps {
  shown: number;
  total: number;
}

const Footer: React.FC<FooterProps> = ({ shown, total }) => (
  <footer className="bg-[#1a1814] text-white/30 text-center py-3 text-[11px] uppercase tracking-widest shrink-0">
    FactWise People Dashboard · {shown} of {total} records shown
  </footer>
);

export default Footer;
