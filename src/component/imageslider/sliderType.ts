// sliderType.ts
export interface ImageSlide {
  src: string;
  alt?: string;
}

export interface ImageSliderProps {
  images: ImageSlide[];
  autoPlay?: boolean;
  interval?: number;
}