import IconCircle from '@/components/ui/app/icon-circle';
import Mark from '@/components/common/mark';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import type { IconKeys } from '@/components/common/fontawesome.types';

interface CTABannerProps {
  backgroundImage: string;
  backgroundImageAlt: string;
  headline: string;
  callToActionLabel: string;
  phoneNumber: string;
  iconClass: IconKeys;
}

const CTABanner: React.FC<CTABannerProps> = ({
  backgroundImage,
  backgroundImageAlt,
  headline,
  callToActionLabel,
  phoneNumber,
  iconClass,
}) => {
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
              src={backgroundImage}
              alt={backgroundImageAlt}
              className={clsx('object-center object-cover size-full ')}
            />
          </figure>

          <div
            className={clsx('relative flex items-center justify-between p-8')}
          >
            <h3 className={clsx('text-4xl font-semibold', 'text-white')}>
              {headline}
            </h3>

            <div className={clsx('flex items-center gap-4 max-w-96 w-full')}>
              <IconCircle
                iconProps={{
                  icon: iconClass,
                  size: '2x',
                  className: 'text-theme-orange',
                }}
                className={clsx('size-16', 'bg-white ')}
              />
              <div>
                <Mark
                  className={clsx('block text-2xl font-semibold', 'text-white')}
                >
                  {phoneNumber}
                </Mark>
                <span className={clsx('block text-base', 'text-white')}>
                  {callToActionLabel}
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
