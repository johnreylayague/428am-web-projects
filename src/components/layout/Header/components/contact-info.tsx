import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';
import type { IconKeys } from '@/components/common/fontawesome.helpers';

export interface ContactInfoItem {
  icon: IconKeys;
  heading: string;
  content: string;
  href?: string;
}

interface ContactInfoProps {
  items: ContactInfoItem[];
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ items, className }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul
      className={clsx(
        'mt-12 flex flex-col gap-5',
        '*:flex *:gap-3 *:items-center ',
        '*:[&>div]:last:space-y-1 *:[&>div>a]:text-sm *:[&>div>address]:text-sm *:[&>div>h6]:text-sm *:[&>div>h6]:font-semibold',
        'text-white',
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index}>
          <div>
            <FontAwesome icon={item.icon} size="lg" />
          </div>
          <div>
            <h6>{item.heading}</h6>
            {item.href ? (
              <a href={item.href}>{item.content}</a>
            ) : (
              <address>{item.content}</address>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;
