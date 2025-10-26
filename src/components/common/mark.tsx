import clsx from 'clsx';
import React from 'react';

interface MarkProps {
  children: React.ReactNode;
  className?: string;
}

const Mark: React.FC<MarkProps> = ({ children, className = '', ...props }) => {
  return (
    <mark {...props} className={clsx('bg-transparent', className)}>
      {children}
    </mark>
  );
};

export default Mark;
