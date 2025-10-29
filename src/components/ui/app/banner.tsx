import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React from 'react';

type BannerProps =
  | { title: string; src: string; alt: string }
  | { title: string; src?: undefined; alt?: undefined };

const Banner: React.FC<BannerProps> = ({ src, alt, title }) => {
  const hasImage = Boolean(src);

  return (
    <Wrapper
      className={clsx(
        'relative py-28 overflow-hidden',

        !hasImage && 'bg-fog-blue'
      )}
    >
      {hasImage && (
        <figure
          className={clsx(
            'absolute inset-0 size-full',
            'before:absolute before:inset-0 before:bg-black/15 before:size-full'
          )}
        >
          <img
            src={src}
            alt={alt}
            className={clsx('size-full object-center object-cover')}
          />
        </figure>
      )}

      <Container>
        <h2 className={clsx('text-center text-6xl font-bold', 'text-white')}>
          {title}
        </h2>
      </Container>
    </Wrapper>
  );
};

export default Banner;
