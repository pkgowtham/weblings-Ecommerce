import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing.s800,
  },
  Title: {
    display: "flex",
    marginBottom: theme.spacing.s300,
    color: theme.light.neutral.onSurface.title,
  },
  Wrapper: {
    display: "flex",
    gap: theme.spacing.s500,
    marginTop: theme.spacing.s600,
    // flexWrap: "wrap",
  },
  CollectionDiv: {
    borderRadius: "50%",
    width: "100%",
    height: "180px",
    // borderRadius:'50%',
    // width:'100%',
    // aspectRatio:1/1,
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'center',
  },
  CollectionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s500,
    marginTop: theme.spacing.s600,
    alignItems: "center",
    // flex:1,
    // minWidth:'80px',
    // maxWidth:'200px',
  },
  CollectionLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  //   for tablet
  tabletScroolContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent:'center'
  },
  wraperTablet: {
    display: "flex",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    whiteSpace: "nowrap",
    width: "80%",
    padding: "10px 0",
    scrollbarWidth: "none",
  },
  collectionWrapper: {
    minWidth: "150px",
    marginRight: "20px",
    textAlign: "center",
  },
  tabletContainer: {},
}));
