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
    <div className={clsx('grid grid-cols-12 mt-20 relative gap-5', className)}>
      <div className={clsx('col-span-4')}>
        <Image src={imageSrc} alt={imageAlt} className={clsx('max-w-90')} />
      </div>
      <div className={clsx('col-span-8')}>
        <div className={clsx('flex gap-10 flex-col items-start')}>
          <ContentTitle>{title}</ContentTitle>

          <List items={items} />

          <CTAButtonLink
            buttonLink={ctaLink}
            buttonText={ctaText}
            className={clsx('mb-0 py-3 px-5 rounded-xs', 'bg-theme-green')}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
