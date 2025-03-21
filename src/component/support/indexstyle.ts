import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainDiv: {
    height: "125px",
    width: "90%",
    display: "flex",
    gap: theme.spacing.s400,
    padding: `${theme.spacing.s0} ${theme.spacing.s800}`,
    marginBottom: theme.spacing.s1600,
    justifyContent: "space-between",
    margin: "0 auto",
  },
  Card: {
    width: "100%",
    maxWidth: "392px",
    height: "125px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));
