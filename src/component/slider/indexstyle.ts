import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    // padding:`${theme.spacing.s0} ${theme.spacing.s800}` ,
  },
  Title: {
    color: theme.light.brand.onSurface.default,
    width: "100%",
    maxWidth: "705px",
    marginBottom: theme.spacing.s150,
  },
  SubTitle: {
    marginBottom: theme.spacing.s600,
  },
  CardContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing.s500,
    position: "relative",
    flexWrap: "wrap",
    "@media (max-width: 700px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
  CardWrapper: {
    display: "flex",
    flexDirection: "column",
    // width: "100%",
  },
  CardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  CardTitle: {
    marginBottom: theme.spacing.s100,
  },
  Card: {
    height: "636px",
    width: "1600px",
    borderRadius: theme.borderRadius.b100,
    border: `1px solid ${theme.light.brand.border.light}`,
    backgroundColor: theme.light.brand.surface.lighter,
    marginBottom: theme.spacing.s100,
  },
  ScrollContainer: {
    display: "flex",
    gap: "15px",
    overflowX: "auto", // Horizontal scroll
    scrollBehavior: "smooth", // Smooth scrolling effect
    padding: "10px 0",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#aaa",
    },
  },
  ScroolLeftButton: {
    cursor: "pointer",
    position: "relative",
   
  },
  ScroolRightButton: {
    cursor: "pointer",
    position: "relative",
   
  },
  // Right:{
  //   border:`1px solid ${theme.light.neutral.border.light}`,
  //   color:'black'
  // }
  rightArrow:{
    cursor: "pointer",
    position: "absolute",
    top: 300,
    right: 50,
    width:'48px',
    height:'48px',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: `1px solid ${theme.light.neutral.border.light}`,
    backgroundColor:theme.light.neutral.surface.light
  },
  leftArrow:{
    width:'48px',
    height:'48px',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: `1px solid ${theme.light.neutral.border.light}`,
    cursor: "pointer",
    position: "absolute",
    top: 300,
    left: 50,
    zIndex:30,
    backgroundColor:theme.light.neutral.surface.light
  }
}));
