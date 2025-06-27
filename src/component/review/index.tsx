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
  const ScroolContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { store } = useStore();
  const dispatch = useMiddlewareDispatch();
  const [comment, setComment] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          (navigator as any).msMaxTouchPoints > 0
      );
    };
    checkTouchDevice();
    window.addEventListener("touchstart", checkTouchDevice, { passive: true });
    return () => window.removeEventListener("touchstart", checkTouchDevice);
  }, []);

  // Handle scrolling
  const handlescrool = (direction: "left" | "right") => {
    const scrollContainer = ScroolContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -1400 : 1400;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollPosition, 100);
    }
    setHasInteracted(true);
  };

  // Check scroll position
  const checkScrollPosition = () => {
    const scrollContainer = ScroolContainerRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setIsAtStart(scrollLeft <= 10); // Added small buffer
      setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10); // Added small buffer
    }
  };

  // Set up event listeners
  useEffect(() => {
    const scrollContainer = ScroolContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      scrollContainer.addEventListener("touchstart", handleTouchStart);
      scrollContainer.addEventListener("touchend", handleTouchEnd);

      // Initial check with delay to ensure container is rendered
      const timer = setTimeout(() => {
        checkScrollPosition();
        setIsLoading(false);
      }, 300);

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
        scrollContainer.removeEventListener("touchstart", handleTouchStart);
        scrollContainer.removeEventListener("touchend", handleTouchEnd);
        clearTimeout(timer);
      };
    }
  }, []);

  const handleTouchStart = () => {
    setIsHovered(true);
    setHasInteracted(true);
  };

  const handleTouchEnd = () => {
    const timer = setTimeout(() => setIsHovered(false), 1000);
    return () => clearTimeout(timer);
  };

  // Show arrows briefly on touch devices after load
  useEffect(() => {
    if (isTouchDevice && !hasInteracted) {
      setIsHovered(true);
      const timer = setTimeout(() => setIsHovered(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isTouchDevice, hasInteracted]);

  //comments getlist API call
  useEffect(() => {
    if (!hasCommentsDispatched.current) {
      setIsLoading(true);
      dispatch({
        type: "PRODUCT_COMMENT_GETLIST_API_REQUEST",
        payload: {
          url: "/comments/customerSay",
          method: "GET",
        },
      });
      hasCommentsDispatched.current = true;
    }
  }, [dispatch]);

  //filter data after getlist
  useEffect(() => {
    if (store.comment.dataGetList) {
      const filteredReviews =
        store.comment.dataGetList?.data
          ?.filter(
            (item: any) => item.reviewValue === 5 || item.reviewValue === 4
          )
          ?.slice(0, 5) || [];
      setComment(filteredReviews);
      setIsLoading(false);
    }
  }, [deepGet(store, "comment.dataGetList")]);

  const RatingStar = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<SvgStarPurple500 key={i} className={classes.starColor} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<SvgStarHalf key={i} className={classes.starColor} />);
      } else {
        stars.push(<SvgEmptyStar key={i} className={classes.newStarColor} />);
      }
    }

    return (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {stars}
      </div>
    );
  };

  return (
    <div
      className={classes.MainContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => {
        setIsHovered(true);
        setHasInteracted(true);
      }}
      onTouchEnd={() => {
        const timer = setTimeout(() => setIsHovered(false), 1000);
        return () => clearTimeout(timer);
      }}
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
            opacity: (isHovered || isTouchDevice) && !isAtStart ? 1 : 0,
            pointerEvents: isAtStart ? "none" : "auto",
            transition: "opacity 0.3s ease",
          }}
        >
          <SvgChevronLeft className={classes.ScroolLeftButton} />
        </div>

        <div className={classes.ScrollContainer} ref={ScroolContainerRef}>
          {comment.length > 0
            ? comment.map(
                (card: any, index: number) =>
                  card?.products?.length > 0 && (
                    <div key={index} className={classes.CardWrapper}>
                      <div className={classes.Card}>
                        <img
                          src={card?.products[0]?.attachments[0]?.fileUrl || ""}
                          className={classes.CardLogo}
                          alt="Product"
                        />
                      </div>
                      <div className={classes.CardContent}>
                        <div className={classes.CardDiv}>
                          {RatingStar(card?.reviewValue || 1)}
                          <Typography
                            variant="TS"
                            className={classes.CardTitle}
                          >
                            {card?.title || ""}
                          </Typography>
                          <Typography variant="BM">
                            {card?.content || ""}
                          </Typography>
                        </div>
                        <div className={classes.SubDiv}>
                          <div className={classes.SubImgDiv}>
                            <img
                              src={
                                card?.products[0]?.attachments[1]?.fileUrl || ""
                              }
                              alt="User"
                              className={classes.SubImg}
                            />
                          </div>
                          <div>
                            <Typography variant="BS">
                              {card.products?.[0]?.name || ""}
                            </Typography>
                            <Typography variant="TS">
                              {card.variants?.[0]?.sellingPrice || ""}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )
            : null}
        </div>

        <div
          style={{
            opacity: (isHovered || isTouchDevice) && !isAtEnd ? 1 : 0,
            pointerEvents: isAtEnd ? "none" : "auto",
            transition: "opacity 0.3s ease",
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
