import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop:theme.spacing.s2000,
    padding:`${theme.spacing.s0} ${theme.spacing.s800}` , 
  },
  Title: {
    color:theme.light.neutral.onSurface.title,
    width: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: theme.spacing.s150,
  },
  SubTitle: {
    marginBottom: theme.spacing.s600,
    display:'flex',
    justifyContent:'center'
  },
  CardContainer: {
    display: "flex",
    width:'90%',
    margin:'0 auto',
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
    minWidth: '300px',
  },
  CardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign:'center'
  },
  CardTitle: {
    marginBottom: theme.spacing.s100,
  },
  CardLogo:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius:theme.borderRadius.b250
  },
  Card: {
    height: "382px",
    width: "286px",
    borderRadius:theme.borderRadius.b500,
    backgroundColor: theme.light.brand.surface.lighter,
    marginBottom: theme.spacing.s100,
    
  },
  ScrollContainer: {
    display: "flex",
    gap: theme.spacing.s1600,
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
    // cursor: "pointer",
    position: "relative",
    // top: 180,
    // left: -35,
  },
  ScroolRightButton: {
    // cursor: "pointer",
    position: "relative",
    // top: 180,
    // right: -35,
  },
  leftArrow:{
    width:'48px',
    height:'48px',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: `1px solid ${theme.light.neutral.border.light}`,
    backgroundColor:theme.light.neutral.surface.light,
    cursor: "pointer",
    position: "absolute",
    top: 190,
    left: 0,
    zIndex:30
  },
  rightArrow:{
    cursor: "pointer",
    position: "absolute",
    top: 190,
    right: 0,
    width:'48px',
    height:'48px',
    borderRadius:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border: `1px solid ${theme.light.neutral.border.light}`,
    backgroundColor:theme.light.neutral.surface.light
  }
}));
