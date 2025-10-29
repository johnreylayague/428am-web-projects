import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import Banner from '@/components/ui/app/banner';
import clsx from 'clsx';
import React from 'react';

interface InstagramProps {}

const Instagram: React.FC<InstagramProps> = () => {
  return (
    <React.Fragment>
      <Banner title="Instagram" />
      <Wrapper className={clsx('pt-15 pb-25')}>
        <Container>
          <p
            className={clsx(
              'text-center mt-6 text-gray-600 text-lg md:text-xl font-medium'
            )}
          >
            Stay tuned! Exciting Instagram updates are coming soon.
          </p>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Instagram;
