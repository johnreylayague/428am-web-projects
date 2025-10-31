import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  label,
  className,
  labelClassName,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div
      className={cn('w-full max-w-80 mx-auto text-center relative', className)}
    >
      {label && (
        <span
          className={cn(
            'absolute -top-9 left-1/2 -translate-x-1/2 capitalize text-9xl font-black select-none',
            'text-white',
            labelClassName
          )}
        >
          {label}
        </span>
      )}

      <h4
        className={cn(
          'relative text-lg mb-2 capitalize',
          'text-fog-steel',
          titleClassName
        )}
      >
        {title}
      </h4>
      {subtitle && (
        <h5
          className={cn(
            'relative text-5xl font-bold capitalize',
            'text-theme-navy',
            subtitleClassName
          )}
        >
          {subtitle}
        </h5>
      )}
    </div>
  );
};

export default SectionHeader;
