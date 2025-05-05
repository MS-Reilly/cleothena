import { useState, useEffect, useRef } from "react";
import { ImageCarouselProps } from "./ImageCarousel.types";
import { useTheme } from "../../theme/hooks/useTheme";
import "./ImageCarousel.scss";

const ImageCarousel = ({
  images,
  title = "Section Title",
  interval = 3000,
  imageWidth = "80%",
  imageHeight = "auto",
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const theme = useTheme() || {};

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, interval, images.length]);

  return (
    <div
      className="image-carousel"
      style={{ fontFamily: theme.typography?.fontFamily }}
    >
      <h3 className="carousel-title">{title}</h3>
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ width: imageWidth, height: imageHeight }}
          >
            <img src={img} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundColor:
                index === currentIndex
                  ? theme.colors?.primary || "#FF9F1A"
                  : "#ccc",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
