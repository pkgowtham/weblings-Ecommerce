import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainContainer: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    gap: theme.spacing.s800,
    "@media (max-width : 768px)":{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      width:'100%'
    }
  },
  productImageContainer: {
    width: "30%",
    cursor:'pointer',
    position:'relative',
    height:'350px',
    maxHeight:'350px',
    "@media (max-width : 768px)":{
      width:'100%',
    }
  },
  
  contentContainer: {
    width: "70%",
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',
    gap:theme.spacing.s500,
    "@media (max-width : 768px)":{
      width:'100%',
    }
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b200,
  },
  blackColor: {
    color: theme.light.neutral.onSurface.title,
  },
  productImage: {
    display: "flex",
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
  itemDiv: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
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
    display:'flex',
    justifyContent:'center'
  },
  buttonContainer:{
    display:'flex',
    alignItems:'center',
    width:'100%',
    textAlign:'center',
    gap:theme.spacing.s300
  },
  priceDiv:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    width:'100%',
    gap:theme.spacing.s100
  },
  starColor:{
    '& path':{
      fill:theme.light.warning.onSurface.medium
    }
  },
  buttonStyle:{
    minWidth:'35%',
    display:'flex',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    height:'80%',
    "@media (max-width : 1024px)":{
      width:'100% !important',
    }
  },
  activeImage:{
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderColor: theme.light.neutral.onSurface.title,
  }
}));
