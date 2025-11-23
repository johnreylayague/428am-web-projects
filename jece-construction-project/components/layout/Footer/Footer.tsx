import FooterBottom from "@/components/layout/Footer/components/footer-bottom";
import FooterTop from "@/components/layout/Footer/components/footer-top";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <React.Fragment>
      <FooterTop />
      <FooterBottom />
    </React.Fragment>
  );
};

export default Footer;
