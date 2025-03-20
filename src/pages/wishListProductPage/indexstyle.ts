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
    display: "flex",
    padding: theme.spacing.s2000,
    alignItems: "center",
    gap: theme.spacing.s600,
    justifyContent: "center",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
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
    display: "flex",
    padding: theme.spacing.s2000,
    alignItems: "center",
    gap: theme.spacing.s600,
    justifyContent: "center",
  },
}));
