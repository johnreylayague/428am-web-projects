import LineDecorator from "@/components/ui/app/line-decorator";
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative pl-11 mb-4 uppercase text-base font-bold",
        "text-app-brown",
        className
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-2 w-7 h-2",
          "before:content-[''] before:absolute before:left-0 before:top-0 before:w-6 before:h-0.5 before:bg-app-dark",
          "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-app-dark"
        )}
      />
      {children}
    </div>
  );
};

export default SectionHeader;
