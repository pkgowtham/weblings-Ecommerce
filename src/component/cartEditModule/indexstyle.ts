import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  cartContainer: {
    height: "fit-content",
    width: "50%",
    top: "20%",
    left: "25%",
  },
  header: {
    width: "100%",
    padding: `${theme.spacing.s500} ${theme.spacing.s800}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  modelBox: {
    width: "100%",
    padding: theme.spacing.s800,
    display: "flex",
    gap: theme.spacing.s500,
  },
  productDiv: {
    width: "60%",
    display: "flex",
    gap: theme.spacing.s300,
    paddingRight: theme.spacing.s200,
    borderRight: `1px solid ${theme.light.neutral.border.light}`,
  },
  colorSection: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
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
    backgroundColor: `${theme.light.neutral.surface.light} !important`,
    color: `${theme.light.neutral.onSurface.title} !important`,
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
    color: theme.light.neutral.onSurface.dark,
  },
  blackColor: {
    color: theme.light.neutral.onSurface.title,
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
  sizedDiv: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
  },
  sizeStyle: {
    width: "45px",
    height: "35px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: `${theme.spacing.s250} ${theme.spacing.s400}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: theme.light.neutral.onSurface.title,
      color: theme.light.neutral.surface.lighter,
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
    background: theme.light.neutral.onSurface.title,
    color: theme.light.neutral.surface.lighter,
    transition: "color 0.3s",
  },
  addColor:{
    '& path':{
        fill:theme.light.neutral.onSurface.dark
    }
  },

  ProductImgDiv: {
    width: "100%",
    maxWidth: "40px",
    height: "40px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: theme.light.neutral.border.light,
    borderRadius: "50%",
    padding: theme.spacing.s100,
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.light.neutral.onSurface.title,
      transition: "color 0.3s",
    },
  },

  ProductBoder: {
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: theme.light.neutral.onSurface.title,
  },
  ProductImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));
