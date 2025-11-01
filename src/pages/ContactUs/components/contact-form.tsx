import SectionHeader from '@/components/ui/app/section-header';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import ActionButton from '@/pages/ContactUs/components/action-button';
import SocialLinks from '@/pages/ContactUs/components/social-link';
import TextAreaField from '@/pages/ContactUs/components/text-area-field';
import TextField from '@/pages/ContactUs/components/text-field';
import clsx from 'clsx';
import React from 'react';
import Image from '@/components/common/image';

interface ContactFormProps {
  headerTitle: string;
  headerSubTitle: string;
  imageSrc: string;
  imgAlt: string;
  facebookUrl: string;
  instagramUrl: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  headerSubTitle,
  headerTitle,
  imageSrc,
  imgAlt,
  facebookUrl,
  instagramUrl,
}) => {
  return (
    <Wrapper className={clsx('pt-20 pb-30')}>
      <Container>
        <div className={clsx('grid grid-cols-12 relative gap-5')}>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <div
              className={clsx(
                'flex items-center justify-center flex-col gap-7'
              )}
            >
              <SectionHeader title={headerTitle} subtitle={headerSubTitle} />

              <Image
                src={imageSrc}
                alt={imgAlt}
                className={clsx('size-64 rounded-full')}
                imageClassName={clsx('object-contain')}
              />

              <SocialLinks
                facebookUrl={facebookUrl}
                instagramUrl={instagramUrl}
              />
            </div>
          </div>
          <div className={clsx('col-span-12', 'lg:col-span-6')}>
            <form className={clsx('mt-10')}>
              <div className={clsx('grid grid-cols-12 relative gap-5')}>
                <div className={clsx('col-span-12', 'lg:col-span-6')}>
                  <TextField
                    id="in-full-name"
                    name="full-name"
                    label="Full name"
                    placeholder="Enter name"
                  />
                </div>
                <div className={clsx('col-span-12', 'lg:col-span-6')}>
                  <TextField
                    id="in-email-address"
                    name="email-address"
                    label="Email address"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className={clsx('col-span-12', 'lg:col-span-6')}>
                  <TextField
                    id="in-phone-number"
                    name="phone-number"
                    label="Phone number"
                    placeholder="Enter Number"
                  />
                </div>
                <div className={clsx('col-span-12', 'lg:col-span-6')}>
                  <TextField
                    id="in-subject"
                    name="subject"
                    label="Subject"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className={clsx('col-span-12')}>
                  <TextAreaField
                    id="in-message"
                    name="message"
                    label="Enter Message"
                    placeholder="Enter Message"
                  />
                </div>
                <div className={clsx('col-span-12')}>
                  <ActionButton
                    type="button"
                    id="btn-get-a-qoute"
                    name="get-a-qoute"
                    text="Get a qoute"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ContactForm;
