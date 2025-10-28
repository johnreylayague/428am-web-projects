import IconCircle from '@/components/common/icon-circle';
import Mark from '@/components/common/mark';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import clsx from 'clsx';
import React from 'react';
import NH_1 from '@/assets/images/banner/non-home-1.jpg';

interface CTABannerProps {}

const CTABanner: React.FC<CTABannerProps> = () => {
  return (
    <Wrapper>
      <Container>
        <div className={clsx('relative rounded-xs overflow-hidden')}>
          <figure
            className={clsx(
              'absolute inset-0 size-full',
              'before:absolute before:inset-0 before:bg-theme-orange/90'
            )}
          >
            <img
              src={NH_1}
              alt="dummmy image"
              className={clsx('object-center object-cover size-full ')}
            />
          </figure>

          <div
            className={clsx('relative flex items-center justify-between p-7')}
          >
            <h3 className={clsx('text-3xl font-semibold', 'text-white')}>
              Get a professional qoute now!
            </h3>

            <div className={clsx('flex items-center gap-3 max-w-96 w-full')}>
              <IconCircle
                iconProps={{
                  icon: 'fa-solid fa-phone-volume',
                  size: 'lg',
                  className: 'text-theme-orange',
                }}
                className={clsx('size-14', 'bg-white ')}
              />
              <div>
                <Mark
                  className={clsx('block text-xl font-semibold', 'text-white')}
                >
                  6043372045
                </Mark>
                <span className={clsx('block text-sm', 'text-white')}>
                  Call Us Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CTABanner;
