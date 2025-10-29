import React from 'react';
import clsx from 'clsx';

interface ImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt, className }) => {
  return (
    <figure className={clsx('w-full', className)}>
      <img
        src={src}
        alt={alt}
        className={clsx('max-w-full w-full object-center object-contain')}
      />
    </figure>
  );
};

export default ImageWrapper;
