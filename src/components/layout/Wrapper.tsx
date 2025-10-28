import React from 'react';
import { cn } from '@/lib/utils';

export type Position = 'fixed' | 'static' | 'absolute' | 'relative' | 'sticky';

export interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  position?: Position;
  disablePaddingX?: boolean;
  innerRef?: React.RefObject<HTMLElement | null>;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  disablePaddingX = false,
  position = 'relative',
  innerRef,
  ...props
}) => {
  const wrapperClassName = cn(
    position,
    !disablePaddingX && 'px-4',
    className ? className : ''
  );

  return (
    <section {...props} ref={innerRef} className={wrapperClassName}>
      {children}
    </section>
  );
};

export default Wrapper;
