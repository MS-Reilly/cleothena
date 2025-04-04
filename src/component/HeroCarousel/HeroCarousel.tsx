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

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const swipeThreshold = 50; // pixels

  const handleTouchStart = (e: React.TouchEvent) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > swipeThreshold
    ) {
      if (touchStartX.current > touchEndX.current) {
        handleNext(); // Swiped left
      } else {
        handlePrev(); // Swiped right
      }
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesArray.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slidesArray.length) % slidesArray.length);
  };

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

  return (
    <div className={`hero-carousel horizontal ${className}`.trim()}>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slidesArray.map((slide, idx) => (
          <div key={idx} className="carousel-slide">
            {slide}
          </div>
        ))}
      </div>

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
