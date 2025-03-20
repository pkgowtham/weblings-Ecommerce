import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../../src/component/typography/component";
import SvgChevronRight from "../../../../my-app/src/custom-icons/ChevronRight";
import SvgChevronLeft from "../../../../my-app/src/custom-icons/ChevronLeft";

const Slider: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { SliderData } = props;

  const ScroolContainerRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true); // Track start state
  const [isAtEnd, setIsAtEnd] = useState(false); // Track end state

  // Function to handle scrolling
  const handlescrool = (direction: "left" | "right") => {
    const scrollContainer = ScroolContainerRef.current;

    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -300 : 300;
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
    <div className={classes.MainContainer}>
      <div className={classes.CardContainer}>
        <SvgChevronLeft
          className={classes.ScroolLeftButton}
          onClick={() => handlescrool("left")}
          style={{
            opacity: isAtStart ? 0 : 1,
            pointerEvents: isAtStart ? "none" : "auto",
          }}
        />
        <div className={classes.ScrollContainer} ref={ScroolContainerRef}>
          {SliderData?.cards?.map((card: any, index: number) => (
            <div key={index} className={classes.CardWrapper}>
              <div className={classes.Card}></div>
            </div>
          ))}
        </div>
        <SvgChevronRight
          onClick={() => handlescrool("right")}
          className={classes.ScroolRightButton}
          style={{
            opacity: isAtEnd ? 0 : 1,
            pointerEvents: isAtEnd ? "none" : "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
