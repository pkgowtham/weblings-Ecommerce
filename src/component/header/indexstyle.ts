import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  NavBar: {
    width: "100%",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 30,
    backgroundColor: theme.light.neutral.surface.lighter,
  },
  NavTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing.s300,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  ContactInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s400,
  },
  NavBarMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.s800,
    padding: theme.spacing.s300,
    position: "relative",
  },
  Logo: {},
  IconSize: {
    width: "20px",
    height: "20px",
    position: "relative",
  },
  Icons: {
    display: "flex",
    gap: theme.spacing.s400,
    alignItems: "center",
  },
  List: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    color: theme.light.neutral.onSurface.medium,
    // '&:hover': {
    //     color: theme.light.brand.onSurface.default,
    //     transition: "color 0.3s",
    // }
  },
  RightLogo: {
    height: "20px",
    // width:'20px'
  },
  Dropdown: {
    position: "absolute",
    top: "75%",
    left: "29%",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s300,
    borderRadius: theme.borderRadius.b250,
    flexDirection: "column",
    display: "flex",
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
    zIndex: 10,
    width: "40%",
    height: "fit-content",
  },
  datas: {
    width: "100%",
    height: "fit-content",
    padding: theme.spacing.s250,
    "&:hover": {
      backgroundColor: theme.light.neutral.surface.light,
      borderRadius: theme.spacing.s100,
      transition: "color 0.3s",
    },
  },
  DropdownItem: {
    padding: `${theme.spacing.s200} ${theme.spacing.s300}`,
    cursor: "pointer",
    textDecoration: "none",
    listStyle: "none",
    color: theme.light.neutral.onSurface.title,
  },
  wishList: {
    position: "relative",
  },
  badgeStyle: {},
  leftIconColor: {
    "& path": {
      fill: theme.light.neutral.onSurface.dark,
    },
  },
  iconDiv: {
    display: "flex !important",
    alignItems: "center",
    gap: theme.spacing.s400,
  },
  navContainer: {
    display: "flex !important",
    alignItems: "center",
    gap: theme.spacing.s400,
  },
  sideBarDiv: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "0",
    left: "0",
    position: "fixed",
    height: "100%",
    zIndex: 30,
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow:theme.elevation.m,
    "@media (max-width : 1024px)":{
      width:'40%'
    },
    "@media (max-width : 768px)":{
      width:'100%'
    }
  },
  headerDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding:`${theme.spacing.s500} ${theme.spacing.s600}`,
    color: theme.light.neutral.surface.light,
    backgroundColor: theme.light.negative.onSurface.medium,
  },
  headerChild: {
    display: "flex",
    alignItems: "flex-start",
    gap:theme.spacing.s500
  },
  svgColor:{
    '& path' :{
      fill:theme.light.neutral.surface.light
    }
  },
  sideData:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    padding:theme.spacing.s600,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  sideList:{
    display:'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    textDecoration: "none",
    color: theme.light.neutral.onSurface.title,
  },
  bodyData:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    padding:`${theme.spacing.s0} ${theme.spacing.s500}`
  }
}));
