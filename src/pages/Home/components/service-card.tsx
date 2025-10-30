import type { IconKeys } from '@/components/common/fontawesome.types';
import {
  FALLBACK_ICON,
  isValidIconKey,
} from '@/components/common/fontawesome.types';
import Image from '@/components/common/image';
import IconCircle from '@/components/ui/app/icon-circle';
import CTAButtonLink from '@/pages/Home/components/cta-button-link';
import clsx from 'clsx';
import React from 'react';

interface ServiceCardProps {
  src: string;
  alt: string;
  label: string;
  buttonLink: string;
  buttonText: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  src,
  alt,
  label,
  buttonLink,
  buttonText,
  icon,
}) => {
  return (
    <div className={clsx('col-span-3 relative')}>
      <div
        className={clsx(
          'flex group/service items-center flex-col gap-10 rounded-sm py-15 px-10 relative transition-ease',
          'group-hover/service:bg-theme-blue'
        )}
      >
        <div
          className={clsx(
            'size-full absolute inset-0 overflow-hidden transition-ease rounded-sm',
            'bg-white'
          )}
        >
          <Image
            src={src}
            alt={alt}
            className={clsx(
              'invisible opacity-0 relative transition-ease',
              'group-hover/service:opacity-100 group-hover/service:visible',
              'before:absolute before:inset-0 before:size-full',
              'before:bg-black/70'
            )}
          />
        </div>

        <IconCircle
          iconProps={{
            icon: isValidIconKey(icon) ? (icon as IconKeys) : FALLBACK_ICON,
            size: '3x',
            className: clsx(
              'transition-ease',
              'group-hover/service:text-theme-orange'
            ),
          }}
          className={clsx(
            'size-31 transition-ease',
            'group-hover/service:bg-white'
          )}
        />

        <span
          className={clsx(
            'relative font-semibold text-2xl transition-ease',
            'group-hover/service:text-white',
            'text-theme-dark-navy'
          )}
        >
          {label}
        </span>

        <CTAButtonLink
          buttonLink={buttonLink}
          buttonText={buttonText}
          iconProps={{
            icon: 'fa-solid fa-right-long',
          }}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
