import React from "react";
import Banner from "@/components/ui/app/banner";
import OurGoal from "@/components/ui/app/our-goal";
import OurServices from "@/components/ui/app/our-services";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Banner />
      <OurGoal />
      <OurServices />
    </React.Fragment> 
  );
};

export default HomePage;
