import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import CTALink from "@/components/ui/app/cta-link";
import React from "react";

interface CTAContactUsProps {}

const CTAContactUs: React.FC<CTAContactUsProps> = () => {
  return (
    <Wrapper className="bg-app-brown">
      <Container className="flex items-center justify-between px-8 py-9">
        <h4 className="text-white text-3xl font-extrabold capitalize">
          We can help you with your sales training &amp; sales effectiveness
          initiatives!
        </h4>
        <CTALink
          href="/"
          className="bg-transparent border-2 py-3.5 px-9.5 text-base font-semibold"
        >
          Contact Us
        </CTALink>
      </Container>
    </Wrapper>
  );
};

export default CTAContactUs;
