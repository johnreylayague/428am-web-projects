import { cn } from '@/lib/utils';
import React from 'react';

interface TitleBarProps {
  children: React.ReactNode;
  className?: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        'relative pl-5 font-semibold mt-14 text-lg border-l-4',
        'text-gray-600 border-l-theme-orange',
        className
      )}
    >
      {children}
    </h3>
  );
};

export default TitleBar;
