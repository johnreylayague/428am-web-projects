import CTAButtonLink from '@/components/common/cta-button-link';
import FontAwesome from '@/components/common/fontawesome';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/shadcn/sheet';
import SocialLinks, {
  type SocialLinkItem,
} from '@/components/layout/Header/components/social-link';
import ContactInfo, {
  type ContactInfoItem,
} from '@/components/layout/Header/components/contact-info';
import CloseButton from '@/components/layout/Header/components/close-button';
import ROUTES from '@/config/routes';
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/shadcn/accordion';

interface MobileSidebarDrawerProps {
  serviceRoutes: (typeof ROUTES.SERVICES_DRAINAGE)[];
  socialLinks: SocialLinkItem[];
  contactInfo: ContactInfoItem[];
  buttonText: string;
  buttonLink: string;
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
}

const MobileSidebarDrawer: React.FC<MobileSidebarDrawerProps> = ({
  serviceRoutes,
  socialLinks,
  contactInfo,
  buttonLink,
  buttonText,
  isOpen,
  onClose,
  onOpenChange,
}) => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(isActive ? 'text-theme-navy font-bold' : 'text-white');

  return (
    <React.Fragment>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent
          hideClose
          className={clsx(
            'p-4 overflow-y-auto',
            'bg-theme-orange border-theme-orange'
          )}
        >
          <SheetTitle hidden />
          <SheetDescription hidden />

          <CloseButton
            icon="fa-regular fa-circle-x-mark"
            size="xl"
            onClick={onClose}
          />

          <ul
            className={clsx(
              'mt-12 text-base',
              '*:[&>a]:uppercase *:[&>a]:space-x-3 *:[&>a]:block *:[&>a]:py-3 *:[&>a]:px-4 *:[&>a]:border-b',
              'text-white *:[&>a]:border-black/5'
            )}
          >
            <li>
              <NavLink
                to={ROUTES.HOME.path}
                onClick={onClose}
                className={navLinkClassName}
              >
                {ROUTES.HOME.name}
              </NavLink>
            </li>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem value="services">
                  <AccordionTrigger
                    hideChevronDownIcon
                    className={clsx(
                      'py-3 px-4 uppercase font-normal text-base border-b rounded-none',
                      'hover:no-underline hover:cursor-pointer',
                      'border-black/5'
                    )}
                  >
                    <span>Services</span>
                    <FontAwesome icon="fa-solid fa-chevron-down" />
                  </AccordionTrigger>
                  <AccordionContent className={clsx('pb-0')}>
                    <ul
                      className={clsx(
                        '*:[&>a]:border-b *:[&>a]:flex *:[&>a]:items-center *:[&>a]:gap-3 *:[&>a]:py-3 *:[&>a]:px-4',
                        '*:[&>a]:border-black/5'
                      )}
                    >
                      {serviceRoutes.map((route) => (
                        <li key={route.path}>
                          <NavLink
                            to={route.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                              clsx(
                                'capitalize text-base',
                                isActive
                                  ? 'text-theme-dark-navy font-bold'
                                  : 'text-white'
                              )
                            }
                          >
                            <FontAwesome
                              icon="fa-regular fa-circle"
                              size="sm"
                            />
                            <span>{route.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <NavLink
                to={ROUTES.ABOUT_US.path}
                onClick={onClose}
                className={navLinkClassName}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.CONTACT_US.path}
                onClick={onClose}
                className={navLinkClassName}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.INSTAGRAM.path}
                onClick={onClose}
                className={navLinkClassName}
              >
                Instagram
              </NavLink>
            </li>
          </ul>

          <ContactInfo items={contactInfo} />

          <CTAButtonLink
            buttonLink={buttonLink}
            buttonText={buttonText}
            className={clsx('rounded-xs mb-0 py-4', 'bg-theme-navy')}
          />

          <SocialLinks links={socialLinks} />
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
};

export default MobileSidebarDrawer;
