import { CONTACT, MAP_EMBED_URL, SOCIAL_LINKS } from '@/config/constants';
import ContactForm from '@/pages/ContactUs/components/contact-form';
import ContactSection from '@/pages/ContactUs/components/contact-section';
import GoogleMapEmbed from '@/pages/ContactUs/components/google-map-embed';
import Banner from '@/components/ui/app/banner';
import COMPANY_LOGO_IMG from '@/assets/images/background/contact-us-estimate.png';

import React from 'react';

interface ContactUsPageProps {}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Contact Us" />

      <ContactSection
        email={{
          title: 'Email Address',
          link: {
            href: `mailto:${CONTACT.email}`,
            text: CONTACT.email,
          },
        }}
        phone={{
          title: 'Phone Number',
          link: {
            href: `tel:${CONTACT.phone}`,
            text: CONTACT.phone,
          },
        }}
        address={{
          title: 'Office Address',
          details: 'Vancouver, BC',
        }}
      />

      <GoogleMapEmbed src={MAP_EMBED_URL} />

      <ContactForm
        headerTitle={'Time To Reach Out'}
        headerSubTitle={'Contact Us'}
        imageSrc={COMPANY_LOGO_IMG}
        imgAlt={'contact us form estimate'}
        facebookUrl={SOCIAL_LINKS.FACEBOOK}
        instagramUrl={SOCIAL_LINKS.INSTAGRAM}
      />
    </React.Fragment>
  );
};

export default ContactUsPage;
