import clsx from 'clsx';
import React, { useEffect } from 'react';

interface GoogleReviewsWidgetProps {
  appId?: string;
  className?: string;
}

const GoogleReviewsWidget: React.FC<GoogleReviewsWidgetProps> = ({
  appId,
  className,
}) => {
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
    <div className={clsx('mt-10', className)}>
      <div
        className={`elfsight-app-${appId} mx-auto`}
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviewsWidget;
