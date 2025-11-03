import SectionHeader from '@/components/ui/app/section-header';
import Container from '@/components/layout/container';
import clsx from 'clsx';
import React from 'react';
import ServiceCard from '@/pages/Home/components/service-card';
import ROUTES from '@/config/routes';
import { DEFAULT_IMAGE } from '@/config/constants';
import Wrapper from '@/components/layout/wrapper';

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
    <Wrapper className={clsx('py-20', 'md:py-20 md:pb-40', 'bg-gray-100')}>
      <Container>
        <SectionHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          label={headerLabel}
          className={clsx('')}
          titleClassName={clsx('text-base md:text-lg')}
          subtitleClassName={clsx('text-3xl md:text-4xl')}
          labelClassName={clsx('text-6xl sm:text-7xl md:text-9xl')}
        />

        <div
          className={clsx(
            'mt-15 grid grid-cols-12 relative gap-y-10 gap-x-5',
            'md:mt-20 lg:mt-30'
          )}
        >
          {services.map(({ icon, id, label, link, image }) => {
            return (
              <div
                key={id}
                className={clsx(
                  'col-span-12 relative',
                  'min-[400px]:col-span-6',
                  'sm:col-span-6',
                  'lg:col-span-3'
                )}
              >
                <ServiceCard
                  key={id}
                  src={image ?? DEFAULT_IMAGE}
                  alt={label}
                  label={label}
                  buttonLink={link ?? ROUTES.SERVICES.path}
                  buttonText="Learn More"
                  icon={icon}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Services;
