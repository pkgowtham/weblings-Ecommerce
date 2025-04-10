import { useState } from "react";
import { useStyle } from "./indexstyle";
import clsx from "clsx";
import { toolTipProps } from "./toolTipType";

const ToolTip: React.FC<toolTipProps> = ({
  children,
  content,
  position = "top",
  delay = 200,
  disabled = false,
  className,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [timeOutId, setTimeOutId] = useState<any>(null);
  const classes = useStyle();

  // show tooltip
  const showTip = () => {
    if (disabled) return;
    const id = setTimeout(() => {
      setActive(true);
    }, delay);
    setTimeOutId(id);
  };

  // hide tooltip
  const hideTip = () => {
    if (disabled) return;
    clearTimeout(timeOutId);
    setActive(false);
  };

  return (
    <div
      className={clsx(classes.tooltipContainer, className)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {content && (
        <div
          className={clsx(
            classes.tooltipContent,
            classes[position],
            active ? classes.visible : classes.hidden,
            className
          )}
          role="tooltip"
        >
          {content}

          <span
            className={clsx(
              classes.arrow,
              position === "top" && classes.arrowTop,
              position === "bottom" && classes.arrowBottom,
              position === "left" && classes.arrowLeft,
              position === "right" && classes.arrowRight
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ToolTip;
