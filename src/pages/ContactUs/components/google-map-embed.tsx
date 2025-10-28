import clsx from 'clsx';
import React from 'react';

interface GoogleMapEmbedProps {
  src: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ src }) => {
  return (
    <div className={clsx('h-75 w-full')}>
      <iframe
        src={src}
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
