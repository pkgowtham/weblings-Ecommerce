import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  productModule: {
    height: "fit-content",
    width: "65%",
    // top: "12%",
    "@media (max-width :768px)": {
      width: "80%",
      // left:'0',
    },
  },
  productContainer: {
    display: "flex",
    position: "relative",
    "@media (max-width :768px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      overflow: "hidden",
      overflowY: "auto",
      scrollbarWidth: "thin",
      height: "530px",
    },
  },
  imageContainer: {
    width: "40%",
    "@media (max-width :768px)": {
      width: "100%",
    },
  },
  productContentContainer: {
    width: "60%",
    overflow: "hidden",
    overflowY: "auto",
    msOverflowX: "hidden",
    padding: theme.spacing.s800,
    height: "530px",
    gap: theme.spacing.s400,
    display: "flex",
    flexDirection: "column",
    scrollbarWidth: "thin",
    "@media (max-width :768px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "fit-content",
      overflow: "visible",
      padding: theme.spacing.s400,
    },
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
  },
  starContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s500,
  },
  priceContainer: {
    width: "100%",
  },
  productContaier: {
    width: "100%",
  },
  blackColor: {
    color: theme.light.neutral.onSurface.title,
  },
  colorContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s200,
  },
  colorContent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  productImage: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
  },
  imageDiv: {
    width: "45px",
    height: "45px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: "50%",
    padding: theme.spacing.s100,
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.light.neutral.onSurface.title,
    },
  },
  itemDiv: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  sizeContainer: {
    width:'100%'
  },
  sizeContent: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  sizedDiv: {
    // width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
    padding: `${theme.spacing.s300} ${theme.spacing.s0}`,
  },
  sizeStyle: {
    width: "fit-content",
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
  sizeDiv: {
    display: "flex",
    alignItems: "flex-start",
    width: "fit-content",
    gap: theme.spacing.s300,
    "@media (max-width: 768px)":{
      display: "flex",
      alignItems: "flex-start",
      width: "fit-content",
      gap: theme.spacing.s300,
      flexWrap:'wrap'
    }
  },
  buttonStyle: {
    width: "40% !important",
    backgroundColor: `${theme.light.neutral.surface.light} !important`,
    color: `${theme.light.neutral.onSurface.dark} !important`,
    display: "flex",
    justifyContent: "center",
    "@media (max-width :768px)": {
      width: "100% !important",
    },
    //  "&:hover":{
    //   backgroundColor:theme.light.neutral.surface.light
    //  },
    //  "&:focus": {
    //   color:  theme.light.neutral.surface.light,
    // },
  },
  buttonColor: {
    "& path": {
      fill: theme.light.neutral.onSurface.dark,
    },
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s300,
    '@media (max-width: 1024px)':{
      display:'flex',
      flexWrap:'wrap'
    }
  },
  CircleContainer: {
    display: "flex",
    gap: theme.spacing.s300,
  },
  CircleImgDiv: {
    height: "48px",
    width: "100%",
    maxWidth: "48px",
    borderRadius: "50%",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s300,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
  },
  btnStyle: {
    width: "60% !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width :768px)": {
      width: "100% !important",
    },
  },
  checkBoxContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s100,
    flexWrap:'wrap'
  },
  buynowButton: {
    width: "100%",
  },
  buynowButtonStyle: {
    width: "100% !important",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${theme.light.negative.surface.light} !important`,
  },
  viewButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
    marginTop: theme.spacing.s250,
    "&:hover": {
      color: theme.light.negative.onSurface.medium,
    },
  },
  starColor: {
    "& path": {
      fill: theme.light.warning.onSurface.medium,
    },
  },
  brandTitle: {
    width: "100%",
  },
  svgCLose: {
    position: "absolute",
    top: "4%",
    right: "3%",
    cursor: "pointer",
    zIndex: "100",
  },
  activeStatus: {
    background: theme.light.neutral.onSurface.title,
    color: theme.light.neutral.surface.lighter,
    transition: "color 0.3s",
  },
  checkedStatus: {
    width: "100% !important",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${theme.light.negative.onSurface.medium} !important`,
  },
  activeImage: {
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: theme.light.neutral.onSurface.title,
  },
  activeImages: {
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: theme.light.neutral.onSurface.title,
  },

  favouriteActive:{
    backgroundColor: theme.light.neutral.onSurface.title
  },
}));
