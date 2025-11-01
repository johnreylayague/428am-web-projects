import { cn } from '@/lib/utils';
import React from 'react';
import {
  FALLBACK_ICON,
  flatIconHoverMap,
  flatIconMap,
  DEFAULT_ICON_HOVER_CLASS,
  flatIconSelfHoverMap,
  DEFAULT_ICON_SELF_HOVER_CLASS,
  type FlatIconProps,
} from '@/components/common/flat-icon.helpers';

const FlatIcon: React.FC<FlatIconProps> = ({ className, icon, ...props }) => {
  let finalIcon = icon;

  if (!flatIconMap[icon]) {
    finalIcon = FALLBACK_ICON as typeof finalIcon;
  }

  const iconClass = flatIconMap[finalIcon];

  const iconGroupHoverClass =
    flatIconHoverMap[finalIcon] || DEFAULT_ICON_HOVER_CLASS;
  const iconSelfHoverClass =
    flatIconSelfHoverMap[finalIcon] || DEFAULT_ICON_SELF_HOVER_CLASS;

  return (
    <i
      className={cn(
        'size-25 bg-contain bg-center bg-no-repeat inline-block transition-ease',
        iconClass,
        iconGroupHoverClass,
        iconSelfHoverClass,
        className
      )}
      {...props}
    ></i>
  );
};

export default FlatIcon;
