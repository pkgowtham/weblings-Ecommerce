import Typography from "../typography/component";
import { useStyle } from "./indexstyle";

interface MarqueeProps {
  marqueeData: any;
}

const Marquee: React.FC<MarqueeProps> = ({ marqueeData }) => {
  const classes = useStyle();
  return (
    <div className={classes.mainContainer}>
      {marqueeData.map((data: any) => (
        <div key={data.id} className={classes.marqueContent}>
          <div className={classes.imageContainer}>
            <img className={classes.imageStyle} src={data.logo} alt="logo"/>
          </div>
          <div style={{width:'240px'}}>
          <Typography  variant="TS">{data.name}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
