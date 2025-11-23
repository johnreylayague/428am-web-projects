import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(function Wrapper(
  { children, className, ...props },
  ref
) {
  return (
    <div {...props} ref={ref} className={cn("relative", className)}>
      {children}
    </div>
  );
});

export default Wrapper;
