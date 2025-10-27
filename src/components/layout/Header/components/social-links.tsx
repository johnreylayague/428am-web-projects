import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';
import type { IconKeys } from '@/components/common/fontawesome.types';

interface SocialLink {
  icon: IconKeys;
  link: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className }) => {
  if (!links || links.length === 0) return null;

  return (
    <ul className={clsx('flex gap-3 text-white', className)}>
      {links.map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social media link"
          >
            <FontAwesome icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
