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
      className={cn('relative w-full max-w-full min-h-120 mt-10', className)}
    >
      <video
        className={cn(
          'w-full min-h-120 max-w-full object-cover object-center',
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
