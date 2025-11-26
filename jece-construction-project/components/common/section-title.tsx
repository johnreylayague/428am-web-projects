import React from "react";
import { cn } from "@/lib/utils";

type SectionTitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SectionTitleProps {
  type?: SectionTitleTag;
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  type: Tag = "h1",
  children,
  className,
}) => {
  return (
    <Tag
      className={cn(
        "text-4xl font-bold capitalize font-montserrat mb-4",
        "text-app-dark",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SectionTitle;
