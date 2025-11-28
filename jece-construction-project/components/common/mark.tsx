import { cn } from "@/lib/utils";
import React from "react";

interface MarkProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const Mark: React.FC<MarkProps> = ({
  children,
  className = "",
  highlight = true,
  ...props
}) => {
  return (
    <mark
      className={cn(
        "bg-transparent",
        highlight ? "font-bold text-app-blue" : "",
        className
      )}
      {...props}
    >
      {children}
    </mark>
  );
};

export default Mark;
