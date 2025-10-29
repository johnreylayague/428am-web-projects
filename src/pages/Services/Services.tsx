import Text from '@/components/common/text';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import Gallery from '@/pages/Services/components/gallery';
import clsx from 'clsx';
import React from 'react';

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <React.Fragment>
      <Wrapper className={clsx('pt-25 pb-35')}>
        <Container>
          <Gallery />
          <h3 className={clsx('font-medium text-4xl mt-5', 'text-theme-navy')}>
            Drianage
          </h3>
          <Text>asd</Text>
          <ul
            role="list"
            className={clsx('list-disc pl-5 mt-2 text-sm', 'text-fog-steel')}
          >
            <li>wewewe</li>
            <li>wewewe</li>
            <li>wewewe</li>
          </ul>

          <div className="relative w-full h-120">
            <video
              className={clsx('h-120 w-full')}
              controls
              poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={clsx('grid grid-cols-12 mt-5 relative gap-5')}>
            <div className="col-span-6">
              <div className="relative w-full h-120">
                <video
                  className={clsx('h-120 w-full')}
                  controls
                  poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-span-6">
              <h3
                className={clsx('font-medium text-4xl mt-5', 'text-theme-navy')}
              >
                We offer:
              </h3>
              <ul
                role="list"
                className={clsx(
                  'list-disc pl-5 mt-2 text-sm',
                  'text-fog-steel'
                )}
              >
                <li>wewewe</li>
                <li>wewewe</li>
                <li>wewewe</li>
              </ul>
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default ServicesPage;
