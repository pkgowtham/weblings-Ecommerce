import React from "react";
import { useStyle } from "./indexstyle";
import Typography from "../typography/component";

const Support: React.FC<any> = (props): JSX.Element => {
  const classes = useStyle();
  const { SupportData } = props;
  return (
    <div className={classes.MainDiv}>
      {SupportData.text.map((text: any, idx: number) => (
        <div key={idx} className={classes.Card}>
          <div>
            <img src={text.logo} alt="" />
          </div>
          <div>
            <Typography variant="TS">{text.title}</Typography>
          </div>
          <div>
            <Typography variant="BS">{text.subtitle}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
