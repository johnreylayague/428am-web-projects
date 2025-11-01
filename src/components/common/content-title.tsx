import { cn } from '@/lib/utils';
import React from 'react';

interface ContentTitleProps {
  children: React.ReactNode;
  className?: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        'font-semibold text-4xl',
        'text-theme-dark-navy',
        className
      )}
    >
      {children}
    </h3>
  );
};

export default ContentTitle;
