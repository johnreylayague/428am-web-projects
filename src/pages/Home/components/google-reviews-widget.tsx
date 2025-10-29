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
    <div className={`mt-10 ${className ?? ''}`}>
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <div
        className={`elfsight-app-${appId} mx-auto`}
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviewsWidget;
