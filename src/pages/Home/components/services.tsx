import SectionHeader from '@/components/ui/app/section-header';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';
import ServiceCard from '@/pages/Home/components/service-card';
import ROUTES from '@/config/routes';
import { DEFAULT_IMAGE } from '@/config/constants';

interface ServiceItem {
  id: number;
  name: string;
  label: string;
  icon: string;
  link?: string;
  image?: string;
}

interface ServicesProps {
  services: ServiceItem[];
  headerTitle: string;
  headerSubtitle: string;
  headerLabel: string;
}

const Services: React.FC<ServicesProps> = ({
  services,
  headerTitle,
  headerSubtitle,
  headerLabel,
}) => {
  return (
    <Wrapper className={clsx('pt-20 pb-40', 'bg-gray-100')}>
      <Container>
        <SectionHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          label={headerLabel}
        />

        <div
          className={clsx('mt-30 grid grid-cols-12 relative gap-y-10 gap-x-5')}
        >
          {services.map(({ icon, id, label, link, image }) => {
            return (
              <ServiceCard
                key={id}
                src={image ?? DEFAULT_IMAGE}
                alt={label}
                label={label}
                buttonLink={link ?? ROUTES.SERVICES.path}
                buttonText="Learn More"
                icon={icon}
              />
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Services;
