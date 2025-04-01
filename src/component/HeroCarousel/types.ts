// types.ts
import React from 'react';

export interface HeroCarouselProps {
  /** Enable auto-play? */
  autoPlay?: boolean;
  /** Interval in ms between slide transitions when autoPlay is true */
  autoPlayInterval?: number;
  /** Additional CSS class for the root container */
  className?: string;
  /** The slides to display (e.g. <FullScreenHero> children) */
  children?: React.ReactNode;
}
