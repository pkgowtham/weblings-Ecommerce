import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainContainer: {
    // width:'100%',
    display: "flex",
    gap: theme.spacing.s1600,
    justifyContent: "center",
    padding: theme.spacing.s400,
    margin: `${theme.spacing.s0} ${theme.spacing.s1000}`,
    flexDirection:'column',
    '@media (max-width : 768px)':{
      margin:theme.spacing.s0
    }
  },
  filterContents:{
    display:'flex',
    gap:theme.spacing.s1000
  },
  filterDiv: {
    width: "100%",
  },
  productsDiv: {
    width: "80%",
    "@media (max-width: 1024px)": {
      width:'100%'
    },
  },
  blackColor: {
    color: theme.light.neutral.onSurface.title,
    width: "100%",
    padding: `${theme.spacing.s500} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  filterHead: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "fit-content",
    padding: `${theme.spacing.s500} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
    flexDirection: "column",
  },
  headContent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "fit-content",
  },
  svgColor: {
    "& path": {
      fill: theme.light.neutral.onSurface.title,
    },
  },
  expandDiv: {
    width: "100%",
    height: "fit-content",
  },
  colorDiv: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
  },
  checkBoxDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s250,
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
    height: "fit-content",
  },
  priceDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputDiv: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
    gap: theme.spacing.s300,
  },
  inputStyle: {
    width: "50%",
    height: "fit-content",
    padding: `${theme.spacing.s250} ${theme.spacing.s500}`,
  },
  priceVariation: {
    width: "100%",
    display: "flex",
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
    height: "fit-content",
  },
  toolBar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    justifyContent: "space-between",
  },
  resultsDiv: {},
  sortColor: {
    display: "flex",
    alignItems: "center",
    cursor:'pointer'
  },
  shortDropDown: {
    width: "200px",
    height: "fit-content",
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
    position: "absolute",
    top: "90%",
    right: "8%",
    borderRadius: theme.borderRadius.b200,
    padding: theme.spacing.s500,
    zIndex:30
  },
  contentDiv: {
    width: "100%",
    alignItems: "flex-start",
    padding: theme.spacing.s250,
  },
  darkColor: {
    color: theme.light.neutral.onSurface.title,
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
    cursor: "pointer",
  },
  activeStatus:{
    color: theme.light.neutral.onSurface.title,
    cursor: "pointer",
  },
  icon: {},
  shortCont:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s300,
  },
  chevronRight:{
    display:'flex',
    alignItems:'center',
    position:'relative',
    cursor:'pointer'
  },
  activeIcon: {},
  gridContainer: {
    display: "grid",
    gap: theme.spacing.s500,
    marginTop: theme.spacing.s500,
  },
  fourColumns: {
    gridTemplateColumns: "repeat(4, 1fr)",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 767px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  twoColumns: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  list:{

  },
  itemDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
    cursor: "pointer",
  },
  ColorStyle: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
  },
  Red: {
    background: theme.light.negative.onSurface.medium,
  },
  war: {
    background: theme.light.warning.onSurface.medium,
  },
  green: {
    background: theme.light.positive.surface.medium,
  },
  purple: {
    background: theme.light.info.onSurface.medium,
  },
  blue: {
    background: theme.light.brand.onSurface.default,
  },
  gray: {
    background: theme.light.neutral.onSurface.dark,
  },
  sizeStyle: {
    width: "45px",
    height: "35px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: `${theme.spacing.s250} ${theme.spacing.s400}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor:'pointer',
    "&:hover": {
      background: theme.light.neutral.onSurface.title,
      color: theme.light.neutral.surface.lighter,
      transition: "color 0.3s",
    },
  },
  sizedDiv: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
  },
  buttonStyle:{
    height:'33px !important',
    padding:`${theme.spacing.s250}  !important`,
    borderRadius:`${theme.borderRadius.b0} !important`
  },
  buttonStyleDrop:{
    height:'33px !important',
    padding:`${theme.spacing.s250}  !important`,
    borderRadius:`${theme.borderRadius.b0} !important`,
    backgroundColor:`${theme.light.neutral.surface.lighter} !important`,
    color:`${theme.light.neutral.onSurface.title} !important`,
    border: `1px solid ${theme.light.neutral.border.light}`,
  },
  filterCont:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s300
  },
  // filter side bar
  FilterSideBar:{
    width: "30%",
    height: "100%",
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
    position: "fixed",
    top: "0%",
    left: "0%",
    zIndex: "1000",
  },
  headerContainer:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    padding:`${theme.spacing.s500} ${theme.spacing.s600}`,
    justifyContent:'space-between',
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  filterMobileDiv:{
    width: "100%",
    padding:`${theme.spacing.s0} ${theme.spacing.s800}`,
    overflow:'auto',
    height:'630px',
    scrollbarWidth:'thin'
  },
  clearButtonContainer:{
    display:'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    borderTop: `1px solid ${theme.light.neutral.border.light}`,
    padding:`${theme.spacing.s400} ${theme.spacing.s800}`,
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
  },
  clearAllText:{
    textDecoration:'underline'
  }
}));
