import { NOT_FOUND_BACKGROUND_IMG } from '@/assets';
import ContentTitle from '@/components/common/content-title';
import CTAButtonLink from '@/components/common/cta-button-link';
import Image from '@/components/common/image';
import Text from '@/components/common/text';
import PageContainer from '@/components/layout/page-container';
import Banner from '@/components/ui/app/banner';
import clsx from 'clsx';
import React from 'react';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="404 Error!" />
      <PageContainer>
        <div
          className={clsx('max-w-4xl mx-auto flex items-center flex-col gap-5')}
        >
          <Image
            alt="not found page"
            src={NOT_FOUND_BACKGROUND_IMG}
            className={clsx('max-w-lg mx-auto block')}
          />

          <ContentTitle className={clsx('mt-0')}>Page Not Found</ContentTitle>

          <Text className={clsx('mt-0 text-center', 'lg:text-left')}>
            Sorry! The page you are looking doesn’t exist or broken. Go to
            Homepage from the below button.
          </Text>

          <CTAButtonLink buttonLink="/" buttonText="Back To Home" />
        </div>
      </PageContainer>
    </React.Fragment>
  );
};

export default NotFoundPage;
