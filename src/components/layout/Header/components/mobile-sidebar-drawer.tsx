import CTAButtonLink from '@/components/common/cta-button-link';
import FontAwesome from '@/components/common/fontawesome';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/shadcn/sheet';
import { CONTACT } from '@/config/constants';
import ROUTES from '@/config/routes';
import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/shadcn/accordion';

interface MobileSidebarDrawerProps {}

const MobileSidebarDrawer: React.FC<MobileSidebarDrawerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const serviceRoutes = [
    ROUTES.SERVICES_DRAINAGE,
    ROUTES.SERVICES_HARDSCAPING,
    ROUTES.SERVICES_CARPENTRY,
    ROUTES.SERVICES_PRESSURE_WASHING,
    ROUTES.SERVICES_WINDOW_CLEANING,
    ROUTES.SERVICES_GUTTER_CLEANING,
    ROUTES.SERVICES_MOSS_REMOVAL,
    ROUTES.SERVICES_PAINTING,
  ];

  return (
    <React.Fragment>
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger>
          <FontAwesome
            icon="fa-solid fa-bars"
            className={clsx(
              'text-2xl',
              'min-[400px]:text-3xl sm:text-3xl',
              'text-theme-orange'
            )}
          />
        </SheetTrigger>
        <SheetContent
          hideClose
          className={clsx('p-4', 'bg-theme-orange border-theme-orange')}
        >
          <SheetTitle hidden />
          <SheetDescription hidden />

          <button
            className={clsx('absolute top-4 left-4')}
            onClick={handleClose}
            type="button"
          >
            <FontAwesome
              icon="fa-regular fa-circle-x-mark"
              size="xl"
              className={clsx('', 'text-white')}
            />
          </button>

          <ul
            className={clsx(
              'mt-12 text-base',
              '*:[&>a]:uppercase *:[&>a]:space-x-3 *:[&>a]:block *:[&>a]:py-3 *:[&>a]:px-4 *:[&>a]:border-b',
              '*:[&>button]:bg-red-500',
              'text-white *:[&>a]:border-black/15'
            )}
          >
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="services">
                  <AccordionTrigger
                    hideChevronDownIcon
                    className={clsx(
                      'py-3 px-4 uppercase font-normal text-base border-b rounded-none',
                      'border-black/15'
                    )}
                  >
                    <span>Services</span>
                    <FontAwesome icon="fa-solid fa-chevron-down" />
                  </AccordionTrigger>
                  <AccordionContent className={clsx('pb-0')}>
                    <ul
                      className={clsx(
                        '*:border-b *:flex *:items-center *:gap-3 *:py-3 *:px-4 *:border-black/15'
                      )}
                    >
                      {serviceRoutes.map((route) => (
                        <li key={route.path}>
                          <FontAwesome icon="fa-regular fa-circle" size="sm" />
                          <NavLink
                            to={route.path}
                            className={clsx('capitalize', 'text-white')}
                          >
                            {route.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <NavLink to={ROUTES.ABOUT_US.path}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.CONTACT_US.path}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.INSTAGRAM.path}>Instagram</NavLink>
            </li>
          </ul>

          <ul
            className={clsx(
              'mt-12 flex flex-col gap-5',
              '*:flex *:gap-3 *:items-center ',
              '*:[&>div]:last:space-y-1 *:[&>div>a]:text-sm *:[&>div>address]:text-sm *:[&>div>h6]:text-sm *:[&>div>h6]:font-semibold',
              'text-white'
            )}
          >
            <li>
              <div>
                <FontAwesome icon="fa-solid fa-map-location-dot" size="lg" />
              </div>
              <div>
                <h6>Visit Our Location</h6>
                <address>{CONTACT.address}</address>
              </div>
            </li>
            <li>
              <div>
                <FontAwesome icon="fa-regular fa-envelope" size="lg" />
              </div>
              <div>
                <h6>Send Us Mail</h6>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </li>
            <li>
              <div>
                <FontAwesome icon="fa-solid fa-phone-volume" size="lg" />
              </div>
              <div>
                <h6>Phone Number</h6>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </div>
            </li>
          </ul>

          <CTAButtonLink
            buttonLink={ROUTES.CONTACT_US.path}
            buttonText="Get A Qoute"
            className={clsx('rounded-xs mb-0 py-4', 'bg-theme-navy')}
          />

          <div className={clsx('flex gap-5 mt-6', 'text-white')}>
            <FontAwesome icon="fa-brands fa-facebookF" size="1x" />
            <FontAwesome icon="fa-brands fa-instagram" size="1x" />
          </div>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
};

export default MobileSidebarDrawer;
