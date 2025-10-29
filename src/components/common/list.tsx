import { cn } from '@/lib/utils';
import React from 'react';

interface ListProps {
  items: string[];
  className?: string;
}

const List: React.FC<ListProps> = ({ items, className }) => {
  return (
    <ul
      role="list"
      className={cn(
        'list-disc pl-5 mt-2 text-sm ',
        'text-fog-steel',
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
