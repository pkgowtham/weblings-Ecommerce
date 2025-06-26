import clsx from "clsx";
import { ButtonProps } from "./buttonType";
import { useStyle } from "./indexstyle";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  leftIcon,
  rightIcon,
  type = "button",
  fullWidth = false,
}) => {
  const classes = useStyle();
  return (
    // button styles
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        classes.button,
        {
          [classes.primary]: variant === "primary",
          [classes.secondary]: variant === "secondary",
          [classes.outline]: variant === "outline",
          [classes.ghost]: variant === "ghost",
          [classes.danger]: variant === "danger",
          [classes.sm]: size === "sm",
          [classes.md]: size === "md",
          [classes.lg]: size === "lg",
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
    >
      {/*leftIcon and styles  */}
      {leftIcon && (
        <span
          className={clsx(classes.icon, {
            [classes.iconSm]: size === "sm",
            [classes.iconLeft]: children,
            [classes.iconMd]: size === "md",
            [classes.iconLg]: size === "lg",
          })}
        >
          {leftIcon}
        </span>
      )}

      {children}

      {/* rightIcon and styles */}
      {rightIcon && (
        <span
          className={clsx(classes.icon, classes.iconRight, {
            [classes.iconSm]: size === "sm",
            [classes.iconMd]: size === "md",
            [classes.iconLg]: size === "lg",
          })}
        >
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
