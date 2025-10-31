import type React from 'react';
import type { flatIconMap } from '@/components/common/flat-icon.constants';

export type FlatIconKey = keyof typeof flatIconMap;

export interface FlatIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  icon: FlatIconKey;
}
