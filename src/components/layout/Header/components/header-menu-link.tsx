import React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/shadcn/navigation-menu';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router';

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
      <NavigationMenuLink asChild>
        <Link
          to={to}
          onClick={() => handleClick(to)}
          className={clsx(
            'text-base font-semibold uppercase px-4 py-2 transition-ease',
            'text-theme-dark-navy hover:text-theme-orange focus:bg-transparent hover:bg-transparent'
          )}
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default HeaderMenuLink;
