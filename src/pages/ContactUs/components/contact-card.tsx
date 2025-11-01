import type { IconKeys } from '@/components/common/fontawesome.helpers';
import IconCircle from '@/components/ui/app/icon-circle';
import clsx from 'clsx';
import React from 'react';

interface ContactLink {
  text: string;
  href: string;
}

interface ContactCardProps {
  title: string;
  icon: IconKeys;
  phoneNumber?: ContactLink;
  link?: ContactLink;
  details?: string;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  className,
  link,
  details,
}) => {
  return (
    <div
      className={clsx(
        'group p-10 rounded-xs flex gap-5 transition-ease flex-col items-center text-center',
        'hover:cursor-pointer',
        'lg:flex-row lg:text-left',
        'bg-gray-100 hover:bg-theme-orange',
        className
      )}
    >
      <IconCircle
        iconProps={{ icon, size: '2x', className: 'text-theme-navy' }}
        className={clsx('size-16', 'bg-white')}
      />
      <div className={clsx('space-y-3')}>
        <h5
          className={clsx(
            'text-2xl font-semibold transition-ease',
            'text-theme-navy group-hover:text-white'
          )}
        >
          {title}
        </h5>
        {details && (
          <address
            className={clsx(
              'not-italic transition-ease',
              'group-hover:text-white'
            )}
          >
            {details}
          </address>
        )}
        {link && (
          <a
            href={link.href}
            className={clsx(
              'transition-ease',
              'text-gray-500 group-hover:text-white'
            )}
          >
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
