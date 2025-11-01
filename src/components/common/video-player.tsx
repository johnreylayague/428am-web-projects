import React from 'react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  videoClassName?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className,
  videoClassName,
}) => {
  return (
    <div
      className={cn(
        'relative w-full max-w-full h-100 mt-10',
        'lg:h-150',
        className
      )}
    >
      <video
        className={cn(
          'w-full h-100 max-w-full object-contain object-center',
          'lg:h-150',
          videoClassName
        )}
        controls
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
