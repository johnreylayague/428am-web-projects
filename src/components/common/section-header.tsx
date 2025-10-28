import { cn } from '@/lib/utils';
import clsx from 'clsx';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  label,
  className,
}) => {
  return (
    <div
      className={cn('w-full max-w-80 mx-auto text-center relative', className)}
    >
      {label && (
        <span
          className={clsx(
            'absolute -top-9 left-1/2 -translate-x-1/2 capitalize text-9xl font-black',
            'text-white'
          )}
        >
          {label}
        </span>
      )}

      <h2
        className={clsx('relative text-lg mb-2 capitalize', 'text-fog-steel')}
      >
        {title}
      </h2>
      {subtitle && (
        <h3
          className={clsx(
            'relative text-5xl font-bold capitalize',
            'text-theme-navy'
          )}
        >
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
