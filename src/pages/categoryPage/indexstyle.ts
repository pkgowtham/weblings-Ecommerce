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
    flexDirection:'column'
  },
  filterContents:{
    display:'flex',
    gap:theme.spacing.s1000
  },
  filterDiv: {
    width: "20%",
  },
  productsDiv: {
    width: "80%",
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
}));
