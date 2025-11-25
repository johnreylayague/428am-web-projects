import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type DivProps = React.ComponentPropsWithoutRef<"div">;

interface ContainerProps extends DivProps {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto px-[15px] relative max-w-[1200px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Container;
