import SectionHeader from '@/components/ui/app/section-header';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import drainageImage from '@/assets/images/background/drainage.png';
import aboutUsImage from '@/assets/images/background/about-us-image-1.jpg';
import Text from '@/components/common/text';
import TitleBar from '@/pages/AboutUs/components/title-bar';
import Experience from '@/pages/AboutUs/components/experience';
import Banner from '@/components/ui/app/banner';
import Image from '@/components/common/image';

interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="About Us" />
      <Wrapper className={clsx('pt-10 pb-40', 'lg:pt-25')}>
        <Container>
          <main>
            <div className={clsx('grid grid-cols-12 gap-5 relative')}>
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
                  titleClassName={clsx('text-base')}
                  subtitleClassName={clsx(
                    'text-4xl font-semibold',
                    'lg:text-6xl'
                  )}
                  className={clsx(
                    'text-center max-w-full mt-5',
                    'lg:text-left'
                  )}
                />

                <TitleBar>
                  Leader Property Maintenance was created after years of
                  hard-earned experience working in different companies
                </TitleBar>

                <Text className={clsx('mt-5')}>
                  We would personally get commended for our hard and honest
                  work. Such recognition reflects not only our individual
                  dedication but also the collective strength of our team. It
                  shows that integrity and effort remain the foundation of
                  meaningful success. Each commendation reminds us to keep
                  striving for excellence in everything we do. Ultimately, our
                  consistent hard work becomes the standard by which future
                  achievements are measured. When we dedicate ourselves to
                  excellence, we inspire others to uphold the same values,
                  creating a culture built on trust and continuous improvement.
                  Our commitment to doing things the right way, even when no one
                  is watching, becomes a silent example that motivates those
                  around us.
                </Text>
              </div>
            </div>

            <div
              className={clsx(
                'grid grid-cols-12 gap-5 relative mt-10',
                'lg:mt-20'
              )}
            >
              <div
                className={clsx(
                  'col-span-12 order-2',
                  'lg:col-span-6 lg:order-1'
                )}
              >
                <Text>
                  We would personally get commended for our hard and honest
                  work. Such recognition reflects not only our individual
                  dedication but also the collective strength of our team. It
                  shows that integrity and effort remain the foundation of
                  meaningful success. Each commendation reminds us to keep
                  striving for excellence in everything we do. Ultimately, our
                  consistent hard work becomes the standard by which future
                  achievements are measured. When we dedicate ourselves to
                  excellence, we inspire others to uphold the same values,
                  creating a culture built on trust and continuous improvement.
                  Our commitment to doing things the right way, even when no one
                  is watching, becomes a silent example that motivates those
                  around us.
                </Text>
              </div>
              <div
                className={clsx(
                  'col-span-12 order-1',
                  'lg:col-span-6 lg:order-2'
                )}
              >
                <Image
                  src={aboutUsImage}
                  alt="Example Image"
                  className="rounded-lg"
                />
              </div>
            </div>
          </main>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default AboutUsPage;
