import React from "react";
import { cn } from "@/lib/utils";

type SubSectionTitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SubSectionTitleProps {
  type?: SubSectionTitleTag;
  children: React.ReactNode;
  className?: string;
}

const SubSectionTitle: React.FC<SubSectionTitleProps> = ({
  type: Tag = "h1",
  children,
  className,
}) => {
  return (
    <Tag
      className={cn(
        "text-2xl font-bold font-montserrat mb-5.5",
        "text-app-dark",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SubSectionTitle;
