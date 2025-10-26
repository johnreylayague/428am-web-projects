import clsx from 'clsx';
import React from 'react';

interface MarkProps {
  children: React.ReactNode;
  className?: string;
}

const Mark: React.FC<MarkProps> = ({ children, className = '' }) => {
  return <mark className={clsx('bg-transparent', className)}>{children}</mark>;
};

export default Mark;
