import IconCircle from '@/components/common/icon-circle';
import clsx from 'clsx';
import React from 'react';

interface SocialLinksProps {
  facebookUrl?: string;
  instagramUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  facebookUrl,
  instagramUrl,
}) => {
  return (
    <div className={clsx('flex gap-3 relative')}>
      <IconCircle
        iconProps={{
          icon: 'fa-brands fa-facebook',
        }}
        href={facebookUrl}
        className="bg-blue-800"
      />
      <IconCircle
        iconProps={{
          icon: 'fa-brands fa-instagram',
        }}
        href={instagramUrl}
        className="bg-pink-600"
      />
    </div>
  );
};

export default SocialLinks;
