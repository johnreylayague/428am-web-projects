import FontAwesome from '@/components/common/fontawesome';
import clsx from 'clsx';
import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className,
  starClassName,
}) => {
  return (
    <div className={clsx('flex gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <FontAwesome
          key={i}
          icon={i < rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}
          {...(starClassName
            ? { className: starClassName }
            : { className: 'text-yellow-400' })}
        />
      ))}
    </div>
  );
};
