import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

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
  },
  para: {
    width: "40%",
    alignItems: "center",
    textAlign: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, auto)",
    gap: theme.spacing.s500,
    width: "80%",
    margin: "auto",
    marginTop: theme.spacing.s800,
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 767px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  gridItem: {
    width: "100%",
    position: "relative",
    cursor:'pointer'
  },
  logoStyle: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing.s300,
  },
  logoContainer: {
    display: "flex",
    height: "fit-content",
    width: "100%",
  },
  listContainer: {
    position: "absolute",
    bottom: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btnContainer: {
    width: "fit-content !important",
    backgroundColor: `${theme.light.neutral.surface.lighter} !important`,
    color: `${theme.light.neutral.onSurface.title} !important`,
    height: "45px !important",
    "&:hover": {
      backgroundColor: `${theme.light.neutral.onSurface.title} !important`,
      color: `${theme.light.neutral.surface.light} !important`,
    },
  },
}));
