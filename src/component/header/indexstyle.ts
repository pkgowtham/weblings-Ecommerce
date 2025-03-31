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
    position: "relative",
    color: theme.light.neutral.onSurface.medium,
    "&:hover": {
      color: theme.light.negative.onSurface.medium,
      transition: "color 0.3s",
    },
  },
  RightLogo: {
    height: "20px",
    // width:'20px'
  },
  Dropdown: {
    position: "absolute",
    top: "95%",
    left: "0%",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s300,
    borderRadius: theme.borderRadius.b250,
    flexDirection: "column",
    display: "flex",
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
    zIndex: 30,
    width: "250px",
    height: "fit-content",
  },
  datas: {
    width: "100%",
    height: "fit-content",
    padding: theme.spacing.s250,
    textDecoration: "none",
    color: theme.light.neutral.onSurface.title,
    "&:hover": {
      backgroundColor: theme.light.neutral.surface.light,
      borderRadius: theme.spacing.s200,
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
    zIndex: 90,
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
    "@media (max-width : 1024px)": {
      width: "40%",
    },
    "@media (max-width : 768px)": {
      width: "100%",
    },
  },
  headerDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.spacing.s500} ${theme.spacing.s600}`,
    color: theme.light.neutral.surface.light,
    backgroundColor: theme.light.negative.onSurface.medium,
  },
  headerChild: {
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing.s500,
  },
  svgColor: {
    "& path": {
      fill: theme.light.neutral.surface.light,
    },
  },
  sideData: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing.s600,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  sideList: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
    color: theme.light.neutral.onSurface.title,
  },
  bodyData: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing.s0} ${theme.spacing.s500}`,
  },
  navBarCategories: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.s300,
    width: "100%",
    gap: theme.spacing.s800,
    // borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  rotateIcon: {
    transform: "rotate(90deg)",
    transition: "transform 0.3 ease-in-out",
  },
  searchDiv: {},
  SearchDropDown: {
    width: "100%",
    background: theme.light.neutral.surface.lighter,
    zIndex: "100",
    overflow: "auto",
    height: "650px",
    scrollbarWidth: "thin",
    position: "absolute",
    left: 0,
    padding: `${theme.spacing.s1200} ${theme.spacing.s300}`,
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s500
  },
  categories: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing.s500,
    // marginTop:theme.spacing.s250
    // borderTop: `1px solid ${theme.light.neutral.border.light}`,
  },
  categoryStyle: {},
  trendingStyle: {
    padding: `${theme.spacing.s200} ${theme.spacing.s500}`,
    height: "fit-content",
    width: "fit-content",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.spacing.s200,
    cursor: "pointer",
  },
  gridContainer:{
    display:'grid',
    gridTemplateColumns:"repeat(5,1fr)",
    gap: theme.spacing.s500,
    width: "100%",
    margin: "auto",
    marginTop: theme.spacing.s800,
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 767px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
  header:{
    display:'flex',
    alignItems:'center',
    width:'100%',
    justifyContent:'space-between'
  }
}));
