import Typography from "../typography/component";
import { useStyle } from "./indexstyle";

interface MobileNavigationBarProps {
  nagigationData: any;
}

const MobileNavigationBar: React.FC<MobileNavigationBarProps> = ({
  nagigationData,
}) => {
  const classes = useStyle();
  return (
    <div className={classes.navigationBarContainer}>
      {nagigationData?.links?.map((data: any) => (
        <Typography variant="BM">{data.link}</Typography>
      ))}
    </div>
  );
};

export default MobileNavigationBar;
