import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React, { useEffect } from 'react';

interface GoogleReviewsWidgetProps {
  appId: string;
  scriptSrc: string;
  disableScriptLoad?: boolean; // if true, script will NOT be loaded
}

const GoogleReviewsWidget: React.FC<GoogleReviewsWidgetProps> = ({
  appId,
  scriptSrc,
  disableScriptLoad,
}) => {
  useEffect(() => {
    // Only load the script if disableScriptLoad is strictly false or undefined
    if (disableScriptLoad) return;
    if (!scriptSrc) return;
    if (!document.getElementById('elfsight-script')) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.id = 'elfsight-script';
      document.body.appendChild(script);
    }
  }, [scriptSrc, disableScriptLoad]);

  if (disableScriptLoad) {
    return null;
  }

  return (
    <Wrapper className={clsx('pb-35')}>
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
