import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/ui/app/fontawesome';
import type { IconKeys } from '@/components/ui/app/fontawesome.types';

interface IconCircleProps {
  icon: IconKeys;
  href?: string;
}

const IconCircle: React.FC<IconCircleProps> = ({ icon, href }) => {
  const content = (
    <FontAwesome
      icon={icon}
      className={clsx('absolute left-1/2 top-1/2 -translate-1/2', 'text-white')}
    />
  );

  const baseClasses = 'size-10 relative rounded-full shrink-0';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          baseClasses,
          'block transition-all duration-400 ease-in-out',
          'bg-theme-green',
          'hover:bg-theme-blue'
        )}
      >
        {content}
      </a>
    );
  }

  return <div className={clsx(baseClasses, 'bg-theme-orange')}>{content}</div>;
};

export default IconCircle;
