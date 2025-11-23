import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

interface CTALinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const CTALink: React.FC<CTALinkProps> = ({ children, className, href }) => {
  return (
    <Button
      asChild
      className={cn(
        "text-lg font-semibold cursor-pointer rounded-none  min-h-15",
        "bg-app-brown hover:bg-app-blue",
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default CTALink;
