import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import clsx from 'clsx';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Wrapper className={clsx('py-20')}>
        <Container>asd</Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default HomePage;
