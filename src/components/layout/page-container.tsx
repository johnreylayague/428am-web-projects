import React from 'react';
import clsx from 'clsx';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';

interface PageContainerProps {
  children?: React.ReactNode;
  wrapperClassName?: string;
  containerClassName?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  wrapperClassName,
  containerClassName,
}) => {
  return (
    <Wrapper className={clsx('pt-10 pb-25', 'lg:pt-15', wrapperClassName)}>
      <Container className={clsx('', containerClassName)}>
        <main>{children}</main>
      </Container>
    </Wrapper>
  );
};

export default PageContainer;
