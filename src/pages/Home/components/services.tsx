import SectionHeader from '@/components/ui/app/section-header';
import Container from '@/components/layout/container';
import clsx from 'clsx';
import React from 'react';
import ServiceCard from '@/pages/Home/components/service-card';
import ROUTES from '@/config/routes';
import { DEFAULT_IMAGE } from '@/config/constants';
import Wrapper from '@/components/layout/wrapper';
import GridSection from '@/components/layout/grid-section';

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
    <React.Fragment>
      <Wrapper className={clsx('pt-20 pb-140 ', 'bg-gray-100')}>
        <Container className="">
          <SectionHeader
            title={headerTitle}
            subtitle={headerSubtitle}
            label={headerLabel}
          />
        </Container>
      </Wrapper>

      <Wrapper className={clsx('-mt-130 pb-40', 'bg-transparent')}>
        <Container className="">
          <GridSection className={clsx('gap-y-10 gap-x-5', 'lg:gap-x-5')}>
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
          </GridSection>
        </Container>
      </Wrapper>
    </React.Fragment>

    // </React.Fragment>
  );
};

export default Services;
