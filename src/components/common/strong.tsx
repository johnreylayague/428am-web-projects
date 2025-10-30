import clsx from 'clsx';
import React from 'react';

interface StrongProps {
  children: React.ReactNode;
  className?: string;
}

const Strong: React.FC<StrongProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <strong {...props} className={clsx('font-bold text-black', className)}>
      {children}
    </strong>
  );
};

export default Strong;
