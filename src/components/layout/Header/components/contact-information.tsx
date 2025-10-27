import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';

interface ContactLink {
  text: string;
  link: string;
}

interface ContactInformationProps {
  phoneNumber?: ContactLink;
  email?: ContactLink;
  address?: string;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  phoneNumber,
  email,
  address,
}) => {
  return (
    <ul
      className={clsx(
        'flex gap-8 items-center',
        '*:flex *:items-center *:gap-3 *:[&_a]:flex *:[&_a]:items-center *:[&_a]:gap-3',
        '*:text-white *:[&_svg]:text-theme-golden-yellow '
      )}
    >
      {phoneNumber && (
        <li>
          <a href={phoneNumber.link}>
            <FontAwesome icon="fa-solid fa-phone-volume" />
            <span>{phoneNumber.text}</span>
          </a>
        </li>
      )}

      {email && (
        <li>
          <a href={email.link}>
            <FontAwesome icon="fa-regular fa-envelope" />
            <span>{email.text}</span>
          </a>
        </li>
      )}

      {address && (
        <li>
          <FontAwesome icon="fa-solid fa-location-dot" />
          <address className="not-italic">{address}</address>
        </li>
      )}
    </ul>
  );
};

export default ContactInformation;
