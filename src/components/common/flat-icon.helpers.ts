import type React from 'react';

export const FALLBACK_ICON = 'question' as const;

export const flatIconMap = {
  sewage: 'bg-[url(assets/images/icons/white/sewage.png)]',
  question: 'bg-[url(assets/images/icons/white/question.png)]',
  'paint-roller': 'bg-[url(assets/images/icons/white/paint-roller.png)]',
  material: 'bg-[url(assets/images/icons/white/material.png)]',
  gutter: 'bg-[url(assets/images/icons/white/gutter.png)]',
  window: 'bg-[url(assets/images/icons/white/window.png)]',
  washing: 'bg-[url(assets/images/icons/white/washing.png)]',
  excavator: 'bg-[url(assets/images/icons/white/excavator.png)]',
  pencil: 'bg-[url(assets/images/icons/white/pencil.png)]',
} as const;

export const flatIconHoverMap = {
  sewage: 'group-hover:bg-[url(assets/images/icons/orange/sewage.png)]',
  question: 'group-hover:bg-[url(assets/images/icons/orange/question.png)]',
  'paint-roller':
    'group-hover:bg-[url(assets/images/icons/orange/paint-roller.png)]',
  material: 'group-hover:bg-[url(assets/images/icons/orange/material.png)]',
  gutter: 'group-hover:bg-[url(assets/images/icons/orange/gutter.png)]',
  window: 'group-hover:bg-[url(assets/images/icons/orange/window.png)]',
  washing: 'group-hover:bg-[url(assets/images/icons/orange/washing.png)]',
  excavator: 'group-hover:bg-[url(assets/images/icons/orange/excavator.png)]',
  pencil: 'group-hover:bg-[url(assets/images/icons/orange/pencil.png)]',
} as const;

export const flatIconSelfHoverMap = {
  sewage: 'hover:bg-[url(assets/images/icons/orange/sewage.png)]',
  question: 'hover:bg-[url(assets/images/icons/orange/question.png)]',
  'paint-roller': 'hover:bg-[url(assets/images/icons/orange/paint-roller.png)]',
  material: 'hover:bg-[url(assets/images/icons/orange/material.png)]',
  gutter: 'hover:bg-[url(assets/images/icons/orange/gutter.png)]',
  window: 'hover:bg-[url(assets/images/icons/orange/window.png)]',
  washing: 'hover:bg-[url(assets/images/icons/orange/washing.png)]',
  excavator: 'hover:bg-[url(assets/images/icons/orange/excavator.png)]',
  pencil: 'hover:bg-[url(assets/images/icons/orange/pencil.png)]',
} as const;

export const DEFAULT_ICON_HOVER_CLASS =
  'group-hover:bg-[url(assets/images/icons/orange/question.png)]' as const;

export const DEFAULT_ICON_SELF_HOVER_CLASS =
  'hover:bg-[url(assets/images/icons/orange/question.png)]' as const;

export function resolveFlatIcon(icon: string): keyof typeof flatIconMap {
  return icon in flatIconMap
    ? (icon as keyof typeof flatIconMap)
    : FALLBACK_ICON;
}

export type FlatIconKey = keyof typeof flatIconMap;

export interface FlatIconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  icon: FlatIconKey;
}
