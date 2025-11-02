import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/shadcn/navigation-menu';
import clsx from 'clsx';
import HeaderMenuLink from '@/components/layout/Header/components/header-menu-link';
import HeaderMenuTrigger, {
  type ServiceRoute,
} from '@/components/layout/Header/components/header-menu-trigger';

export interface RouteItem {
  name: string;
  path: string;
}

interface HeaderNavigationProps {
  serviceRoutes: ServiceRoute[];
  routes: RouteItem[];
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  serviceRoutes,
  routes,
}) => {
  return (
    <div className={clsx('grow pl-5 hidden', 'lg:block')}>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {routes.map((route) => {
            if (route.path === '/services') {
              return (
                <HeaderMenuTrigger
                  key={route.name}
                  serviceRoutes={serviceRoutes}
                  label={route.name}
                />
              );
            }
 
            return (
              <HeaderMenuLink
                key={route.name}
                label={route.name}
                to={route.path}
              />
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderNavigation;
