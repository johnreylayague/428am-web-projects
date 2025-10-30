import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React, { useEffect } from 'react';

interface GoogleReviewsWidgetProps {
  appId?: string;
}

const GoogleReviewsWidget: React.FC<GoogleReviewsWidgetProps> = ({ appId }) => {
  useEffect(() => {
    if (!document.getElementById('elfsight-script')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.id = 'elfsight-script';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Wrapper className={clsx('mt-10')}>
      <Container>
        <div
          className={`elfsight-app-${appId} mx-auto`}
          data-elfsight-app-lazy
        ></div>
      </Container>
    </Wrapper>
  );
};

export default GoogleReviewsWidget;
