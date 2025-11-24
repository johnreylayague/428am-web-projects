import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => {
  return (
    <React.Fragment>
      <div className="text-center mb-9">
        <div className="text-[14px] font-bold mb-4 uppercase text-app-brown">
          {label}
        </div>
        <h3 className="text-[28px] font-bold uppercase mb-6">{title}</h3>
        <hr className="mx-auto w-full max-w-14 h-1 bg-app-brown" />
      </div>
    </React.Fragment>
  );
};

export default SectionHeader;
