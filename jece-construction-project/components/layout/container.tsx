import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  noWrap?: boolean;
  maxWidth?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth,
  ref,
  noWrap = false,
  ...props
}) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "w-full mx-auto relative",
        noWrap ? "" : "container",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
