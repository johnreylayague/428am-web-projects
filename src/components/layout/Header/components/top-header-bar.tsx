import React from 'react';
import clsx from 'clsx';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import ContactInformation from '@/components/layout/Header/components/contact-information';
import SocialLinks from '@/components/layout/Header/components/social-links';
import type { IconKeys } from '@/components/common/fontawesome.helpers';
import type { divRefType } from '@/components/layout/Header/Header';

export interface SocialLinkItem {
  icon: IconKeys;
  href: string;
}

export interface TopHeaderBarProps {
  address: string;
  phoneNumber: { text: string; link: string };
  email: { text: string; link: string };
  socialLinks: SocialLinkItem[];
  className?: string;
  divRef: React.RefObject<divRefType>;
}

const TopHeaderBar: React.FC<TopHeaderBarProps> = ({
  address,
  phoneNumber,
  email,
  socialLinks,
  className,
  divRef,
}) => {
  return (
    <Wrapper
      innerRef={divRef}
      className={clsx('hidden lg:block', 'bg-theme-navy', className)}
    >
      <Container
        className={clsx(
          'py-3 flex flex-col gap-y-2 justify-between',
          'lg:flex-row'
        )}
      >
        <ContactInformation
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        />

        <SocialLinks links={socialLinks} />
      </Container>
    </Wrapper>
  );
};

export default TopHeaderBar;
