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
      className={cn('w-full max-w-xl mx-auto text-center relative', className)}
    >
      {label && (
        <span
          className={cn(
            'absolute top-0 left-1/2 -translate-x-1/2 capitalize text-6xl font-black select-none',
            'min-[400px]:-top-2 min-[400px]:text-7xl',
            'min-[500px]:-top-5 min-[500px]:text-8xl',
            'md:text-[160px] md:-top-11',
            'text-white',
            labelClassName
          )}
        >
          {label}
        </span>
      )}

      <h2
        className={cn(
          'relative text-lg mb-2 capitalize',
          'text-fog-steel',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <h3
          className={cn(
            'relative text-4xl font-bold capitalize',
            'md:text-6xl',
            'text-theme-navy',
            subtitleClassName
          )}
        >
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
