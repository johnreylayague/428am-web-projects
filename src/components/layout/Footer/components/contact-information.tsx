import React from 'react';
// Components
import IconCircle from '@/components/layout/Footer/components/icon-circle';
import InfoItem from '@/components/layout/Footer/components/info-item';
// Clsx
import clsx from 'clsx';

interface ContactLink {
  text: string;
  link: string;
}

interface ContactInformationProps {
  title: string;
  phoneNumber?: ContactLink;
  email?: ContactLink;
  address?: string;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  title,
  phoneNumber,
  email,
  address,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'lg:items-start lg:justify-start'
      )}
    >
      {/* Section Title */}
      <h5 className={clsx('text-xl font-bold mb-10', 'text-white')}>{title}</h5>

      {/* Contact Info List */}
      <ul
        className={clsx(
          'space-y-5',
          '*:flex *:items-center *:gap-4 *:justify-center *:flex-col *:[&_div]:last:text-center *:[&_div_h6]:text-sm',
          'lg:*:[&_div]:last:text-left lg:*:justify-start lg:*:flex-row lg:*:gap-8',
          '*:[&_div_h6]:text-theme-light-gray'
        )}
      >
        {/* Phone */}
        {phoneNumber && (
          <li>
            <IconCircle icon="fa-solid fa-phone-flip" />
            <InfoItem
              title="Phone Number"
              content={
                <a
                  href={phoneNumber.link}
                  className={clsx(
                    'text-xl font-semibold transition-all duration-400 ease-in-out',
                    'hover:text-theme-blue text-white'
                  )}
                >
                  {phoneNumber.text}
                </a>
              }
            />
          </li>
        )}

        {/* Email */}
        {email && (
          <li>
            <IconCircle icon="fa-regular fa-envelope" />
            <InfoItem
              title="Email Address"
              content={
                <a
                  href={email.link}
                  className={clsx(
                    'text-xl font-semibold transition-all duration-400 ease-in-out',
                    'hover:text-theme-blue text-white'
                  )}
                >
                  {email.text}
                </a>
              }
            />
          </li>
        )}

        {/* Address */}
        {address && (
          <li>
            <IconCircle icon="fa-solid fa-location-dot" />
            <InfoItem
              title="Location"
              content={
                <address
                  className={clsx(
                    'text-xl font-semibold not-italic',
                    'text-white'
                  )}
                >
                  {address}
                </address>
              }
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactInformation;
