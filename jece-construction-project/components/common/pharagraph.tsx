import React from "react";
import { cn } from "@/lib/utils";

interface PharagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Pharagraph: React.FC<PharagraphProps> = ({ children, className }) => {
  return (
    <p className={cn("text-base", "text-app-gray", className)}>{children}</p>
  );
};

export default Pharagraph;
