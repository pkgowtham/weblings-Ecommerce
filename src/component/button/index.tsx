import React from "react";
import { useStyle } from "./indexstyle";
import { ButtonProps } from "./buttonType";
import Typography from "../typography/component";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const classes = useStyle();
  return (
    <button className={clsx(classes.buttonStyle,className)} onClick={onClick}{...props}>
      {leftIcon && <span className={classes.buttonIcon}>{leftIcon}</span>}
      <Typography variant="LM">{text}</Typography>
      {rightIcon && <span className={classes.buttonIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
