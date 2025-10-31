import FlatIcon from '@/components/common/flat-icon';
import { resolveFlatIcon } from '@/components/common/flat-icon.constants';
import Image from '@/components/common/image';
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
  const resolvedIcon = resolveFlatIcon(icon);

  return (
    <div
      className={clsx(
        'flex group items-center flex-col gap-10 rounded-sm py-10 px-5 relative transition-ease',
        'md:py-15 md:px-10',
        'group-hover:bg-theme-blue'
      )}
    >
      {/* Image background group - Contains the service card background image */}
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
            'group-hover:opacity-100 group-hover:visible',
            'before:absolute before:inset-0 before:size-full',
            'before:bg-black/70'
          )}
        />
      </div>

      {/* Icon group - Holds the circular colored icon at the top of the card */}
      <div
        className={clsx(
          'size-22 relative rounded-full',
          'md:size-25 lg:size-31',
          'group-hover:bg-white',
          'bg-theme-orange'
        )}
      >
        <FlatIcon
          icon={resolvedIcon}
          className={clsx(
            'size-10 absolute left-1/2 top-1/2 -translate-1/2',
            'md:size-14'
          )}
        />
      </div>

      {/* Label group - Displays the name/label of the service */}
      <h3
        className={clsx(
          'relative font-semibold text-lg break-all text-center transition-ease',
          'md:text-2xl',
          'group-hover:text-white',
          'text-theme-dark-navy'
        )}
      >
        {label}
      </h3>

      {/* Call-to-action button group - The area for the action button */}
      <CTAButtonLink
        buttonLink={buttonLink}
        buttonText={buttonText}
        iconProps={{
          icon: 'fa-solid fa-right-long',
        }}
      />
    </div>
  );
};

export default ServiceCard;
