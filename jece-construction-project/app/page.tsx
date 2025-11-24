import React from "react";
import Banner from "@/components/ui/app/banner";
import OurGoal from "@/components/ui/app/our-goal";
import OurServices from "@/components/ui/app/our-services";
import WhyChooseUs from "@/components/ui/app/why-choose-us";
import CTAContactUs from "@/components/ui/app/cta-contact-us";
import GetInTouch from "@/components/ui/app/get-in-touch";
import OurProjects from "@/components/ui/app/our-projects";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Banner />
      <OurGoal />
      <OurServices />
      <WhyChooseUs />
      <CTAContactUs />
      <OurProjects />
      <GetInTouch />
    </React.Fragment>
  );
};

export default HomePage;
