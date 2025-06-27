import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

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
    color: theme.color.neutral.onSurface.dark,
    cursor: "pointer",
    "&:hover": {
      color: theme.color.negative.onSurface.light,
    },
  },
  dotStyle: {
    width: "3px",
    height: "3px",
    backgroundColor: theme.color.neutral.onSurface.dark,
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
    border: `1px solid ${theme.color.neutral.border.light}`,
    borderRadius: theme.borderRadius.b150,
    position: "sticky",
  },
  nameDiv: {
    padding: `${theme.spacing.s400} ${theme.spacing.s500}`,
    borderBottom: `1px solid ${theme.color.neutral.border.light}`,
    cursor: "pointer",
  },
  textColor: {
    color: theme.color.neutral.onSurface.light,
    "&:hover": {
      color: theme.color.negative.onSurface.light,
    },
  },
  contents: {
    flex: 1,
  },
}));
