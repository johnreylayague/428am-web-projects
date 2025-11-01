import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';
import type { IconKeys } from '@/components/common/fontawesome.helpers';

interface CloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconKeys;
  size?: '1x' | 'sm' | 'lg' | 'xl' | '2x';
  iconClassName?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  icon,
  size = 'xl',
  iconClassName,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx('absolute top-4 left-4 cursor-pointer', className)}
      type="button"
      {...props}
    >
      <FontAwesome
        icon={icon}
        size={size}
        className={clsx('text-white', iconClassName)}
      />
    </button>
  );
};

export default CloseButton;
