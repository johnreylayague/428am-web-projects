import Container from "@/components/layout/container";
import Wrapper from "@/components/layout/wrapper";
import CTALink from "@/components/common/cta-link";
import React from "react";

interface CTAContactUsProps {}

const CTAContactUs: React.FC<CTAContactUsProps> = () => {
  return (
    <Wrapper className="bg-app-brown">
      <Container className="flex items-center justify-between px-8 py-9 gap-10">
        <h4 className="text-white text-3xl font-extrabold capitalize">
          We can help you bring your construction projects to life with expert
          planning and execution!
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
