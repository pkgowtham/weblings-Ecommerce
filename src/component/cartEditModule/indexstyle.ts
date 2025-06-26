import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  cartContainer: {
    height: "fit-content",
    width: "50%",
  },
  header: {
    width: "100%",
    padding: `${theme.spacing.s500} ${theme.spacing.s800}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.color.neutral.border.light}`,
  },
  modelBox: {
    width: "100%",
    padding: theme.spacing.s800,
    display: "flex",
    gap: theme.spacing.s500,
    "@media (max-width : 1024px)":{
      display:'flex',
      flexDirection:'column'
    }
  },
  productDiv: {
    width: "60%",
    display: "flex",
    gap: theme.spacing.s300,
    paddingRight: theme.spacing.s200,
    borderRight: `1px solid ${theme.color.neutral.border.light}`,
    "@media (max-width : 1024px)":{
      width:'100%',
      borderRight: `none`,
    }
  },
  colorSection: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width : 1024px)":{
      width:'100%',
      borderRight: `none`,
    }
  },
  imageContainer: {
    width: "30%",
    height: "100%",
  },
  fashionStyle: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing.s200,
  },
  buttonStyle: {
    height: "30px !important",
    backgroundColor: `${theme.color.neutral.surface.light} !important`,
    color: `${theme.color.neutral.onSurface.light} !important`,
    borderRadius: `${theme.borderRadius.b0} !important`,
  },
  contentsDiv: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s200,
  },
  buttonContainer: {
    marginTop: theme.spacing.s2000,
  },
  colorContainer: {
    display: "flex",
    flexDirection: "column",
  },
  lightColor: {
    color: theme.color.neutral.onSurface.dark,
  },
  blackColor: {
    color: theme.color.neutral.onSurface.light,
  },
  colorcont: {
    display: "flex",
    gap: theme.spacing.s200,
  },
  colorDiv: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
  },
  ColorStyle: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
  },
  Red: {
    background: theme.color.negative.onSurface.medium,
  },
  war: {
    background: theme.color.warning.onSurface.medium,
  },
  green: {
    background: theme.color.positive.surface.medium,
  },
  purple: {
    background: theme.color.info.onSurface.medium,
  },
  blue: {
    background: theme.color.brand.onSurface.default,
  },
  gray: {
    background: theme.color.neutral.onSurface.dark,
  },
  sizedDiv: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
  },
  sizeStyle: {
    width: "fit-content",
    height: "35px",
    border: `1px solid ${theme.color.neutral.border.light}`,
    padding: `${theme.spacing.s250} ${theme.spacing.s400}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: theme.color.neutral.onSurface.light,
      color: theme.color.neutral.surface.lighter,
      transition: "color 0.3s",
    },
  },
  btnCont: {
    width: "100%",
    padding: theme.spacing.s800,
  },
  btnStyle: {
    width: "100% !important",
  },
  activeStatus: {
    background: theme.color.neutral.onSurface.light,
    color: theme.color.neutral.surface.lighter,
    transition: "color 0.3s",
  },
  addColor:{
    '& path':{
        fill:theme.color.neutral.onSurface.dark
    }
  },

  ProductImgDiv: {
    width: "100%",
    maxWidth: "40px",
    height: "40px",
    border: `1px solid ${theme.color.neutral.border.light}`,
    borderColor: theme.color.neutral.border.light,
    borderRadius: "50%",
    padding: theme.spacing.s100,
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.color.neutral.onSurface.light,
      transition: "color 0.3s",
    },
  },

  ProductBoder: {
    border: `1px solid ${theme.color.neutral.border.light}`,
    borderColor: theme.color.neutral.onSurface.light,
  },
  ProductImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));
