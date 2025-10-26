import React from 'react';
// Components
import Mark from '@/components/common/mark';
import IconCircle from '@/components/layout/Footer/components/icon-circle';
import InfoItem from '@/components/layout/Footer/components/info-item';
// Clsx
import clsx from 'clsx';

interface ContactInformationProps {
  title: string;
  phoneNumber?: string;
  email?: string;
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
        'flex flex-col items-center  justify-center',
        'lg:items-start lg:justify-start'
      )}
    >
      {/* Section Title */}
      <h5 className={clsx('text-xl font-bold mb-10', 'text-white')}>{title}</h5>

      {/* Contact Info List */}
      <ul
        className={clsx(
          'space-y-5',
          '*:flex *:items-center  *:gap-4 *:justify-center *:flex-col *:[&_div]:last:text-center lg:*:[&_div]:last:text-left lg:*:justify-start lg:*:flex-row lg:*:gap-8',
          '*:[&_div_h6]:text-theme-light-gray',
          '*:[&_div_h6]:text-sm'
        )}
      >
        {/* Phone */}
        <li>
          <IconCircle icon="fa-solid fa-phone-flip" />
          <InfoItem
            title="Phone Number"
            content={
              <Mark className={clsx('text-xl font-semibold', 'text-white')}>
                {phoneNumber}
              </Mark>
            }
          />
        </li>

        {/* Email */}
        <li>
          <IconCircle icon="fa-regular fa-envelope" />
          <InfoItem
            title="Email Address"
            content={
              <a
                href={`mailto:${email}`}
                className={clsx('text-xl font-semibold', 'text-white')}
              >
                {email}
              </a>
            }
          />
        </li>

        {/* Address */}
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
      </ul>
    </div>
  );
};

export default ContactInformation;
