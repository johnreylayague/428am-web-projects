import React from 'react';
import clsx from 'clsx';
import Image from '@/components/common/image';
import ContentTitle from '@/components/common/content-title';
import List from '@/components/common/list';
import CTAButtonLink from '@/components/common/cta-button-link';

interface WhyChooseUsProps {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  items: string[];
  ctaText?: string;
  ctaLink: string;
  className?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  imageSrc,
  imageAlt = 'image',
  title = 'Why people choose us?',
  items,
  ctaText = 'Get a Quote',
  ctaLink,
  className,
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-12 mt-10 relative gap-5',
        'lg:mt-20',
        className
      )}
    >
      <div className={clsx('col-span-12', 'lg:col-span-4')}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className={clsx('max-w-90 mx-auto', 'lg:mx-0')}
        />
      </div>
      <div className={clsx('col-span-12', 'lg:col-span-8')}>
        <div
          className={clsx(
            'flex gap-10 flex-col items-center',
            'lg:items-start'
          )}
        >
          <ContentTitle className={clsx('text-center', 'lg:text-left')}>
            {title}
          </ContentTitle>

          <List
            items={items}
            className={clsx(
              'columns-1 max-w-max mx-auto',
              'lg:columns-2 lg:mx-0'
            )}
          />

          <CTAButtonLink
            buttonLink={ctaLink}
            buttonText={ctaText}
            className={clsx(
              'mb-0 py-3 px-5 rounded-xs mx-auto',
              'lg:mx-0',
              'bg-theme-green'
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
