import { useState, useEffect } from "react";
import { useStyle } from "./indexStyle";
import fashion from "../../assets/images/fashion.jpg";

const testimonials = [
  {
    id: 1,
    author: "Carle-Gosee H.",
    verified: true,
    content:
      "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute. 😊",
    product: "Basic Bright Green Rib Extreme Crop",
    price: "$68.00",
  },
  {
    id: 2,
    author: "Cameron Smith",
    verified: true,
    content:
      "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 😊",
    product: "Balloon Sleeve Blouse - Square Neck",
    price: "$300.00",
  },
  // Add at least 2 more testimonials to see the carousel in action
  {
    id: 3,
    author: "Alex Johnson",
    verified: true,
    content:
      "Absolutely love this product! The quality is amazing and it fits perfectly.",
    product: "Classic White Tee",
    price: "$45.00",
  },
  {
    id: 4,
    author: "Sarah Williams",
    verified: true,
    content:
      "Great value for money. I've already recommended it to all my friends!",
    product: "Denim Jacket",
    price: "$89.00",
  },
];

const TestimonialCarousel = () => {
  const classes = useStyle();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Update visible count based on screen size
  const updateVisibleCount = () => {
    setVisibleCount(window.innerWidth >= 1024 ? 2 : 1);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToIndex = (index: any) => {
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className={classes.carousel}>
      <button
        className={`${classes.navButton} ${classes.prevButton}`}
        onClick={prev}
        disabled={currentIndex === 0}
        aria-label="Previous testimonials"
      >
        &lt;
      </button>

      <div
        className={classes.carouselContainer}
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
        }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={classes.testimonial}>
            <div className={classes.testimonialContent}>
              <div className={classes.Card}>
                <img src={fashion} className={classes.CardLogo} alt="Product" />
              </div>
              <div style={{ padding: "32px" }}>
                <div className={classes.author}>{testimonial.author}</div>
                {testimonial.verified && (
                  <span className={classes.verified}>Verified Buyer</span>
                )}
                <p>{testimonial.content}</p>
              </div>
              {/* <div className={classes.product}>
                {testimonial.product} {testimonial.price}
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${classes.navButton} ${classes.nextButton}`}
        onClick={next}
        disabled={currentIndex >= maxIndex}
        aria-label="Next testimonials"
      >
        &gt;
      </button>

      {maxIndex > 0 && (
        <div className={classes.indicators}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <div
              key={index}
              className={`${classes.indicator} ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
