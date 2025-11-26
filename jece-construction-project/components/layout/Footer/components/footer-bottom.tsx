import React from "react";
import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterBottomProps {}

const FooterBottom: React.FC<FooterBottomProps> = () => {
  return (
    <Wrapper className={"bg-app-brown"}>
      <Container className={cn("h-15 flex items-center justify-between")}>
        <span className={cn("text-sm font-medium uppercase", "text-white")}>
          Copyright © 2025 All rights reserved.
        </span>

        <ul
          className={cn(
            "flex gap-6 ",
            "*:[&_a]text-base *:[&_a]:font-normal  *:[&_a]:hover:no-underline *:[&_a]:transition-colors *:[&_a]:duration-200 *:[&_a]:ease-in",
            "*:[&_a]:text-white *:[&_a]:hover:text-app-blue"
          )}
        >
          <li>
            <Link href="/terms-condition">Terms &amp; Condition</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy &amp; Policy</Link>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default FooterBottom;
