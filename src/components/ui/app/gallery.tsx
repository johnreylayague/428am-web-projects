import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/shadcn/carousel';
import NH_2 from '@/assets/images/banner/non-home-2.jpg';
import NH_3 from '@/assets/images/banner/non-home-3.jpg';
import FontAwesome from '@/components/common/fontawesome';

const images: string[] = [NH_2, NH_3];

interface GalleryProps {}

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [canPrev, setCanPrev] = useState<boolean>(false);
  const [canNext, setCanNext] = useState<boolean>(false);

  useEffect(() => {
    if (!api) return;

    // Initialize state from API
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  // Handlers for custom buttons
  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <figure>
              <img
                src={src}
                alt=""
                className={clsx(
                  'select-none size-full object-center object-contain'
                )}
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <button
        onClick={handlePrev}
        className={clsx(
          'cursor-pointer top-1/2 -translate-y-1/2 absolute left-0'
        )}
      >
        <FontAwesome
          icon="fa-solid fa-chevron-left"
          size="4x"
          className={clsx('text-gray-300')}
        />
      </button>
      <button
        onClick={handleNext}
        className={clsx(
          'cursor-pointer top-1/2 -translate-y-1/2 absolute right-0'
        )}
      >
        <FontAwesome
          icon="fa-solid fa-chevron-right"
          size="4x"
          className={clsx('text-gray-300')}
        />
      </button>
    </Carousel>
  );
};

export default Gallery;
