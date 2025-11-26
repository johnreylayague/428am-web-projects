import React from "react";
import Wrapper from "@/components/layout/wrapper";
import Container from "@/components/layout/container";
import banner_7 from "@/assets/banner/7.jpg";
import PageBanner from "@/components/ui/app/page-banner";
import Pharagraph from "@/components/common/pharagraph";
import SectionTitle from "@/components/common/section-title";
import SubSectionTitle from "@/components/common/sub-section-title";

const PrivacyPolicyPage = () => {
  return (
    <React.Fragment>
      <PageBanner
        bannerImg={banner_7.src}
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
      />
      <Wrapper className="pt-[110px] pb-[80px]">
        <Container>
          <SectionTitle type="h1" className="mb-6">
            Privacy Policy
          </SectionTitle>

          <Pharagraph className="text-lg mb-4">
            For each project we establish relationships with partners who we
            know will help us create added value for your project. As well as
            bringing together the public and private sectors, we make
            sector-overarching links to gather knowledge and to learn from each
            other who we know will help us create added value for your project.
          </Pharagraph>

          <div className="text-lg font-medium mb-4 text-app-brown">
            Updated January 6, 2022
          </div>

          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae
            ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi
            augue, ut sodales felis rhoncus bibendum. Fusce sagittis nibh orci,
            id vestibulum tortor aliquet ut. Vivamus maximus felis ac nisl
            luctus.
          </Pharagraph>

          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam at nisl ligula. Suspendisse vitae
            ex fermentum, suscipit sem id, dapibus orci. Cras efficitur mi
            augue.
          </Pharagraph>

          <SectionTitle type="h2" className="mb-6">
            Overview
          </SectionTitle>

          <Pharagraph className="text-lg mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour.
          </Pharagraph>

          <SubSectionTitle>
            The standard chunk of Lorem Ipsum used since the 1500s is <br />{" "}
            reproduced below for those interested.
          </SubSectionTitle>

          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed
            scelerisque quam justo, sed volutpat neque tempor porta. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat
            tellus id risus condimentum fringilla. Etiam maximus porttitor magna
            sit amet consectetur. Integer eget ante scelerisque tortor sodales
            aliquet. Integer in vestibulum leo, vitae tristique orci. Etiam
            tortor sem, porttitor at pellentesque sit amet, fringilla nec massa.
            Nunc nec magna sed metus tristique ornare vitae ut nisl. Mauris
            lacus enim, posuere et tincidunt condimentum, sodales ac elit.
          </Pharagraph>
          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut.
          </Pharagraph>
          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed
            scelerisque quam justo, sed volutpat neque tempor porta. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat
            tellus id risus condimentum fringilla. Etiam maximus porttitor magna
            sit amet consectetur. Integer eget ante scelerisque tortor sodales
            aliquet. Integer in vestibulum leo, vitae tristique orci. Etiam
            tortor
          </Pharagraph>

          <hr className="my-6 bg-app-light-gray" />

          <SubSectionTitle>
            The standard chunk of Lorem Ipsum used since the 1500s is <br />{" "}
            reproduced below for those interested.
          </SubSectionTitle>
          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed
            scelerisque quam justo, sed volutpat neque tempor porta. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat
            tellus id risus condimentum fringilla.
          </Pharagraph>
          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut.
          </Pharagraph>

          <ul className="list-disc list-inside mb-8 font-normal marker:text-app-brown text-base ml-5 space-y-2">
            <li>Construction Management</li>
            <li>Pre Construction Services</li>
            <li>Contract Administration</li>
            <li>Online Appointment</li>
          </ul>

          <hr className="my-6 bg-app-light-gray" />
          <SectionTitle>Security and Retention</SectionTitle>
          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed
            scelerisque quam justo, sed volutpat neque tempor porta. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat
            tellus id risus condimentum fringilla.
          </Pharagraph>
          <hr className="my-6 bg-app-light-gray" />

          <SectionTitle>Contact Us</SectionTitle>
          <Pharagraph className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
            ligula. Suspendisse vitae ex fermentum, suscipit sem id, dapibus
            orci. Cras efficitur mi augue, ut sodales felis rhoncus bibendum.
            Fusce sagittis nibh orci, id vestibulum tortor aliquet ut. Vivamus
            maximus felis ac nisl luctus, ut aliquet massa suscipit. Sed
            scelerisque quam justo, sed volutpat neque tempor porta. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aliquam consequat
            tellus id risus condimentum fringilla. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam at nisl ligula.
          </Pharagraph>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default PrivacyPolicyPage;
