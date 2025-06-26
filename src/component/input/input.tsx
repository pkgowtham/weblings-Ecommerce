import clsx from "clsx";
import { forwardRef, useEffect, useRef, useState } from "react";
import Typography from "../typography/component";
import { usestyles } from "./inputStyles";
import { InputFieldProps } from "./inputType";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      disabled = false,
      leftIcon,
      rightIcon,
      leftText,
      rightText,
      leftTextClick,
      rightTextClick,
      onLeftIconClick,
      onRightIconClick,
      rightTextColor,
      tableInp = false,
      readOnly = false,
      optional = false,
      width,
      borderRadius,
      className,
      gridSpan,
      ...props
    },
    ref
  ) => {
    const [leftTextWidth, setLeftTextWidth] = useState<number>(0);
    const leftTextRef = useRef<HTMLDivElement | null>(null);
    const classes = usestyles({ leftTextWidth });

    useEffect(() => {
      if (leftTextRef.current) {
        setLeftTextWidth(leftTextRef.current.offsetWidth);
      }
    }, [leftText]);

    return (
      <div
        className={clsx(classes.container, className)}
        style={{ gridColumn: gridSpan ? `span ${gridSpan}` : undefined }}
      >
        {label && (
          <label
            htmlFor={props.id}
            className={clsx(classes.label, {
              [classes.disabledText]: disabled,
            })}
          >
            <Typography
              style={{
                width: "100px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              variant="LS"
            >
              {label}
              {optional && (
                <Typography
                  variant="BS"
                  component={"span"}
                  className={classes.optional}
                >
                  (Optional)
                </Typography>
              )}
            </Typography>
          </label>
        )}

        <div className={classes.inputWrapper} style={{ width, borderRadius }}>
          {leftIcon && (
            <div
              className={classes.startIconContainer}
              onClick={(e) => {
                e.stopPropagation();
                onLeftIconClick?.();
              }}
            >
              {leftIcon}
            </div>
          )}

          {leftText && (
            <div
              className={classes.leftTextContainer}
              onClick={leftTextClick}
              ref={leftTextRef}
            >
              {leftText}
            </div>
          )}

          <input
            className={clsx(classes.input, {
              [classes.disabled]: disabled,
              [classes.inputError]: error,
              [classes.hasLeftIcon]: leftIcon,
              [classes.hasLeftText]: leftText,
              [classes.hasRightIcon]: rightIcon || rightText,
              [classes.customPadding]: leftText,
              [classes.tableInp]: tableInp,
            })}
            ref={ref}
            readOnly={readOnly}
            disabled={disabled}
            {...props}
          />

          {rightText && (
            <div
              className={clsx(classes.rightTextContainer)}
              style={{ color: rightTextColor }}
              onClick={rightTextClick}
            >
              {rightText}
            </div>
          )}

          {rightIcon && (
            <div
              className={classes.endIconContainer}
              onClick={(e) => {
                e.stopPropagation();
                onRightIconClick?.();
              }}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && (
          <div
            className={clsx(classes.helperText, {
              [classes.helperTextError]: error,
              [classes.disabledText]: disabled,
            })}
          >
            <Typography variant="BXS">{helperText}</Typography>
          </div>
        )}
      </div>
    );
  }
);

export default InputField;
