import IconCircle from '@/components/ui/app/icon-circle';
import Mark from '@/components/common/mark';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import DISK from '@/assets/images/background/disk.jpg';

interface CTABannerProps {}

const CTABanner: React.FC<CTABannerProps> = () => {
  return (
    <Wrapper>
      <Container>
        <div className={clsx('relative rounded-sm overflow-hidden')}>
          <figure
            className={clsx(
              'absolute inset-0 size-full',
              'before:absolute before:inset-0 before:bg-theme-orange/90'
            )}
          >
            <img
              src={DISK}
              alt="dummmy image"
              className={clsx('object-center object-cover size-full ')}
            />
          </figure>

          <div
            className={clsx('relative flex items-center justify-between p-8')}
          >
            <h3 className={clsx('text-4xl font-semibold', 'text-white')}>
              Get a professional qoute now!
            </h3>

            <div className={clsx('flex items-center gap-4 max-w-96 w-full')}>
              <IconCircle
                iconProps={{
                  icon: 'fa-solid fa-phone-volume',
                  size: '2x',
                  className: 'text-theme-orange',
                }}
                className={clsx('size-16', 'bg-white ')}
              />
              <div>
                <Mark
                  className={clsx('block text-2xl font-semibold', 'text-white')}
                >
                  6043372045
                </Mark>
                <span className={clsx('block text-base', 'text-white')}>
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
