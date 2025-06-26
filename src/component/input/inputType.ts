export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftText?: string;
  rightText?: string;
  leftTextClick?: () => void;
  rightTextClick?: () => void;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  rightTextColor?: string;
  tableInp?: boolean;
  readOnly?: boolean;
  optional?: boolean;
  width?: string;
  borderRadius?: string;
  className?: string;
  gridSpan?: number;
}