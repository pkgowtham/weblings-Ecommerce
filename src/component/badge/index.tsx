import clsx from "clsx";
import Typography from "../typography/component";
import { BadgeProps } from "./badgeType";
import { useStyle } from "./indexstyle";

const Badge: React.FC<BadgeProps> = ({ count, className, ...props }) => {
  const classes = useStyle();
  return (
    <div className={clsx(classes.badgeContainer, className)} {...props}>
      <Typography className={classes.whiteColor} variant="LXS">
        {count}
      </Typography>
    </div>
  );
};

export default Badge;
