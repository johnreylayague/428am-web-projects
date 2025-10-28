import React from 'react';
import { Link } from 'react-router';
import type { IconKeys } from '@/components/common/fontawesome.types';
import FontAwesome from '@/components/common/fontawesome';
import { cn } from '@/lib/utils';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconKeys;
}

interface CTAButtonLinkProps {
  buttonText?: string;
  buttonLink: string;
  className?: string;
  iconProps?: IconProps;
}

const CTAButtonLink: React.FC<CTAButtonLinkProps> = ({
  buttonText,
  buttonLink,
  className,
  iconProps,
}) => {
  const { icon } = iconProps ?? { icon: null };

  return (
    <Link
      to={buttonLink}
      className={cn(
        'group inline-flex items-center justify-center py-5 px-9 mb-8 space-x-3 leading-none rounded-sm font-medium transition-all duration-400 ease-in-out cursor-pointer',
        'bg-theme-orange text-white hover:bg-theme-blue',
        className ? className : ''
      )}
    >
      {buttonText && <span>{buttonText}</span>}
      {icon && <FontAwesome {...iconProps} icon={icon} />}
    </Link>
  );
};

export default CTAButtonLink;
