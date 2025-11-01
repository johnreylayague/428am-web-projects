import IconCircle from '@/components/ui/app/icon-circle';
import Mark from '@/components/common/mark';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import type { IconKeys } from '@/components/common/fontawesome.helpers';

interface CTABannerProps {
  backgroundImage: string;
  backgroundImageAlt: string;
  headline: string;
  callToActionLabel: string;
  phoneNumber: string;
  icon: IconKeys;
}

const CTABanner: React.FC<CTABannerProps> = ({
  backgroundImage,
  backgroundImageAlt,
  headline,
  callToActionLabel,
  phoneNumber,
  icon,
}) => {
  return (
    <Wrapper>
      <Container>
        {/* Banner container */}
        <div className={clsx('relative rounded-sm overflow-hidden')}>
          {/* Background image with overlay */}
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

          {/* Content area: headline and call-to-action */}
          <div
            className={clsx(
              'relative flex flex-col gap-y-4 items-center text-center justify-between p-4',
              'lg:flex-row lg:gap-y-0 lg:p-8 '
            )}
          >
            {/* Headline text */}
            <h3
              className={clsx(
                'text-2xl font-semibold',
                'lg:text-3xl xl:text-4xl',
                'text-white'
              )}
            >
              {headline}
            </h3>

            {/* Call to action: icon, phone number, and label */}
            <div
              className={clsx(
                'flex items-center flex-col gap-4 max-w-fit w-full',
                'lg:flex-row xl:max-w-96'
              )}
            >
              <IconCircle
                iconProps={{
                  icon: icon,
                  size: '2x',
                  className: 'text-theme-orange',
                }}
                className={clsx('size-16', 'bg-white ')}
              />
              <div>
                <Mark
                  className={clsx(
                    'block text-xl font-semibold',
                    'lg:text-2xl',
                    'text-white'
                  )}
                >
                  {phoneNumber}
                </Mark>
                <span
                  className={clsx(
                    'block text-sm',
                    'lg:text-base',
                    'text-white'
                  )}
                >
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
