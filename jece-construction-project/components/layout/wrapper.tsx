import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type DivProps = React.ComponentPropsWithoutRef<"div">;

interface WrapperProps extends DivProps {}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
      </div>
    );
  }
);

export default Wrapper;
