import React from 'react';
import { NavigationMenuItem } from '@/components/ui/shadcn/navigation-menu';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router';

interface HeaderMenuLinkProps {
  label: string;
  to: string;
  className?: string;
}

const HeaderMenuLink: React.FC<HeaderMenuLinkProps> = ({
  label,
  to,
  className,
}) => {
  const location = useLocation();

  const handleClick = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <NavigationMenuItem className={clsx('', className)}>
      <NavLink
        to={to}
        onClick={() => handleClick(to)}
        className={({ isActive }) =>
          clsx(
            'text-base font-semibold uppercase px-4 py-2 transition-ease',
            'hover:text-theme-orange focus:bg-transparent hover:bg-transparent',
            isActive ? 'text-theme-orange' : 'text-theme-dark-navy'
          )
        }
      >
        {label}
      </NavLink>
    </NavigationMenuItem>
  );
};

export default HeaderMenuLink;
