import SectionHeader from '@/components/ui/app/section-header';
import PageContainer from '@/components/layout/page-container';
import clsx from 'clsx';
import React from 'react';
import drainageImage from '@/assets/images/background/drainage.png';
import aboutUsImage from '@/assets/images/background/about-us-image-1.jpg';
import Text from '@/components/common/text';
import TitleBar from '@/pages/AboutUs/components/title-bar';
import Experience from '@/pages/AboutUs/components/experience';
import Banner from '@/components/ui/app/banner';
import Image from '@/components/common/image';
import MetaTags from '@/components/seo/meta-tags';
import GridSection from '@/components/layout/grid-section';

interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="About Us- Leader Property Maintenance - Drainage Service"
        description="10 Years Of Experience With Creative Team Services Leader Property Maintenance Who we are Leader Property Maintenance was created after years of hard-earned experience working in different companies we would personally get commended for our hard and honest work and homeowners and property managers would admire the quality and attention to detail that we would"
        canonical="https://www.lpmaintenance.ca/about-us/"
        ogTitle="About - Leader Property Maintenance - Drainage Service"
        ogDescription="10 Years Of Experience With Creative Team Services Leader Property Maintenance Who we are Leader Property Maintenance was created after years of hard-earned experience working in different companies we would personally get commended for our hard and honest work and homeowners and property managers would admire the quality and attention to detail that we would"
        ogUrl="https://www.lpmaintenance.ca/about-us/"
        ogType="article"
      />
      <Banner title="About Us" />
      <PageContainer>
        <GridSection>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <Experience
              label="Years of experience with creative team"
              boldWords="creative team"
              number={10}
              bgImage={drainageImage}
            />
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <SectionHeader
              title="Leader Property Maintenance"
              subtitle="Who We Are"
              className={clsx('text-center max-w-full mt-5', 'lg:text-left')}
            />

            <TitleBar>
              Leader Property Maintenance was created after years of hard-earned
              experience working in different companies
            </TitleBar>

            <Text className={clsx('mt-5')}>
              We would personally get commended for our hard and honest work.
              Such recognition reflects not only our individual dedication but
              also the collective strength of our team. It shows that integrity
              and effort remain the foundation of meaningful success. Each
              commendation reminds us to keep striving for excellence in
              everything we do. Ultimately, our consistent hard work becomes the
              standard by which future achievements are measured. When we
              dedicate ourselves to excellence, we inspire others to uphold the
              same values, creating a culture built on trust and continuous
              improvement. Our commitment to doing things the right way, even
              when no one is watching, becomes a silent example that motivates
              those around us.
            </Text>
          </div>
        </GridSection>

        <GridSection>
          <div
            className={clsx('col-span-12 order-2', 'lg:col-span-6 lg:order-1')}
          >
            <Text>
              We would personally get commended for our hard and honest work.
              Such recognition reflects not only our individual dedication but
              also the collective strength of our team. It shows that integrity
              and effort remain the foundation of meaningful success. Each
              commendation reminds us to keep striving for excellence in
              everything we do. Ultimately, our consistent hard work becomes the
              standard by which future achievements are measured. When we
              dedicate ourselves to excellence, we inspire others to uphold the
              same values, creating a culture built on trust and continuous
              improvement. Our commitment to doing things the right way, even
              when no one is watching, becomes a silent example that motivates
              those around us.
            </Text>
          </div>
          <div
            className={clsx('col-span-12 order-1', 'lg:col-span-6 lg:order-2')}
          >
            <Image src={aboutUsImage} alt="Example Image" />
          </div>
        </GridSection>
      </PageContainer>
    </React.Fragment>
  );
};

export default AboutUsPage;
