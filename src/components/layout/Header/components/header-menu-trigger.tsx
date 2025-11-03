import React from 'react';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/shadcn/navigation-menu';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';
import { NavLink } from 'react-router';

export interface ServiceRoute {
  path: string;
  name: string;
}

interface HeaderMenuTriggerProps {
  label: string;
  serviceRoutes: ServiceRoute[];
}

const HeaderMenuTrigger: React.FC<HeaderMenuTriggerProps> = ({
  serviceRoutes,
  label,
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        showChevron={false}
        className={clsx(
          'cursor-pointer uppercase items-center gap-2 transition-ease',
          'hover:bg-transparent focus:bg-transparent',
          'data-[state=open]:[&>svg]:rotate-180 data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent',
          'data-[state=open]:[&>span]:text-theme-orange data-[state=open]:[&>svg]:text-theme-orange'
        )}
      >
        <span
          className={clsx(
            'text-base font-semibold transition-ease',
            'text-theme-dark-navy'
          )}
        >
          {label}
        </span>
        <FontAwesome
          icon="fa-solid fa-chevron-down"
          size="1x"
          className={clsx('transition-ease', 'text-theme-dark-navy')}
        />
      </NavigationMenuTrigger>

      <NavigationMenuContent
        className={clsx(
          'z-10',
          'md:w-max',
          'group-data-[viewport=false]/navigation-menu:rounded-none group-data-[viewport=false]/navigation-menu:border-0 group-data-[viewport=false]/navigation-menu:py-2.5 group-data-[viewport=false]/navigation-menu:px-0',
          'group-data-[viewport=false]/navigation-menu:bg-theme-orange'
        )}
      >
        {serviceRoutes.map((route) => (
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              clsx(
                isActive ? 'text-theme-dark-navy' : 'text-white',
                'capitalize font-semibold py-2.5 px-6 block',
                'hover:text-theme-dark-navy hover:bg-transparent focus:bg-transparent'
              )
            }
          >
            {route.name}
          </NavLink>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default HeaderMenuTrigger;
