import React from 'react';
import clsx from 'clsx';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  imageClassName,
}) => {
  return (
    <figure className={clsx('w-full', className)}>
      <img
        src={src}
        alt={alt}
        className={clsx(
          'max-w-full w-full object-center object-contain',
          imageClassName
        )}
      />
    </figure>
  );
};

export default Image;
