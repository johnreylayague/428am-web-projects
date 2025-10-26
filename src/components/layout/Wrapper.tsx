import React from 'react';
import clsx from 'clsx';

export interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  position?: 'fixed' | 'static' | 'absolute' | 'relative' | 'sticky';
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
  const wrapperClassName = clsx(
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
