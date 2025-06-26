import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
	 container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    gap: theme.spacing.s100,
  },
  label: {
    fontSize: "1rem",
    color: theme.color.neutral.onSurface.light,
    paddingLeft: theme.spacing.s100,
    whiteSpace: "nowrap",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
    borderRadius: theme.borderRadius.b300,
    backgroundColor: theme.color.neutral.surface.lighter
  },
  input: {
    width: "100%",
    height: "40px",
    padding: `${theme.spacing.s200} ${theme.spacing.s300}`,
    border: `1px solid ${theme.color.neutral.border.light}`,
    borderRadius: theme.borderRadius.b800,
    "&:focus": {
      border: `2px solid ${theme.color.brand.border.medium}`,
      outline: "none",
    },
    "&::placeholder": {
      color: theme.color.neutral.onSurface.medium,
      fontWeight: 500,
      fontSize: "14px",
    },
  },
  startIconContainer: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1rem",
    color: "#333",
    left: "0.5rem",
    "@media (max-width: 500px)": {
      fontSize: ".875rem",
    },
  },
  endIconContainer: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1rem",
    color: "#333",
    right: "0.5rem",
    "@media (max-width: 500px)": {
      fontSize: ".875rem",
    },
  },
  hasLeftIcon: {
    paddingLeft: "2.5rem",
    "@media (max-width: 500px)": {
      paddingLeft: "2.5rem",
    },
  },
  hasRightIcon: {
    paddingRight: "2rem",
    "@media (max-width: 500px)": {
      paddingRight: "1.5rem",
    },
  },
  leftTextContainer: {
    position: "absolute",
    top: "50%",
    left: "0.5rem",
    transform: "translateY(-50%)",
    fontSize: "14px",
    color: "#666",
    paddingRight: "0.5rem",
    cursor: "pointer",
  },
  rightTextContainer: {
    position: "absolute",
    top: "50%",
    right: "0.5rem",
    transform: "translateY(-50%)",
    fontSize: "14px",
    color: "#666",
    paddingLeft: "0.5rem",
    cursor: "pointer",
  },
  helperText: {
    position: "absolute",
    bottom: "-22px",
    left: 0,
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 400,
    color: theme.color.neutral.onSurface.light,
    paddingLeft: "10px",
  },
  inputError: {
    border: `2px solid ${theme.color.negative.border.medium}`,
    outline: "none",
    "&:focus": {
      border: `2px solid ${theme.color.negative.border.medium}`,
      outline: "none",
    },
  },
  helperTextError: {
    color: theme.color.negative.onSurface.light,
    fontWeight: 400,
  },
  disabled: {
    backgroundColor: theme.color.neutral.surface.disabled,
    border: theme.color.neutral.border.disabled,
    color: theme.color.neutral.onSurface.disabled,
    cursor: "not-allowed",
    pointerEvents: "none",
    "&:focus": {
      outline: "none",
    },
  },
  disabledText: {
    color: theme.color.neutral.onSurface.disabled,
  },
  tableInp: {
    height: 28,
    color: theme.color.neutral.onSurface.medium,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: 1.43,
    border: `2px solid ${theme.color.brand.border.medium}`,
    outline: "none",
  },
  optional: {
    color: "#8D8D8D",
  },
  customPadding: (props: any = {}) => ({
    paddingLeft: `${props.leftTextWidth + 12}px`,
  }),
}));