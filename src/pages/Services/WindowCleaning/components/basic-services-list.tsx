import clsx from 'clsx';
import React from 'react';

interface BasicServicesListProps {
  items: (string | React.ReactNode[])[];
  title?: string;
  className?: string;
  titleClassName?: string;
  listClassName?: string;
}

const BasicServicesList: React.FC<BasicServicesListProps> = ({
  items,
  title,
  className,
  titleClassName,
  listClassName,
}) => (
  <div className={className}>
    {title && (
      <h4 className={clsx('font-bold text-xl', 'text-black', titleClassName)}>
        {title}
      </h4>
    )}
    <ul
      role="list"
      className={clsx(
        'text-base font-bold list-disc pl-5 columns-1 w-full',
        'text-black',
        listClassName
      )}
    >
      {items.map((item, index) => (
        <li key={index}>{Array.isArray(item) ? item : item}</li>
      ))}
    </ul>
  </div>
);

export default BasicServicesList;
