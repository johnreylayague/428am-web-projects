import { cn } from "@/lib/utils";
import React from "react";

type WrapperType = "div" | "section";

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  type?: WrapperType;
  children?: React.ReactNode;
  className?: string;
}

const Wrapper = React.forwardRef<HTMLElement, WrapperProps>(
  ({ type = "div", children, className, ...props }, ref) => {
    if (type === "div") {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      );
    } else if (type === "section") {
      return (
        <section
          ref={ref as React.Ref<HTMLElement>}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </section>
      );
    } else {
      // Shouldn't happen, fallback
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      );
    }
  }
);

export default Wrapper;
