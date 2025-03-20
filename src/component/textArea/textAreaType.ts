import { ChangeEvent } from "react";

export interface TextareaProps {
    value?: string;
    name?:string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    helperText?:string;
    error?:Boolean;
    maxLength?: number;
    disabled?: boolean;
    className?: string;
    autoResize?: boolean;
    onChange?: any;
    style?:any;
    label?:string;
  }