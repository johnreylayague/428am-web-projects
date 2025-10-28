import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import React from 'react';
import clsx from 'clsx';
import { CONTACT } from '@/config/constants';
import ContactCard from '@/pages/ContactUs/components/contact-card';

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <Wrapper className={clsx('py-5')}>
      <Container>
        <div className={clsx('grid grid-cols-12 gap-5')}>
          <div className={clsx('col-span-4 ')}>
            <ContactCard
              icon="fa-regular fa-envelope"
              title="Email Address"
              link={{
                href: `mailto:${CONTACT.email}`,
                text: CONTACT.email,
              }}
            />
          </div>
          <div className={clsx('col-span-4')}>
            <ContactCard
              icon="fa-solid fa-phone-flip"
              title="Phone Number"
              link={{
                href: `tel:${CONTACT.phone}`,
                text: CONTACT.phone,
              }}
            />
          </div>
          <div className={clsx('col-span-4')}>
            <ContactCard
              icon="fa-solid fa-location-dot"
              title="Office Address"
              details="Vancouver, BC"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ContactSection;
