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
  dotStyle: {
    width: "3px",
    height: "3px",
    backgroundColor: theme.light.neutral.onSurface.dark,
    borderRadius: "50%",
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
    cursor:'pointer',   
    "&:hover":{
        color:theme.light.negative.onSurface.medium
    }
  },
  contentOne: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
  },
  wishListContainer: {
    width: "100%",
    display: "grid",
    padding: theme.spacing.s2000,
    alignItems: "center",
    gap: theme.spacing.s600,
    justifyContent: "center",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, auto)",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 767px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  viewedProductContainer: {
    width: "100%",
    display: "flex",
    flexDirection:'column',
    padding: theme.spacing.s2000,
    alignItems: "center",
    gap: theme.spacing.s600,
    justifyContent: "center",
  },
  viewHeader: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.s800,
    gap: theme.spacing.s250,
  },
  recentlyViewed:{
    width: "100%",
    display: "grid",
    padding: theme.spacing.s2000,
    alignItems: "center",
    gap: theme.spacing.s600,
    justifyContent: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, auto)",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 767px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    }
  },
}));
