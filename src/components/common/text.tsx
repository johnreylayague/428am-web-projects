import { cn } from '@/lib/utils';
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={cn('mt-8 text-sm leading-6', 'text-fog-steel', className)}>
      {children}
    </p>
  );
};

export default Text;
