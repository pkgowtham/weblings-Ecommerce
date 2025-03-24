import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../../src/component/typography/component";
import SvgChevronRight from "../../../../my-app/src/custom-icons/ChevronRight";
import SvgChevronLeft from "../../../../my-app/src/custom-icons/ChevronLeft";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";

const Review: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { ReviewsData } = props;
  const ratings = 4;

  const ScroolContainerRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true); // Track start state
  const [isAtEnd, setIsAtEnd] = useState(false); // Track end state
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle scrolling
  const handlescrool = (direction: "left" | "right") => {
    const scrollContainer = ScroolContainerRef.current;

    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -1400 : 1400;
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
      <Typography variant="HM" className={classes.Title}>
        {ReviewsData.title}
      </Typography>
      <Typography variant="BM" className={classes.SubTitle}>
        {ReviewsData.subtitle}
      </Typography>
      <div className={classes.CardContainer}>
        <div
          onClick={() => handlescrool("left")}
          className={classes.leftArrow}
          style={{
            opacity: isHovered && !isAtStart ? 1 : 0,
            pointerEvents: isAtStart ? "none" : "auto",
          }}
        >
          <SvgChevronLeft className={classes.ScroolLeftButton} />
        </div>
        <div className={classes.ScrollContainer} ref={ScroolContainerRef}>
          {ReviewsData.cards.map((card: any, index: number) => (
            <div key={index} className={classes.CardWrapper}>
              <div className={classes.Card}>
                <img src={card.logo} className={classes.CardLogo} />
              </div>
              <div className={classes.CardContent}>
                <div className={classes.CardDiv}>
                  <div>
                    {Array.from({ length: ratings }).map((_, index) => (
                      <SvgStarPurple500
                        viewBox="0 0 20 25"
                        width={20}
                        height={20}
                        className={classes.starColor}
                        key={index}
                      />
                    ))}
                  </div>
                  <Typography variant="TS" className={classes.CardTitle}>
                    {card.title}
                  </Typography>
                  <Typography variant="BM">{card.description}</Typography>
                </div>
                <div className={classes.SubDiv}>
                  <div className={classes.SubImgDiv}>
                    <img src={card.subimg} alt="" className={classes.SubImg} />
                  </div>
                  <div>
                    <Typography variant="BS">{card.subtext}</Typography>
                    <Typography variant="TS">{card.amount}</Typography>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            opacity: isHovered && ! isAtEnd ? 1 : 0,
            pointerEvents: isAtEnd ? "none" : "auto",
          }}
          className={classes.rightArrow}
          onClick={() => handlescrool("right")}
        >
          <SvgChevronRight
            className={classes.ScroolRightButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
