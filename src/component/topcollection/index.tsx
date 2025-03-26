import React from "react";
import { useStyle } from "./indexstyle";
import Typography from "../../component/typography/component";
import { HideComponents } from "../hideComponents";
// import collection from "../../assets/images/collection.jpg"

const TopCollection: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { TopData } = props;
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
      <HideComponents className={classes.tabletContainer} showOnlyOn="tablet">
        <div className={classes.tabletScroolContainer}>
          <div className={classes.wraperTablet}>
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
    </div>
  );
};

export default TopCollection;
