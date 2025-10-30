import { cn } from '@/lib/utils';
import React from 'react';

interface ContentTitleProps {
  children: React.ReactNode;
  className?: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ children, className }) => {
  return (
    <h3 className={cn('font-medium text-4xl', 'text-theme-navy', className)}>
      {children}
    </h3>
  );
};

export default ContentTitle;
