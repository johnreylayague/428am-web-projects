import React from "react";
import { cn } from "@/lib/utils";

export interface AddressProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

const Address = React.forwardRef<HTMLElement, AddressProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <address className={cn("not-italic", className)} ref={ref} {...props}>
        {children}
      </address>
    );
  }
);

export default Address;
