import React from "react";
import { cn } from "@/lib/utils";

export interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLElement | null>;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  ref,
  ...props
}) => {
  return (
    <div {...props} ref={ref} className={cn("relative", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
