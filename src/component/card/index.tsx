import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../../src/component/typography/component";
import SvgChevronRight from "../../custom-icons/ChevronRight";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import VerticalProductCard from "../verticalProductCard";
import fashionwhite from "../../assets/images/fashionwhite.jpg";
import fashionblack from "../../assets/images/fashionblack.jpg";
import fashiongrey from "../../assets/images/fashion.jpg";

// const products = [
//   {
//     id: 1,
//     name: "White Slim Fit Basic Unpatterned T-shirt",
//     price: "$115.00",
//     rating: 5,
//     image: fashionwhite,
//     variants: [
//       {
//         color: "Black",
//         image: fashionblack,
//       },
//       {
//         color: "White",
//         image: fashionwhite,
//       },
//       {
//         color: "Grey",
//         image: fashiongrey,
//       },
//     ],
//     description:
//       "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
//   },
//   {
//     id: 2,
//     name: "White Slim Fit Basic Unpatterned T-shirt",
//     price: "$115.00",
//     rating: 5,
//     image: fashionwhite,
//     variants: [
//       {
//         color: "Black",
//         image: fashionblack,
//       },
//       {
//         color: "White",
//         image: fashionwhite,
//       },
//       {
//         color: "Grey",
//         image: fashiongrey,
//       },
//     ],
//     description:
//       "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
//   },
//   {
//     id: 3,
//     name: "White Slim Fit Basic Unpatterned T-shirt",
//     price: "$115.00",
//     rating: 5,
//     image: fashionwhite,
//     variants: [
//       {
//         color: "Black",
//         image: fashionblack,
//       },
//       {
//         color: "White",
//         image: fashionwhite,
//       },
//       {
//         color: "Grey",
//         image: fashiongrey,
//       },
//     ],
//     description:
//       "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
//   },
//   {
//     id: 4,
//     name: "White Slim Fit Basic Unpatterned T-shirt",
//     price: "$115.00",
//     rating: 5,
//     image: fashionwhite,
//     variants: [
//       {
//         color: "Black",
//         image: fashionblack,
//       },
//       {
//         color: "White",
//         image: fashionwhite,
//       },
//       {
//         color: "Grey",
//         image: fashiongrey,
//       },
//     ],
//     description:
//       "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
//   },
//   {
//     id: 5,
//     name: "White Slim Fit Basic Unpatterned T-shirt",
//     price: "$115.00",
//     rating: 5,
//     image: fashionwhite,
//     variants: [
//       {
//         color: "Black",
//         image: fashionblack,
//       },
//       {
//         color: "White",
//         image: fashionwhite,
//       },
//       {
//         color: "Grey",
//         image: fashiongrey,
//       },
//     ],
//     description:
//       "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
//   },
//   {
//     id: 6,
//     name: "White Slim Fit Basic Unpatterned T-shirt",
//     price: "$115.00",
//     rating: 5,
//     image: fashionwhite,
//     variants: [
//       {
//         color: "Black",
//         image: fashionblack,
//       },
//       {
//         color: "White",
//         image: fashionwhite,
//       },
//       {
//         color: "Grey",
//         image: fashiongrey,
//       },
//     ],
//     description:
//       "The cotton long-sleeved striped t-shirt features a classic crew neckline, easy short sleeves, a slightly cropped length and a relaxed fit for a truly timeless look.",
//   },
// ];

const Card: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { CardData, title, subTitle } = props;
  const ScroolContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true); // Track start state
  const [isAtEnd, setIsAtEnd] = useState(false); // Track end state

  // Function to handle scrolling
  const handlescrool = (direction: "left" | "right") => {
    const scrollContainer = ScroolContainerRef.current;

    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -770 : 770;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Delay state update slightly to allow smooth scrolling to complete
      setTimeout(checkScrollPosition, 50);
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
        {title}
      </Typography>
      <Typography variant="BM" className={classes.SubTitle}>
        {subTitle}
      </Typography>
      <div className={classes.CardContainer}>
        <div
          onClick={() => handlescrool("left")}
          className={classes.leftArrow}
          style={{
            // opacity: isAtStart ? 0 : 1,
            opacity: isHovered && !isAtStart ? 1 : 0,
            pointerEvents: isAtStart ? "none" : "auto",
          }}
        >
          <SvgChevronLeft className={classes.ScroolLeftButton} />
        </div>
        <div className={classes.ScrollContainer} ref={ScroolContainerRef}>
          {CardData[0]?.map((card: any, index: number) => (
            <div key={index} className={classes.CardWrapper}>
              {/* <div className={classes.Card}>
                <img src={card.logo} className={classes.CardLogo} />
              </div>
              <div className={classes.CardContent}>
                <Typography variant="BS" className={classes.CardTitle}>
                  {card.title}
                </Typography>
                <Typography variant="BS">{card.description}</Typography>
              </div> */}
              <VerticalProductCard products={card} />
            </div>
          ))}
        </div>
        <div
          style={{
            // opacity: isAtEnd ? 0 : 1,
            opacity: isHovered && ! isAtEnd ? 1 : 0,
            pointerEvents: isAtEnd ? "none" : "auto",
          }}
          onClick={() => handlescrool("right")}
          className={classes.rightArrow}
        >
          <SvgChevronRight className={classes.ScroolRightButton} />
        </div>
      </div>
    </div>
  );
};

export default Card;
