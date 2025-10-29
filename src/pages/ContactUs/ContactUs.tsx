import { MAP_EMBED_URL } from '@/config/constants';
import ContactForm from '@/pages/ContactUs/components/contact-form';
import ContactSection from '@/pages/ContactUs/components/contact-section';
import GoogleMapEmbed from '@/pages/ContactUs/components/google-map-embed';
import React from 'react';

interface ContactUsPageProps {}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  return (
    <React.Fragment>
      <ContactSection />
      <GoogleMapEmbed src={MAP_EMBED_URL} />
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactUsPage;
