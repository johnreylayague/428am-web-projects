import React from 'react';
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {
  iconDictionary,
  type IconKeys,
} from '@/components/common/fontawesome.helpers';

interface FontAwesomeProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconKeys;
  className?: string;
}

const FontAwesome: React.FC<FontAwesomeProps> = ({
  icon,
  className,
  ...props
}) => {
  return (
    <FontAwesomeIcon
      icon={iconDictionary[icon]}
      {...(className ? { className: clsx(className) } : {})}
      {...props}
    />
  );
};

export default FontAwesome;
