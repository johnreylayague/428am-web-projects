import React from 'react';
import FontAwesome from '@/components/common/fontawesome';
import type { IconKeys } from '@/components/common/fontawesome.helpers';
import { cn } from '@/lib/utils';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconKeys;
}

interface IconCircleProps {
  href?: string;
  className?: string;
  iconProps: IconProps;
}

const IconCircle: React.FC<IconCircleProps> = ({
  iconProps,
  href,
  className,
}) => {
  const { icon, className: iconClassName } = iconProps ?? {
    icon: '',
    className: '',
  };

  const content = (
    <FontAwesome
      {...iconProps}
      icon={icon}
      className={cn(
        'absolute left-1/2 top-1/2 -translate-1/2',
        'text-white',
        iconClassName
      )}
    />
  );

  const baseClasses = 'size-10 relative rounded-full shrink-0';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClasses,
          'block transition-all duration-400 ease-in-out',
          'bg-theme-green',
          'hover:bg-theme-blue',
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cn(baseClasses, 'bg-theme-orange', className)}>
      {content}
    </div>
  );
};

export default IconCircle;
