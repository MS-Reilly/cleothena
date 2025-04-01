// HeroCarousel.tsx
import React, { useEffect, useRef, useState } from 'react';
import { HeroCarouselProps } from './types';
import './styles.scss';

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  autoPlay = false,
  autoPlayInterval = 5000,
  className = '',
  children,
}) => {
  
    
    const slidesArray = React.Children.toArray(children).flatMap((child) =>
        React.isValidElement(child) && child.type === React.Fragment
          ? React.Children.toArray(child.props.children)
          : [child]
      );
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play effect
  useEffect(() => {
    if (autoPlay && slidesArray.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slidesArray.length);
      }, autoPlayInterval);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, slidesArray.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesArray.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesArray.length) % slidesArray.length);
  };

  return (
    <div className={`hero-carousel horizontal ${className}`.trim()}>
      {/* The 'track' that contains all slides in a row */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Each child becomes a 'slide' */}
        {slidesArray.map((slide, idx) => (
          <div key={idx} className="carousel-slide">
            {slide}
          </div>
        ))}
      </div>

      {/* Show nav buttons if more than 1 slide */}
      {slidesArray.length > 1 && (
        <>
          <button className="nav-button prev" onClick={handlePrev}>
            &lt;
          </button>
          <button className="nav-button next" onClick={handleNext}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default HeroCarousel;
