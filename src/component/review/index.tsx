import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../../src/component/typography/component";
import SvgChevronRight from "../../../../my-app/src/custom-icons/ChevronRight";
import SvgChevronLeft from "../../../../my-app/src/custom-icons/ChevronLeft";

const Review: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { ReviewsData } = props;

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
      <Typography variant="HM" className={classes.Title}>
        {ReviewsData .title}
      </Typography>
      <Typography variant="BM" className={classes.SubTitle}>
        {ReviewsData .subtitle}
      </Typography>
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
          {ReviewsData .cards.map((card: any, index: number) => (
            <div key={index} className={classes.CardWrapper}>
              <div className={classes.Card}>
                <img src={card.logo} className={classes.CardLogo}/>
              </div>
              <div className={classes.CardContent}>
                <div className={classes.CardDiv}>
                <Typography variant="TS" className={classes.CardTitle}>
                  {card.title}
                </Typography>
                <Typography variant="BS">{card.description}</Typography>
                </div>
                <div className={classes.SubDiv}>
                  <div className={classes.SubImgDiv}>
                    <img src={card.subimg} alt=""className={classes.SubImg}/>
                  </div>
                  <div>
                  <Typography variant="bS">{card.subtext}</Typography>
                  <Typography variant="TS">{card.amount}</Typography>
                  </div>

                </div>
              </div>
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

export default Review;
