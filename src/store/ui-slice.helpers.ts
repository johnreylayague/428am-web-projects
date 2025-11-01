export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const getBreakpointFromWidth = (width: number): Breakpoint => {
  if (width >= 1536) return '2xl';
  if (width >= 1280) return 'xl';
  if (width >= 1024) return 'lg';
  if (width >= 768) return 'md';
  if (width >= 640) return 'sm';
  return 'xs';
};

export const getInitialScreenSize = (): Breakpoint | undefined => {
  if (typeof window === 'undefined') return undefined;
  return getBreakpointFromWidth(window.innerWidth);
};

export const getInitialScreenWidth = (): number | undefined => {
  if (typeof window === 'undefined') return undefined;
  return window.innerWidth;
};
