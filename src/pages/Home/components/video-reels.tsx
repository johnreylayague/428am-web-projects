import SectionHeader from '@/components/common/section-header';
import Wrapper from '@/components/layout/Wrapper';
import Container from '@/components/layout/Container';
import React from 'react';
import clsx from 'clsx';

interface VideoReelsProps {}

const VideoReels: React.FC<VideoReelsProps> = () => {
  return (
    <Wrapper className={clsx('py-25')}>
      <Container>
        <SectionHeader
          subtitle="Watch more about us"
          title="showreel"
          className={clsx('max-w-xl mb-5')}
        />
        <div className="relative w-full h-120">
          <video
            className={clsx('h-120 w-full')}
            controls
            poster="https://via.placeholder.com/600x400.png?text=Video+Placeholder"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </Wrapper>
  );
};

export default VideoReels;
