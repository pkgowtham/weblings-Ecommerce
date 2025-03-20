import { createUseStyles } from "react-jss";
import { theme } from "../../../theme /theme";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop:theme.spacing.s2000,
    padding:`${theme.spacing.s0} ${theme.spacing.s800}` ,
    marginBottom:theme.spacing.s2000, 
  },
  Title: {
    color:theme.light.neutral.onSurface.title,
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
    // flexDirection: "column",
    width: "593px",
    height:'313px',
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius:theme.borderRadius.b200
  },
  CardContent: {
    display: "flex",
    flexDirection: "column",
    padding:theme.spacing.s800,
    justifyContent: "space-between",
    width:'325px',
    // height:'258px'
  },
  CardTitle: {
    marginBottom: theme.spacing.s100,
  },
  CardLogo:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius:theme.borderRadius.b200
  },
  Card: {
    height: "313px",
    width: "207px",
    borderRadius: theme.borderRadius.b100,
    // border: `1px solid ${theme.light.brand.border.light}`,
    backgroundColor: theme.light.brand.surface.lighter,
    marginBottom: theme.spacing.s100,
  },
  ScrollContainer: {
    display: "flex",
    gap: theme.spacing.s600,
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
    position: "absolute",
    top: 180,
    left: -35,
  },
  ScroolRightButton: {
    cursor: "pointer",
    position: "absolute",
    top: 180,
    right: -35,
  },
  SubImgDiv:{
    width:'60px',
    height:'60px',
  },
  SubImg:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius:'50%'
  },
  SubDiv:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s500,
  },
  CardDiv:{
    
  }
}));
