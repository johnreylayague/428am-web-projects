import Text from '@/components/common/text';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import insuredLicensedImg from '@/assets/images/logos/insured-licensed.jpg';
import ContentTitle from '@/components/common/content-title';
import ROUTES from '@/config/routes';
import List from '@/components/common/list';
import VideoPlayer from '@/components/common/video-player';
import Banner from '@/components/ui/app/banner';
import Gallery from '@/components/ui/app/gallery';
import WhyChooseUs from '@/components/ui/app/why-choose-us';
import WHY_PEOPLE_CHOOSE_US from '@/assets/json/why-people-choose-us.json';

const SERVICES = [
  'French drains and trench drains installation',
  'Downspout extensions and gutter drainage',
  'Foundation waterproofing and grading solutions',
  'Sump pump installation and maintenance',
];

const DRAINAGE_BENEFITS = [
  'We strongly believe in preventative maintenance. You want to make sure you have your system checked or cleaned before any of these symptoms may occur. A flood could cause irreparable damage and could cost thousands of dollars that could be coming out of your own pocket.',
  'Generally, we suggest having your system cleaned every 2-4 years depending on how it is functioning. Preventative maintenance also includes small repairs in areas where we believe that there may be an issue in the future.',
];

// items moved to JSON file

interface DrainagePageProps {}

const DrainagePage: React.FC<DrainagePageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Drainage" />
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <Gallery />

          <ContentTitle className={clsx('mt-5')}>Drainage</ContentTitle>

          <Text>
            The number one way to maintain your drainage system is to regularly
            clean it and inspect it. This doesn’t necessarily need to be done
            every single year, but if you’ve never cleaned or inspected your
            system, we highly suggest booking one of our trained technicians
            that have years in the drainage field. The way we clean a drainage
            system Is by hydro-flushing the perimeter pipes, we use a
            high-pressure reel that gets fed into the pipes and cleans the
            inside with water pressure. We then perform a final camera
            inspection to make sure we properly cleaned all the problem areas.
            Not only do we clean the pipes surrounding the perimeter of the
            house, we also clean the main line to the city storm system, until
            the end of the property line, this is still your responsibility to
            maintain. In worst cases, the full system may need to be replaced,
            this is especially common in older houses where the drain tiles are
            made of either cement or clay and cannot be repaired.
          </Text>

          <List items={DRAINAGE_BENEFITS} className="columns-1" />

          <VideoPlayer
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
            className={clsx('h-150 mt-15')}
            videoClassName={clsx('h-150 ')}
          />

          <div className={clsx('grid grid-cols-12 mt-15 relative gap-5')}>
            <div className={clsx('col-span-6')}>
              <VideoPlayer
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
                className={clsx('mt-0 h-75')}
                videoClassName={clsx('h-75')}
              />
            </div>
            <div className={clsx('col-start-8 col-span-6')}>
              <ContentTitle>We offer:</ContentTitle>
              <List items={SERVICES} className={clsx('columns-1')} />
            </div>
          </div>

          <WhyChooseUs
            imageSrc={insuredLicensedImg}
            imageAlt="Insured and Licensed"
            title="Why people choose us?"
            items={WHY_PEOPLE_CHOOSE_US}
            ctaText="Get a Quote"
            ctaLink={ROUTES.CONTACT_US.path}
          />
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default DrainagePage;
