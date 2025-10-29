import SectionHeader from '@/components/ui/app/section-header';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import NH_2 from '@/assets/images/styles/galaxy.png';
import Text from '@/components/common/text';
import TitleBar from '@/pages/AboutUs/components/title-bar';
import Experience from '@/pages/AboutUs/components/experience';
import ImageWrapper from '@/pages/AboutUs/components/image-wrapper';
import Banner from '@/components/ui/app/banner';

interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="About Us" />
      <Wrapper className={clsx('pt-25 pb-40')}>
        <Container>
          <div className={clsx('grid grid-cols-12 gap-5 relative')}>
            <div className={clsx('col-span-6')}>
              <Experience
                label={
                  <React.Fragment>
                    Years of experience with{' '}
                    <b className={clsx('capitalize inline-block ')}>
                      creative team
                    </b>
                  </React.Fragment>
                }
                number={10}
                bgImage={NH_2}
              />
            </div>
            <div className={clsx('col-span-6')}>
              <SectionHeader
                title="Leader Property Maintenance"
                subtitle="Who We Are"
                className={clsx('text-left max-w-full')}
              />
              <TitleBar>
                Leader Property Maintenance was created after years of
                hard-earned experience working in different companies
              </TitleBar>
              <Text>
                We would personally get commended for our hard and honest work.
                Such recognition reflects not only our individual dedication but
                also the collective strength of our team. It shows that
                integrity and effort remain the foundation of meaningful
                success. Each commendation reminds us to keep striving for
                excellence in everything we do. Ultimately, our consistent hard
                work becomes the standard by which future achievements are
                measured. When we dedicate ourselves to excellence, we inspire
                others to uphold the same values, creating a culture built on
                trust and continuous improvement. Our commitment to doing things
                the right way, even when no one is watching, becomes a silent
                example that motivates those around us.
              </Text>
            </div>
          </div>

          <div className={clsx('grid grid-cols-12 gap-5 relative mt-20')}>
            <div className={clsx('col-span-6')}>
              <Text>
                We would personally get commended for our hard and honest work.
                Such recognition reflects not only our individual dedication but
                also the collective strength of our team. It shows that
                integrity and effort remain the foundation of meaningful
                success. Each commendation reminds us to keep striving for
                excellence in everything we do. Ultimately, our consistent hard
                work becomes the standard by which future achievements are
                measured. When we dedicate ourselves to excellence, we inspire
                others to uphold the same values, creating a culture built on
                trust and continuous improvement. Our commitment to doing things
                the right way, even when no one is watching, becomes a silent
                example that motivates those around us.
              </Text>
            </div>
            <div className={clsx('col-span-6')}>
              <ImageWrapper
                src={NH_2}
                alt="Example Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default AboutUsPage;
