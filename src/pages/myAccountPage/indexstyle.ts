import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  headerSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.s1200,
    gap: theme.spacing.s250,
    marginBottom: theme.spacing.s2000,
  },
  contentOne: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
    cursor: "pointer",
    "&:hover": {
      color: theme.light.negative.onSurface.medium,
    },
  },
  dotStyle: {
    width: "3px",
    height: "3px",
    backgroundColor: theme.light.neutral.onSurface.dark,
    borderRadius: "50%",
  },
  bodySection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fullSection: {
    width: "85%",
    display: "flex",
    gap: theme.spacing.s800,
    margin: "0 auto",
  },
  dashBoard: {
    width: "25%",
    height: "fit-content",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b150,
    position: "sticky",
  },
  nameDiv: {
    padding: `${theme.spacing.s400} ${theme.spacing.s500}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
    cursor: "pointer",
  },
  textColor: {
    color: theme.light.neutral.onSurface.title,
    "&:hover": {
      color: theme.light.negative.onSurface.medium,
    },
  },
  contents: {
    flex: 1,
  },
}));
