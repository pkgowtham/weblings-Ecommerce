import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  inputDiv: {
    width: "100%",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: `${theme.light.neutral.border.light}`,
    height: "45px",
    padding: `${theme.spacing.s250} ${theme.spacing.s500}`,
    borderRadius: theme.spacing.s600,
    // position: "relative",
  },
  inputWrapper: {
    display: "flex",
    position: "relative",
  },
  iconLeftContainer: {
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
  iconRightContainer: {
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
}));
