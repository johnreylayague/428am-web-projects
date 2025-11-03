import { LOGO_PNG_IMG } from '@/assets';
import Image from '@/components/common/image';
import clsx from 'clsx';
import React from 'react';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center pointer-events-none size-full',
        'bg-white'
      )}
    >
      <div
        className={clsx(
          'relative size-32 flex items-center justify-center',
          'before:content-[""] before:animate-spin before:absolute before:size-full before:top-1/2 before:left-1/2 before:-translate-1/2 before:border before:rounded-full',
          'before:border-l-theme-green before:border-r-moss-blue before:border-y-transparent'
        )}
      >
        <Image
          alt="company logo"
          src={LOGO_PNG_IMG}
          className={clsx('max-w-20 size-auto')}
        />
      </div>
    </div>
  );
};

export default Loading;
