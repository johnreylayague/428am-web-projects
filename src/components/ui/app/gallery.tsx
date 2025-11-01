import clsx from 'clsx';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/shadcn/carousel';
import FontAwesome from '@/components/common/fontawesome';
import Autoplay from 'embla-carousel-autoplay';
import Wrapper from '@/components/layout/wrapper';
import type { IconKeys } from '@/components/common/fontawesome.helpers';
import { useCarousel } from '@/hooks/useCarousel';
import Image from '@/components/common/image';
import { cn } from '@/lib/utils';

interface CarouselNavigationButtonProps {
  onClick: () => void;
  icon: IconKeys;
  position: 'left' | 'right';
  className?: string;
}

interface GalleryProps {
  className?: string;
  imageClassName?: string;
  items: string[];
}

const Gallery: React.FC<GalleryProps> = ({
  items,
  className,
  imageClassName,
}) => {
  const { setApi, handlePrev, handleNext } = useCarousel();

  return (
    <Wrapper disablePaddingX>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className={cn('w-full', className)}
        setApi={setApi}
      >
        <CarouselContent>
          {items.map((src, index) => (
            <CarouselItem key={index}>
              <Image
                alt=""
                src={src}
                className={clsx('select-none', imageClassName)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNavigationButton
          onClick={handlePrev}
          icon="fa-solid fa-chevron-left"
          position="left"
        />
        <CarouselNavigationButton
          onClick={handleNext}
          icon="fa-solid fa-chevron-right"
          position="right"
        />
      </Carousel>
    </Wrapper>
  );
};

export default Gallery;

const CarouselNavigationButton: React.FC<CarouselNavigationButtonProps> = ({
  onClick,
  icon,
  position,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'cursor-pointer top-1/2 -translate-y-1/2 absolute',
        position === 'left' ? 'left-0 lg:left-3' : 'right-0 lg:right-3',
        className
      )}
      aria-label={position === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <FontAwesome icon={icon} className={clsx('text-5xl', 'text-gray-300')} />
    </button>
  );
};
