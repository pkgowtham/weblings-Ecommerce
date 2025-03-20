import React, { useRef, useEffect, useContext } from "react";
import { TextareaProps } from "./textAreaType";
import { useStyle } from "./textAreaStyle";
import clsx from "clsx";

const TextArea: React.FC<TextareaProps> = ({
  value,
  placeholder,
  onChange,
  rows = 4,
  cols = 50,
  name,
  maxLength,
  disabled = false,
  className,
  helperText,
  label,
  error,
  autoResize = true,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const classes = useStyle();

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, autoResize]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      cols={cols}
      name={name}
      maxLength={maxLength}
      disabled={disabled}
      className={clsx(classes.textarea, className)}
      {...props}
    />
  );
};

export default TextArea;
