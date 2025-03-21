import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainContainer: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
  },
  productCard: {
    height: "fit-content",
    width: "auto",
  },
  itemStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing.s300,
    cursor: "pointer",
  },
  cardContents: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing.s200,
  },
  imageDiv: {
    width: "40px",
    height: "40px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: "50%",
    padding: theme.spacing.s100,
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.light.neutral.onSurface.title,
    },
  },
  activeStatus: {
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: theme.light.neutral.onSurface.title,
  },
  itemDiv: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  starContainer: {},
  productImage: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s200,
  },
  starColor: {
    "& path": {
      fill: theme.light.warning.onSurface.medium,
    },
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s300,
  },
  redColor: {
    color: theme.light.negative.surface.medium,
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
    textDecoration:"line-through" 
  },
  imageContainer:{
    position:'relative'
  },
  favourite:{
    height: "48px",
    width: "100%",
    maxWidth: "48px",
    borderRadius: "50%",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s300,
    cursor: "pointer",
    position:'absolute',
    backgroundColor:theme.light.neutral.surface.lighter,
    top:'5%',
    right:'5%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    '&:hover':{
      backgroundColor:theme.light.neutral.onSurface.title,
    }
  },
  buttonContainer:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonStyle:{
    width:'80% !important',
    backgroundColor:`${theme.light.neutral.surface.lighter} !important`,
    color:`${theme.light.neutral.onSurface.title} !important`,
    position:'absolute',
    top:'80%',
    height:'45px !important',
    '&:hover':{
      backgroundColor:`${theme.light.neutral.onSurface.title} !important`,
      color:`${theme.light.neutral.surface.light} !important`
    }
  }
}));
