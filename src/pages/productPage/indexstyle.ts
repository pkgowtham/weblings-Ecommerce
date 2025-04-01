import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Nav: {
    width: "90%",
    height: "40px",
    padding: theme.spacing.s500,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap:'wrap'
  },
  navContent: {
    display: "flex",
    gap: theme.spacing.s200,
    alignItems: "center",
  },
  ProductContainer: {
    display: "flex",
    width: "100%",
    // maxWidth: "1170px",
    height: "100%",
    // maxHeight: "700px",
    gap: theme.spacing.s600,
    marginTop: theme.spacing.s500,
    margin:'0 auto',
    justifyContent:'center',
    "@media (max-width :1024px)":{
      width:'100%',
      padding:theme.spacing.s300
    },
    "@media (max-width :768px)":{
      width:'100%',
      padding:theme.spacing.s300,
      display:'flex',
      flexDirection:'column'
    },
  },
  LeftDiv: {
    display: "flex",
    gap: theme.spacing.s200,
    width: "580px",
    // maxHeight:'700px',
    // position:'sticky',
    "@media (max-width :768px)":{
      width:'100%',
    },
  },
  LeftDivSmall: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s150,
  },
  ImageDiv: {
    width: "100%",
    maxWidth: "50px",
    cursor: "pointer",
  },
  Boder: {
    borderColor: theme.light.neutral.onSurface.title,
    border: `1px solid ${theme.light.neutral.onSurface.title}`,
    borderRadius: theme.borderRadius.b150,
  },
  Image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b150,
  },
  ImgDiv: {
    width: "100%",
    height:'50%',
    // maxWidth: "525px",
    // height: "700px",
    "@media (max-width :768px)":{
      width:'100%',
    },
  },
  Img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b200,
  },
  RightDiv: {
    width: "580px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s500,
    // Custom Scrollbar Styles
    "&::-webkit-scrollbar": {
      width: "8px", // Width of the scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "@media (max-width :768px)":{
      width:'100%', 
      overflow:'visible'
    },
  },
  StarDiv: {
    width: "100%",
    maxWidth: "60px",
    height: "15px",
    display: "flex",
  },
  StarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  StarContent: {
    display: "flex",
    gap: theme.spacing.s2000,
    alignItems: "center",
  },
  Table: {
    width: "100%",
    maxWidth: "513px",
    height: "139px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b150,
    padding: theme.spacing.s250,
  },
  TableContent: {
    width: "100%",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
    height: "25px",
    padding: theme.spacing.s500,
    display: "flex",
    alignItems: "center",
  },
  TableContentBoder: {
    width: "100%",
    height: "25px",
    padding: theme.spacing.s500,
    display: "flex",
    alignItems: "center",
  },
  EyeContainer: {
    display: "flex",
    gap: theme.spacing.s250,
    alignItems: "center",
  },
  EyeDiv: {
    height: "20px",
    width: "100%",
    maxWidth: "20px",
  },
  EyeImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  ColorSection: {},
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
  Product: {
    display: "flex",
    gap: theme.spacing.s300,
  },
  Gray: {
    marginBottom: theme.spacing.s400,
  },
  SizeSection: {},
  SizeNav: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing.s400,
    marginBottom: theme.spacing.s400,
  },
  SizeChart: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s400,
  },
  Chart: {
    width: "fit-content",
    // maxWidth: "8px",
    height: "20px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s500,
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
  ChartStyle: {
    background: theme.light.neutral.onSurface.title,
    color: theme.light.neutral.surface.lighter,
  },
  Compare: {
    display: "flex",
    gap: theme.spacing.s800,
    width: "100%",
    marginTop: theme.spacing.s500,
    padding: `${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s600} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  Color: {
    cursor: "pointer",
  },
  HurryUp: {},
  HurryText: {
    marginTop: theme.spacing.s300,
  },
  Buttons: {
    marginTop: theme.spacing.s400,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  IncreaseBtn: {
    width: "100%",
    maxWidth: "128px",
    height: "48px",
    background: theme.light.neutral.surface.light,
    borderRadius: theme.borderRadius.b700,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.s400,
    border: `1px solid ${theme.light.neutral.border.light}`,
  },
  Sub: {
    cursor: "pointer",
    border: "none",
    background: "none",
  },
  Add: {
    cursor: "pointer",
    border: "none",
    background: "none",
  },
  BtnDiv: {},
  BtnStyle: {
    width: "250px",
    height: "48px",
    background: theme.light.neutral.surface.light,
    borderRadius: theme.borderRadius.b700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.s400,
    border: `1px solid ${theme.light.neutral.border.light}`,
    backgroundColor: theme.light.neutral.onSurface.title,
    color: theme.light.neutral.surface.light,
    cursor: "pointer",
  },
  CircleImgDiv: {
    height: "48px",
    width: "100%",
    maxWidth: "48px",
    borderRadius: "50%",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s300,
    cursor: "pointer",
    display:'flex'
  },
  CircleImg: {
    height: "100%",
    width: "100%",
  },
  CircleContainer: {
    display: "flex",
    gap: theme.spacing.s300,
  },
  CheckBox: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: theme.spacing.s500,
    gap: theme.spacing.s500,
  },
  CheckBoxButton: {
    width: "100%",
  },
  CheckBoxWrapper: {
    display: "flex",
    gap: theme.spacing.s250,
  },
  ButtonStyle: {
    width: "100% !important",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:`${theme.light.negative.surface.light} !important`,
  },

  checked: {
    width: "100% !important",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:`${theme.light.negative.onSurface.medium} !important`
  },
  Sizes: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s500,
    marginTop: theme.spacing.s500,
    padding: `${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s250} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  ImgContainer: {
    height: "80px",
    width: "100%",
    maxWidth: "80px",
  },
  ImgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  SizeWrapper: {
    display: "flex",
    alignItems: "start",
    width: "100%",
    justifyContent: "space-between",
    gap: theme.spacing.s500,
  },
  Available: {
    marginTop: theme.spacing.s500,
  },
  CheckOut: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: theme.spacing.s500,
    flexDirection: "column",
    gap: theme.spacing.s300,
  },
  PaymentDiv: {
    width: "100%",
    maxWidth: "340px",
    height: "22px",
  },
  PaymentImg: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s300,
    marginTop:theme.spacing.s300,
    "@media (max-width :768px)":{
      flexWrap:'wrap'
    }
  },
  buttonColor: {
    "& path": {
      fill: theme.light.neutral.onSurface.dark,
    },
  },
  buttonStyle: {
    width: "40% !important",
    backgroundColor: `${theme.light.neutral.surface.light} !important`,
    color: `${theme.light.neutral.onSurface.dark} !important`,
    display: "flex",
    justifyContent: "center",
  },
  btnStyle: {
    width: "60% !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dotStyle: {
    width: "3px",
    height: "3px",
    backgroundColor: theme.light.neutral.onSurface.dark,
    borderRadius: "50%",
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
    cursor:'pointer',   
    "&:hover":{
        color:theme.light.negative.onSurface.medium
    }
  },

  starColor:{
    '& path':{
        fill:theme.light.warning.onSurface.medium
    }
  },

  newStarColor:{
    '& path':{
      fill:theme.light.warning.onSurface.medium
  }
  },

  favouriteActive:{
    backgroundColor: theme.light.neutral.onSurface.title
  },
}));
