import React from 'react';
// React Router
import { Link } from 'react-router';
// Assets
import { ROUTES_DATA, COMPANY_LOGO } from '@/assets';
// Config
import ROUTES from '@/config/routes';
// Shadcn
import { Button } from '@/components/ui/shadcn/button';
import clsx from 'clsx';
import FontAwesome from '@/components/ui/app/fontawesome';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <a href="tel:6043372045">
              <FontAwesome icon={'fa-brands fa-facebookF'} />
              <span>6043372045</span>
            </a>
          </li>
          <li>
            <a href="info@lpmaintenance.ca">
              <FontAwesome icon={'fa-regular fa-envelope'} />
              <span>info@lpmaintenance.ca</span>
            </a>
          </li>
          <li>
            <FontAwesome icon={'fa-solid fa-location-dot'} />
            <address>Vancouver, BC</address>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/LPmaintenance604/">
              <FontAwesome icon={'fa-brands fa-facebookF'} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lpmaintenance/">
              <FontAwesome icon={'fa-brands fa-instagram'} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Link to={ROUTES.HOME.path}>
          <figure>
            <img src={COMPANY_LOGO} alt="leader property maintenance" />
          </figure>
        </Link>
        <ul>
          {ROUTES_DATA.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <Button type="button" className={clsx('rounded-xs cursor-pointer ')}>
          Get A Qoute
        </Button>
      </div>
    </header>
  );
};

export default Header;
