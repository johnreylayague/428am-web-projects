import React from "react";
import { cn } from "@/lib/utils";

export interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  disablePaddingX?: boolean;
  ref?: React.RefObject<HTMLElement | null>;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  disablePaddingX = false,
  ref,
  ...props
}) => {
  return (
    <section
      {...props}
      ref={ref}
      className={cn("relative", !disablePaddingX && "px-4", className)}
    >
      {children}
    </section>
  );
};

export default Wrapper;
