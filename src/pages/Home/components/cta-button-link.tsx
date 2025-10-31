import React from 'react';
import { Link } from 'react-router';
import type { IconKeys } from '@/components/common/fontawesome.types';
import FontAwesome from '@/components/common/fontawesome';
import { cn } from '@/lib/utils';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

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
        'group-hover:max-w-45 group-hover:w-full inline-flex items-center justify-center py-5 px-9 space-x-3 leading-none font-medium transition-ease cursor-pointer absolute left-1/2 -translate-x-1/2 -bottom-7 shadow-none rounded-sm p-5',
        'bg-gray-100 text-white group-hover:bg-theme-orange',
        className ? className : ''
      )}
    >
      {buttonText && (
        <span className={clsx('transition-ease', 'group-hover:block hidden')}>
          {buttonText}
        </span>
      )}
      {icon && (
        <FontAwesome
          {...iconProps}
          className={clsx(
            'transition-ease',
            'group-hover:text-white text-theme-orange'
          )}
          size={'xs'}
          icon={icon}
        />
      )}
    </Link>
  );
};

export default CTAButtonLink;
