import React, { useRef, useState } from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../component/typography/component";
import { HideComponents } from "../hideComponents";
// import collection from "../../assets/images/collection.jpg"

const TopCollection: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { TopData } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 4;
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(TopData?.card?.length / itemsPerPage);

  const handleDotClick = (index: number) => {
    const scrollAmount = index * (itemsPerPage * 150); // Adjust based on item width
    scrollRef.current?.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setActiveIndex(index);
  };
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Title}>
        <Typography variant="HM">Top Collections</Typography>
      </div>
      <div className={classes.Title}>
        <Typography variant="BM">
          Express your style with our standout collection—fashion meets
          sophistication.
        </Typography>
      </div>
      {/* without scrool for desktop */}
      <HideComponents showOnlyOn="desktop">
        <div className={classes.Wrapper}>
          {TopData?.card?.map((data: any, idx: number) => (
            <div key={idx} className={classes.CollectionWrapper}>
              <div className={classes.CollectionDiv}>
                <img
                  src={data.logo}
                  className={classes.CollectionLogo}
                  alt=""
                />
              </div>
              <div>
                <Typography variant="TS">{data.subtitle}</Typography>
              </div>
            </div>
          ))}
        </div>
      </HideComponents>
      {/* scrool for tablet */}
      <HideComponents className={classes.tabletContainer} hideOn="desktop">
        <div className={classes.tabletScroolContainer}>
          <div className={classes.wraperTablet} ref={scrollRef}>
            {TopData?.card?.map((data: any, idx: number) => (
              <div key={idx} className={classes.collectionWrapper}>
                <div className={classes.CollectionDiv}>
                  <img
                    src={data.logo}
                    className={classes.CollectionLogo}
                    alt=""
                  />
                </div>
                <div>
                  <Typography variant="TS">{data.subtitle}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HideComponents>
      {/* dotes navigation tablet */}
      <HideComponents hideOn="desktop">
        <div className={classes.DotsContainer}>
          {Array.from({ length: totalPages }).map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <span
                key={index}
                className={`${classes.Dot} ${
                  isActive ? classes.ActiveDot : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            );
          })}
        </div>
      </HideComponents>
    </div>
  );
};

export default TopCollection;
