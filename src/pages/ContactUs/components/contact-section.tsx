import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import React from 'react';
import clsx from 'clsx';
import ContactCard from '@/pages/ContactUs/components/contact-card';

export interface ContactItem {
  title: string;
  link?: {
    href: string;
    text: string;
  };
  details?: string;
}

interface ContactSectionProps {
  email: ContactItem;
  phone: ContactItem;
  address: ContactItem;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
}) => {
  return (
    <Wrapper className={clsx('py-5')}>
      <Container>
        <div className={clsx('grid grid-cols-12 gap-5')}>
          <div className={clsx('col-span-12', 'lg:col-span-6 xl:col-span-4')}>
            <ContactCard
              icon="fa-regular fa-envelope"
              title={email.title}
              link={email.link}
              details={email.details}
            />
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6 xl:col-span-4')}>
            <ContactCard
              icon="fa-solid fa-phone-flip"
              title={phone.title}
              link={phone.link}
              details={phone.details}
            />
          </div>
          <div className={clsx('col-span-12', 'xl:col-span-4')}>
            <ContactCard
              icon="fa-solid fa-location-dot"
              title={address.title}
              link={address.link}
              details={address.details}
              className={clsx('justify-center', 'xl:justify-start')}
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ContactSection;
