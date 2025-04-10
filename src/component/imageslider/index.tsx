import { useState, useEffect } from "react";
import { ImageSliderProps } from "./sliderType";
import { useStyle } from "./indexstyle";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import SvgChevronRight from "../../custom-icons/ChevronRight";

const ImageSlider = ({
  images,
  autoPlay = true,
  interval = 3000,
}: ImageSliderProps) => {
  const classes = useStyle();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ishover, setIsHover] = useState<boolean>(false);

  // Handle next slide
  const nextSlide = () => {
    if (images.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    if (images.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, images.length]);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={classes.sliderContainer}
    >
      {/* Slides container */}
      <div
        className={classes.sliderTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={classes.slide}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {ishover && (
        <>
          <div className={classes.navigationLeftButton}>
            <SvgChevronLeft
              className={classes.prevButton}
              onClick={prevSlide}
            />
          </div>
          <div className={classes.navigationRightButton}>
            <SvgChevronRight
              className={classes.nextButton}
              onClick={nextSlide}
            />
          </div>
        </>
      )}

      {/* Dots indicator  */}
      <div className={classes.dotsContainer}>
        {images.map((_, index) => (
          <div
            onClick={() => goToSlide(index)}
            className={
              index === currentIndex ? classes.activeDot : classes.nonActive
            }
          >
            <div key={index} className={classes.dot} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
