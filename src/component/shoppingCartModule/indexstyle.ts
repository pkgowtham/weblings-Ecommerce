import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  cartContainer: {
    width: "30%",
    height: "100%",
    backgroundColor: theme.light.neutral.surface.lighter,
    boxShadow: theme.elevation.m,
    position: "fixed",
    top: "0%",
    right: "0%",
    zIndex: "1000",
  },
  cartHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.spacing.s400} ${theme.spacing.s800}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  shippingDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap:theme.spacing.s200,
    width: "100%",
    backgroundColor: theme.light.neutral.surface.light,
    padding: `${theme.spacing.s800} ${theme.spacing.s600} ${theme.spacing.s400} ${theme.spacing.s600}`,
  },
  timeDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: `${theme.spacing.s400} ${theme.spacing.s800}`,
  },
  cartItems: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.s800,
    gap: theme.spacing.s400,
    overflow:'auto',
    overflowY:'scroll',
    height:'200px',
    scrollbarWidth:'thin'
    // marginBottom: theme.spacing.s500,
  },
  imageContainer: {
    height: "170px",
    width: "fit-cntent",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b200,
  },
  buttonStyle: {
    width: "fit-content !important",
    height: "30px ! important",
    backgroundColor: `${theme.light.neutral.surface.light} !important`,
    borderRadius: `${theme.borderRadius.b0} !important`,
    color: `${theme.light.neutral.onSurface.title} !important`,
    padding: `${theme.spacing.s200} !important`,
  },
  buttonContainer: {
    width: "100%",
  },
  countContaier: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    gap: theme.spacing.s150,
  },
  blackColor: {
    "& path": {
      fill: theme.light.neutral.onSurface.title,
    },
  },
  contentsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.s200,
  },
  cartIcons: {
    width: "100%",
    // padding:theme.spacing.s200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: `1px solid ${theme.light.neutral.border.light}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  centerDiv: {
    borderLeft: `1px solid ${theme.light.neutral.border.light}`,
    borderRight: `1px solid ${theme.light.neutral.border.light}`,
    padding: `${theme.spacing.s0} ${theme.spacing.s600}`,
    height: "50px",
    display: "flex",
    alignItems: "center",
    cursor:'pointer'
  },
  leftDiv: {
    padding: `${theme.spacing.s0} ${theme.spacing.s400}`,
    height: "50px",
    display: "flex",
    alignItems: "center",
    cursor:'pointer'
  },
  rightDiv: {
    padding: `${theme.spacing.s0} ${theme.spacing.s400}`,
    height: "50px",
    display: "flex",
    alignItems: "center",
    cursor:'pointer'
  },
  buttonCartContainer:{
    width:'100%',
    padding: `${theme.spacing.s800} ${theme.spacing.s800} ${theme.spacing.s800} ${theme.spacing.s800}`,
    display:'flex',
    flexDirection:'column',
    backgroundColor:theme.light.neutral.surface.light
  },
  subTotal:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  lightCOlor:{
    color: theme.light.neutral.onSurface.dark,
  },
  checkBox:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s200,
    marginTop:theme.spacing.s400,
    marginBottom:theme.spacing.s600
  },
  btnDiv:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s200
  },
  cartStyle:{
    width: "100% !important",
    backgroundColor: `${theme.light.neutral.surface.lighter} !important`,
    border: `1px solid ${theme.light.neutral.border.light} !important`,
    borderColor:`${theme.light.neutral.onSurface.title} !important`,
    color:`${theme.light.neutral.onSurface.title} !important`
  },
  viewStyle:{
    width: "100% !important",
  },
  divider:{
    width:'100%',
    height:'6px',
    borderRadius:theme.spacing.s150,
    backgroundColor:theme.light.negative.onSurface.medium
  },
  addColor:{
   '& path':{
    fill:theme.light.neutral.onSurface.dark
   }
  }
}));
