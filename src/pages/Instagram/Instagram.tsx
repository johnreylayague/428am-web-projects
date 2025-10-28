import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import React from 'react';

interface InstagramProps {}

const Instagram: React.FC<InstagramProps> = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <h1>Instagram</h1>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Instagram;
