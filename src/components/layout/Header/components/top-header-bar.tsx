import React from 'react';
import clsx from 'clsx';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import ContactInformation from '@/components/layout/Header/components/contact-information';
import SocialLinks from '@/components/layout/Header/components/social-links';
import type { IconKeys } from '@/components/common/fontawesome.types';

export interface SocialLinkItem {
  icon: IconKeys;
  link: string;
}

export interface TopHeaderBarProps {
  address: string;
  phoneNumber: { text: string; link: string };
  email: { text: string; link: string };
  socialLinks: SocialLinkItem[];
  className?: string;
}

const TopHeaderBar: React.FC<TopHeaderBarProps> = ({
  address,
  phoneNumber,
  email,
  socialLinks,
  className,
}) => {
  return (
    <Wrapper className={clsx('bg-theme-navy', 'hidden', className)}>
      <Container>
        <div
          className={clsx(
            'py-3 flex flex-col gap-y-2 items-center justify-between'
          )}
        >
          <ContactInformation
            address={address}
            phoneNumber={phoneNumber}
            email={email}
          />

          <SocialLinks links={socialLinks} />
        </div>
      </Container>
    </Wrapper>
  );
};

export default TopHeaderBar;
