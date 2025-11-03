import Strong from '@/components/common/strong';
import { cn } from '@/lib/utils';
import React from 'react';

type ListItemType = string | { label: string; description: string };

interface ListProps {
  items: ListItemType[];
  className?: string;
  listItemClassName?: string;
  labelSeparator?: string;
}

const List: React.FC<ListProps> = ({
  items,
  className,
  listItemClassName,
  labelSeparator,
}) => {
  return (
    <ul
      role="list"
      className={cn(
        'list-disc pl-5 text-base columns-2 w-full',
        'text-fog-steel',
        className
      )}
    >
      {items.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <li key={index} className={listItemClassName}>
              {item}
            </li>
          );
        }

        return (
          <li key={index} className={listItemClassName}>
            <Strong>{item.label}</Strong>
            {item.description &&
              labelSeparator &&
              ` ${labelSeparator} ${item.description}`}
            {item.description && !labelSeparator && ` ${item.description}`}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
