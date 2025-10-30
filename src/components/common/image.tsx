import React from 'react';
import { cn } from '@/lib/utils';

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
    <figure className={cn('size-full', className)}>
      <img
        src={src}
        alt={alt}
        className={cn('size-full object-center object-cover', imageClassName)}
      />
    </figure>
  );
};

export default Image;
