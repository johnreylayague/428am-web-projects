import { useEffect, useState } from 'react';
import type { CarouselApi } from '@/components/ui/shadcn/carousel';

interface UseCarouselReturn {
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi | undefined) => void;
  current: number;
  count: number;
  canPrev: boolean;
  canNext: boolean;
  handlePrev: () => void;
  handleNext: () => void;
}

export const useCarousel = (): UseCarouselReturn => {
  const [api, setApi] = useState<CarouselApi>();
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

  return {
    api,
    setApi,
    current,
    count,
    canPrev,
    canNext,
    handlePrev,
    handleNext,
  };
};
