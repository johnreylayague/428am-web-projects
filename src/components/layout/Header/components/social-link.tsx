import React from 'react';
import clsx from 'clsx';
import FontAwesome from '@/components/common/fontawesome';
import type { IconKeys } from '@/components/common/fontawesome.helpers';

export interface SocialLinkItem {
  href: string;
  icon: IconKeys;
}

interface SocialLinksProps {
  links: SocialLinkItem[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className }) => {
  if (!links || links.length === 0) return null;

  return (
    <ul className={clsx('flex gap-3 mt-6', 'text-white', className)}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <FontAwesome icon={link.icon} size="1x" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
