import clsx from "clsx";
import { useStyle } from "./indexstyle";
import { InputProps } from "./inputType";

const Input: React.FC<InputProps> = ({ leftIcon, rightIcon, ...props }) => {
  const classes = useStyle();
  return (
    <div className={classes.inputWrapper}>
      {leftIcon && <div className={classes.iconLeftContainer}>{leftIcon}</div>}
      <input
        className={clsx(classes.inputDiv, {
          [classes.hasLeftIcon]: leftIcon,
          [classes.hasRightIcon]: rightIcon,
        })}
        {...props}
      />
      {rightIcon && (
        <div className={classes.iconRightContainer}>{rightIcon}</div>
      )}
    </div>
  );
};

export default Input;
