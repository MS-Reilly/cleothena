export interface ImageCarouselProps {
    images: string[];
    interval?: number;
    imageWidth?: string;
    imageHeight?: string;
    onSlideChange?: (index: number) => void;
    borderRadius?: string;
}
