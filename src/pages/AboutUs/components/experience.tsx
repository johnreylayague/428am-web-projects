import React from 'react';
import clsx from 'clsx';

interface ExperienceProps {
  number: string | number;
  label: React.ReactNode;
  bgImage: string;
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  number,
  label,
  bgImage,
  className,
}) => {
  return (
    <h4
      className={clsx('flex items-center justify-center flex-col', className)}
    >
      <span
        className={clsx(
          'block font-bold leading-none text-transparent bg-clip-text bg-cover bg-center',
          'text-[400px]'
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {number}
      </span>
      <span
        className={clsx('capitalize text-base font-medium -mt-5 text-gray-600')}
      >
        {label}
      </span>
    </h4>
  );
};

export default Experience;
