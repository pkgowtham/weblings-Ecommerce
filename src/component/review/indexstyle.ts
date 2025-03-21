import { createUseStyles } from "react-jss";
import { theme } from "../../../theme/theme";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing.s2000,
    padding: `${theme.spacing.s0} ${theme.spacing.s800}`,
    marginBottom: theme.spacing.s2000,
  },
  Title: {
    color: theme.light.neutral.onSurface.title,
    width: "100%",
    marginBottom: theme.spacing.s150,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  SubTitle: {
    marginBottom: theme.spacing.s600,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  CardContainer: {
    display: "flex",
    width:'85%',
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
    // flexDirection: "column",
    width: "49%",
    height: "313px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b200,
  },
  CardContent: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.s800,
    justifyContent: "space-between",
    width: "900px",
    // height:'258px'
  },
  CardTitle: {
    marginBottom: theme.spacing.s100,
  },
  CardLogo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b200,
  },
  Card: {
    height: "313px",
    width: "60%",
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
    position: "relative",
  },
  ScroolRightButton: {
    cursor: "pointer",
    position: "relative",
  },
  SubImgDiv: {
    width: "60px",
    height: "60px",
  },
  SubImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  SubDiv: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s500,
  },
  CardDiv: {
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s150
  },
  rightArrow: {
    cursor: "pointer",
    position: "absolute",
    top: 135,
    right: 0,
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:theme.light.neutral.surface.lighter,
    border: `1px solid ${theme.light.neutral.border.light}`,
    '&:hover':{
      color:theme.light.neutral.surface.light,
      backgroundColor:theme.light.neutral.onSurface.title
    }
  },
  leftArrow: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.light.neutral.border.light}`,
    backgroundColor:theme.light.neutral.surface.lighter,
    cursor: "pointer",
    position: "absolute",
    top: 135,
    left: 0,
    zIndex: 30,
    '&:hover':{
      color:theme.light.neutral.surface.light,
      backgroundColor:theme.light.neutral.onSurface.title
    }
  },
  starColor:{
    '& path':{
      fill:theme.light.warning.onSurface.medium
    }
  }
}));
