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
    <figure className={cn('w-full max-w-full', className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          'max-w-full w-full object-center object-contain',
          imageClassName
        )}
      />
    </figure>
  );
};

export default Image;
