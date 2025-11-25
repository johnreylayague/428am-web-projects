import React from "react";
import { cn } from "@/lib/utils";

type Align = "left" | "center" | "right";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
  align?: Align;
}

const alignments: Record<Align, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  className,
  align = "center",
}) => {
  return (
    <React.Fragment>
      <div
        className={cn(
          {
            "text-center": align === "center",
            "text-right": align === "right",
            "text-left": align === "left",
          },
          "mb-9",
          className
        )}
      >
        <div
          className={cn("text-[14px] font-bold mb-4 uppercase text-app-brown")}
        >
          {label}
        </div>
        <h3 className={cn("text-[28px] font-bold uppercase mb-6")}>{title}</h3>
        <hr
          className={cn(alignments[align], "w-full max-w-14 h-1 bg-app-brown")}
        />
      </div>
    </React.Fragment>
  );
};

export default SectionHeader;
