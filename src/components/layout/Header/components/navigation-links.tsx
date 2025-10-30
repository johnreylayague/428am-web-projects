import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router';

interface RouteItem {
  name: string;
  path: string;
}

interface NavigationLinksProps {
  routes: RouteItem[];
  className?: string;
}

const serviceRoutes = [
  { name: 'Drainage', path: '/services/drainage' },
  { name: 'Hardscaping', path: '/services/hardscaping' },
  { name: 'Carpentry', path: '/services/carpentry' },
  { name: 'Pressure Washing', path: '/services/pressure-washing' },
  { name: 'Window Cleaning', path: '/services/windowcleaning' },
  { name: 'Gutter Cleaning', path: '/services/guttercleaning' },
  { name: 'Moss Removal', path: '/services/mossremoval' },
  { name: 'Painting', path: '/services/painting' },
];

// Checks if the location is on any /services or /services/*
function isServicesRootActive(pathname: string) {
  return pathname === '/services' || pathname.startsWith('/services/');
}

const activeColor =
  'text-theme-orange bg-orange-50 underline underline-offset-4 font-bold';

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  routes,
  className,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <ul
      className={clsx(
        'grow flex items-center gap-10 pl-10',
        '*:[&_a]:uppercase *:[&_a]:font-semibold',
        '*:[&_a]:text-theme-navy',
        className
      )}
    >
      {routes.map((route) => {
        if (route.path === '/services') {
          const parentActive = isServicesRootActive(location.pathname);

          return (
            <li key={route.path} className="relative">
              <button
                onClick={() => setIsServicesOpen((open) => !open)}
                className={clsx(
                  'uppercase font-semibold text-theme-navy cursor-pointer px-4 py-2 rounded transition-colors',
                  parentActive && activeColor
                )}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                type="button"
              >
                {route.name}
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <ul className="py-2" role="menu">
                    {serviceRoutes.map((service) => (
                      <li key={service.path}>
                        <NavLink
                          to={service.path}
                          className={({ isActive }) =>
                            clsx(
                              'block px-4 py-2 text-sm rounded transition-colors',
                              isActive
                                ? activeColor
                                : 'text-gray-700 hover:bg-gray-100 hover:text-theme-orange'
                            )
                          }
                          onClick={() => setIsServicesOpen(false)}
                          role="menuitem"
                          end
                        >
                          {service.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        }

        return (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                clsx(
                  'px-4 py-2 rounded transition-colors',
                  isActive ? activeColor : ''
                )
              }
              end
            >
              {route.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationLinks;
