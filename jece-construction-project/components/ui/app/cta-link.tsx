import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import React from "react";

type ButtonType = "button" | "submit" | "reset";

interface CTALinkProps {
  children: React.ReactNode;
  id: string;
  name: string;
  type?: ButtonType;
  className?: string;
}

const CTALink: React.FC<CTALinkProps> = ({
  children,
  id,
  name,
  type = "button",
  className,
}) => {
  return (
    <Button
      id={id}
      name={name}
      type={type}
      className={cn(
        "text-lg font-semibold cursor-pointer rounded-none min-h-15",
        "bg-app-brown hover:bg-app-blue",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CTALink;
