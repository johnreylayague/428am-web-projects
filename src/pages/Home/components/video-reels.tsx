import VideoPlayer from '@/components/common/video-player';
import Wrapper from '@/components/layout/wrapper';
import Container from '@/components/layout/container';
import clsx from 'clsx';
import React from 'react';
import SectionHeader from '@/components/ui/app/section-header';

interface VideoReelsProps {
  title: string;
  subtitle: string;
  src: string;
  poster: string;
}

const VideoReels: React.FC<VideoReelsProps> = ({
  title,
  subtitle,
  src,
  poster,
}) => {
  return (
    <Wrapper className={clsx('py-20')}>
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          className={clsx('max-w-3xl')}
        />

        <VideoPlayer
          videoClassName={clsx('h-160')}
          className={clsx('h-160')}
          src={src}
          poster={poster}
        />
      </Container>
    </Wrapper>
  );
};

export default VideoReels;
