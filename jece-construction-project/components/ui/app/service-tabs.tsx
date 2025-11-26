"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

// Define your own categories array
const TABS = [
  "ALL PROJECTS",
  "BUILDING",
  "CONSTRUCTION",
  "INDUSTRIAL",
  "ARCHITECTURE",
];

const ServiceTabs: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <React.Fragment>
      <ul className="flex flex-row gap-4 my-8 mx-auto justify-center">
        {TABS.map((tab, idx) => (
          <li key={idx}>
            <button
              type="button"
              className={cn(
                "px-[30px] py-[8px] uppercase cursor-pointer font-bold text-base border-2 border-transparent transition-colors duration-150 hover:text-app-brown",
                selectedIdx === idx ? "text-app-brown" : "text-app-dark"
              )}
              onClick={() => setSelectedIdx(idx)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ServiceTabs;
