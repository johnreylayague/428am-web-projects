import React from 'react';
import clsx from 'clsx';
import TextWithBoldWords from '@/pages/AboutUs/components/text-with-bold-words';

interface ExperienceProps {
  number: string | number;
  label: string;
  boldWords?: string | string[];
  bgImage: string;
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  number,
  label,
  boldWords,
  bgImage,
  className,
}) => {
  return (
    <h4
      className={clsx('flex items-center justify-center flex-col', className)}
    >
      <span
        className={clsx(
          'block text-[250px] font-bold leading-none text-transparent bg-(image:--card-bg) bg-clip-text bg-bottom bg-size-[1500px] bg-no-repeat ',
          'lg:text-[500px] lg:bg-size-[3000px]'
        )}
        style={
          {
            '--card-bg': `url(${bgImage})`,
          } as React.CSSProperties
        }
      >
        {number}
      </span>
      <span
        className={clsx(
          'capitalize text-base font-semibold text-center',
          'lg:-mt-5 lg:text-left lg:text-xl',
          'text-gray-600'
        )}
      >
        <TextWithBoldWords label={label} boldWords={boldWords} />
      </span>
    </h4>
  );
};

export default Experience;
