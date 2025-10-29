import clsx from 'clsx';
import React from 'react';

interface ContentTitleProps {
  children: React.ReactNode;
  className?: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ children, className }) => {
  return (
    <h3 className={clsx('font-medium text-4xl', 'text-theme-navy', className)}>
      {children}
    </h3>
  );
};

export default ContentTitle;
