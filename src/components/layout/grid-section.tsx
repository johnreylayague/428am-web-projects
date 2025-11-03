import clsx from 'clsx';
import React from 'react';

interface GridSectionProps {
  children: React.ReactNode;
  className?: string;
}

const GridSection: React.FC<GridSectionProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-12 relative mt-15 gap-y-5',
        'lg:gap-x-10',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridSection;
