import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';

interface MobileMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      name="mobile-menu-toggle"
      id="mobile-menu-toggle"
      onClick={onClick}
      className={clsx('cursor-pointer block lg:hidden', className)}
      aria-label="Toggle mobile menu"
      {...props}
    >
      <FontAwesome
        icon="fa-solid fa-bars"
        className={clsx(
          'text-2xl',
          'min-[400px]:text-3xl sm:text-3xl',
          'text-theme-orange'
        )}
      />
    </button>
  );
};

export default MobileMenuButton;
