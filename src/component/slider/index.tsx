import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";

const Slider: React.FC<any> = ({SliderData}): JSX.Element => {
  const classes = useStyle();
  

  const ScroolContainerRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true); // Track start state
  const [isAtEnd, setIsAtEnd] = useState(false); // Track end state
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle scrolling
  const handlescrool = (direction: "left" | "right") => {
    const scrollContainer = ScroolContainerRef.current;

    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -1620 : 1620;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Delay state update slightly to allow smooth scrolling to complete
      setTimeout(checkScrollPosition, 100);
    }
  };

  // Function to check scroll position
  const checkScrollPosition = () => {
    const scrollContainer = ScroolContainerRef.current;

    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    const scrollContainer = ScroolContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check on component mount
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className={classes.MainContainer}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}
    >
      <div className={classes.CardContainer}>
        <div
          onClick={() => handlescrool("left")}
          style={{
            opacity: isHovered && !isAtStart ? 1 : 0,
            pointerEvents: isAtStart ? "none" : "auto",
          }}
          className={classes.leftArrow}
        >
          <SvgChevronLeft className={classes.ScroolLeftButton} />
        </div>
        <div className={classes.ScrollContainer} ref={ScroolContainerRef}>
          {SliderData?.cards?.map((card: any, index: number) => (
            <div key={index} className={classes.CardWrapper}>
              <div className={classes.Card}>
                <img
                  src={card.sliderimage}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => handlescrool("right")}
          style={{
            opacity: isHovered && ! isAtEnd ? 1 : 0,
            pointerEvents: isAtEnd ? "none" : "auto",
          }}
          className={classes.rightArrow}
        >
          <SvgChevronRight className={classes.ScroolRightButton} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
