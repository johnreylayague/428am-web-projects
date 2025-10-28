import CTAButtonLink from '@/components/common/cta-button-link';
import IconCircle from '@/components/common/icon-circle';
import SectionHeader from '@/components/common/section-header';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import clsx from 'clsx';
import React from 'react';

const SERVICES = [
  {
    id: 1,
    name: 'draining',
    label: 'Draining',
    icon: 'fa-solid fa-water',
  },
  {
    id: 2,
    name: 'hardscaping',
    label: 'Hardscaping',
    icon: 'fa-solid fa-mountain',
  },
  {
    id: 3,
    name: 'carpentry',
    label: 'Carpentry',
    icon: 'fa-solid fa-hammer',
  },
  {
    id: 4,
    name: 'pressure_washing',
    label: 'Pressure Washing',
    icon: 'fa-solid fa-spray-can',
  },
  {
    id: 5,
    name: 'window_cleaning',
    label: 'Window Cleaning',
    icon: 'fa-solid fa-window-maximize',
  },
  {
    id: 6,
    name: 'gutter_cleaning',
    label: 'Gutter Cleaning',
    icon: 'fa-solid fa-water-ladder',
  },
  {
    id: 7,
    name: 'moss_removal',
    label: 'Moss Removal',
    icon: 'fa-solid fa-leaf',
  },
  {
    id: 8,
    name: 'painting',
    label: 'Painting',
    icon: 'fa-solid fa-paint-roller',
  },
];

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <Wrapper className={clsx('pt-20 pb-40', 'bg-gray-100')}>
      <Container>
        <SectionHeader
          title="Our Services"
          subtitle="What We Do"
          label="Services"
        />
        <div className={clsx('mt-30')}>
          <div className={clsx('grid grid-cols-12 relative gap-y-10 gap-x-5')}>
            {SERVICES.map((service) => (
              <div key={service.id} className={clsx('col-span-3')}>
                <div
                  className={clsx(
                    'flex items-center flex-col gap-10 rounded-sm py-15 px-10 relative',
                    'bg-white'
                  )}
                >
                  <IconCircle
                    iconProps={{
                      icon: 'fa-brands fa-facebookF',
                      size: '3x',
                    }}
                    className="size-25"
                  />
                  <span
                    className={clsx('font-medium text-2xl', 'text-theme-navy')}
                  >
                    {service.label}
                  </span>

                  <CTAButtonLink
                    buttonLink="/"
                    iconProps={{
                      icon: 'fa-solid fa-right-long',
                      size: 'xs',
                      className: 'text-theme-orange group-hover:text-white',
                    }}
                    className={clsx(
                      'absolute left-1/2 -translate-x-1/2 -bottom-7 shadow-none rounded-xs p-5 mb-0',
                      'bg-gray-100'
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Services;
