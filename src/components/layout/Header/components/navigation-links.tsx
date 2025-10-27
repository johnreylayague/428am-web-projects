import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router';

interface RouteItem {
  name: string;
  path: string;
}

interface NavigationLinksProps {
  routes: RouteItem[];
  className?: string;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  routes,
  className,
}) => {
  return (
    <ul
      className={clsx(
        'grow flex items-center gap-10 pl-10',
        '*:[&_a]:uppercase *:[&_a]:font-semibold',
        '*:[&_a]:text-theme-navy',
        className
      )}
    >
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
