import { MAP_EMBED_URL } from '@/config/constants';
import ContactSection from '@/pages/ContactUs/components/contact-section';
import GoogleMapEmbed from '@/pages/ContactUs/components/google-map-embed';
import React from 'react';

interface ContactUsPageProps {}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <React.Fragment>
      <ContactSection />
      <GoogleMapEmbed src={MAP_EMBED_URL} />
    </React.Fragment>
  );
};

export default ContactUsPage;
