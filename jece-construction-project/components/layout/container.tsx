import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ref,
  ...props
}) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "w-full mx-auto px-[15px] relative max-w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
