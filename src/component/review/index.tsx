import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../../src/component/typography/component";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import SvgStarPurple500 from "../../custom-icons/StarPurple500";
import { useStore } from "../../store";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import { deepGet } from "../../util/util";
import SvgEmptyStar from "../../custom-icons/EmptyStar";
import SvgStarHalf from "../../custom-icons/StarHalf";

const Review: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { ReviewsData } = props;
  const hasCommentsDispatched = useRef(false);
  const ratings = 4;

  const ScroolContainerRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true); // Track start state
  const [isAtEnd, setIsAtEnd] = useState(false); // Track end state
  const [isHovered, setIsHovered] = useState(false);
  const { store } = useStore();
  const dispatch = useMiddlewareDispatch();
  const [comment, setComment] = useState<any>([]);
  console.log('comment',comment)

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

  const RatingStar = (rating: number) => {
  
    switch (true) {
      // Handle cases like 1.1 to 1.9
      case rating >= 1.1 && rating <= 1.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarHalf className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
  
      // Handle cases like 2.1 to 2.9
      case rating >= 2.1 && rating <= 2.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
             <SvgStarHalf className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
  
      // Handle cases like 3.1 to 3.9
      case rating >= 3.1 && rating <= 3.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
             <SvgStarHalf className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
  
      // Handle cases like 4.1 to 4.9
      case rating >= 4.1 && rating <= 4.9:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
             <SvgStarHalf className={classes.starColor} />
          </div>
        );
  
      // Default cases (whole numbers)
      case rating === 1:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 2:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 3:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 4:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
      case rating === 5:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
            <SvgStarPurple500 className={classes.starColor} />
          </div>
        );
      default:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <SvgStarPurple500 className={classes.starColor} />
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
            <SvgEmptyStar className={classes.newStarColor}/>
          </div>
        );
    }
  };

  //comments getlist
  useEffect(() => {
    if (!hasCommentsDispatched.current) {
      dispatch({
        type: "PRODUCT_COMMENT_GETLIST_API_REQUEST",
        payload: {
          url: "/comments/customerSay",
          method: "GET",
        },
      });
      hasCommentsDispatched.current = true;
    }
  }, []);

  //filter data after getlist
  useEffect(() => {
    if (store.comment.dataGetList) {
      const filteredReviews = store.comment.dataGetList?.data
        .filter((item: any) => item.reviewValue === 5 || item.reviewValue === 4)
        .slice(0, 5);
      setComment(filteredReviews || []);
    }
  }, [deepGet(store, "comment.dataGetList")]);

  return (
    <div
      className={classes.MainContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          {comment.length > 0 && comment?.map((card: any, index: number) => (
            <div key={index} className={classes.CardWrapper}>
              <div className={classes.Card}>
                <img src={card?.products?.[0]?.attachments[0]?.fileUrl || ""} className={classes.CardLogo} />
              </div>
              <div className={classes.CardContent}>
                <div className={classes.CardDiv}>
                  <div>
                    {RatingStar(card?.reviewValue || 1)}
                  </div>
                  <Typography variant="TS" className={classes.CardTitle}>
                    {card?.title || ''}
                  </Typography>
                  <Typography variant="BM">{card?.content || ""}</Typography>
                </div>
                <div className={classes.SubDiv}>
                  <div className={classes.SubImgDiv}>
                    <img src={card?.products[0]?.attachments[1]?.fileUrl || ''} alt="" className={classes.SubImg} />
                  </div>
                  <div>
                    <Typography variant="BS">{card.products?.[0]?.name || ""}</Typography>
                    <Typography variant="TS">{card.variants?.[0]?.sellingPrice || ""}</Typography>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            opacity: isHovered && !isAtEnd ? 1 : 0,
            pointerEvents: isAtEnd ? "none" : "auto",
          }}
          className={classes.rightArrow}
          onClick={() => handlescrool("right")}
        >
          <SvgChevronRight className={classes.ScroolRightButton} />
        </div>
      </div>
    </div>
  );
};

export default Review;
