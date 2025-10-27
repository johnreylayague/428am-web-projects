import React from 'react';
import { Link } from 'react-router';
import type { IconKeys } from '@/components/common/fontawesome.types';
import FontAwesome from '@/components/common/fontawesome';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/lib/utils';

interface CTAButtonLinkProps {
  buttonText: string;
  buttonLink: string;
  icon?: IconKeys;
  className?: string;
  iconSize?: SizeProp;
}

const CTAButtonLink: React.FC<CTAButtonLinkProps> = ({
  buttonText,
  buttonLink,
  icon,
  className,
  iconSize,
}) => {
  return (
    <Link
      to={buttonLink}
      className={cn(
        'inline-flex items-center justify-center py-5 px-9 mb-8 space-x-3 leading-none rounded-sm font-medium transition-all duration-400 ease-in-out cursor-pointer',
        'bg-theme-orange text-white hover:bg-theme-blue',
        className ? className : ''
      )}
    >
      <span>{buttonText}</span>
      {icon && (
        <FontAwesome icon={icon} {...(iconSize ? { size: iconSize } : {})} />
      )}
    </Link>
  );
};

export default CTAButtonLink;
