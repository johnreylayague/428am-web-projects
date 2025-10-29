import Image from '@/components/common/image';
import Text from '@/components/common/text';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import Gallery from '@/pages/Services/components/gallery';
import clsx from 'clsx';
import React from 'react';
import NH_2 from '@/assets/images/styles/galaxy.png';
import ContentTitle from '@/components/common/content-title';
import CTAButtonLink from '@/components/common/cta-button-link';
import ROUTES from '@/config/routes';
import List from '@/components/common/list';
import VideoPlayer from '@/components/common/video-player';
import Banner from '@/components/ui/app/banner';

const SERVICES = [
  'Professional property maintenance services',
  'Reliable plumbing and drainage solutions',
  'Expert electrical system support',
  'Landscaping and exterior care',
];

const DRAINAGE_BENEFITS = [
  `Proper drainage is essential for protecting buildings and landscapes. It prevents water accumulation, which can cause soil erosion and foundation damage. Additionally, it ensures a safer and more comfortable environment for occupants.`,
  `By directing water away from critical areas, drainage helps reduce costly repairs. It also prevents flooding in both outdoor and indoor spaces. Effective drainage safeguards the property’s structural integrity over time.`,
];

const WHY_PEOPLE_CHOOSE_US = [
  'Trusted and experienced professionals',
  'High-quality workmanship guaranteed',
  'Timely and reliable service',
  'Comprehensive solutions under one roof',
  'Customer-focused approach always',
  'Competitive and transparent pricing',
];

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Services" />
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <Gallery />
          <ContentTitle className={clsx('mt-5')}>Drianage</ContentTitle>
          <Text>
            Proper drainage is essential for maintaining the structural
            integrity of any property and ensuring a safe, comfortable
            environment. Effective drainage systems prevent water accumulation,
            which can lead to soil erosion, foundation damage, and flooding. By
            directing water away from buildings and landscapes, drainage helps
            protect both structures and surrounding areas from costly repairs.
            Additionally, well-planned drainage promotes healthy vegetation by
            preventing waterlogging and soil saturation. Overall, investing in
            proper drainage solutions is a crucial step toward long-term
            sustainability and safety for any property.
          </Text>
          <List items={DRAINAGE_BENEFITS} />
          <VideoPlayer
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
            className={clsx('min-h-90')}
            videoClassName={clsx('min-h-90')}
          />
          <div className={clsx('grid grid-cols-12 mt-20 relative gap-5')}>
            <div className="col-span-6">
              <VideoPlayer
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
                className={clsx('mt-0 min-h-90')}
                videoClassName={clsx('min-h-90')}
              />
            </div>
            <div className="col-span-6">
              <ContentTitle> We offer:</ContentTitle>
              <List items={SERVICES} />
            </div>
          </div>
          <div className={clsx('grid grid-cols-12 mt-20 relative gap-5')}>
            <div className="col-span-5">
              <Image src={NH_2} alt="alt image" />
            </div>
            <div className="col-span-7">
              <ContentTitle>Why people choose us? :</ContentTitle>
              <List items={WHY_PEOPLE_CHOOSE_US} className="columns-2" />
              <CTAButtonLink
                buttonLink={ROUTES.CONTACT_US.path}
                buttonText="Get a Qoute"
                className={clsx('py-3 px-5 mt-10 rounded-xs', 'bg-theme-green')}
              />
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default ServicesPage;
