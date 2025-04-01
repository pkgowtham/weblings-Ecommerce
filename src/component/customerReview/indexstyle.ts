import { createUseStyles } from "react-jss";
import { theme } from "../../../theme/theme";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  ReviewContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing.s800,
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      width: "100%",
      padding:theme.spacing.s250
    },
  },
  TextDiv: {
    display: "flex",
    justifyContent: "center",
  },
  ReviewDiv: {
    width: "100%",
    maxWidth: "362px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s400,
    borderRight: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s500,
    "@media (max-width: 1024px)": {
      width: "100%",
      borderRight: "none",
      gap:theme.spacing.s250
    },
  },
  StarImg: {
    width: "100%",
    height: "100%",
  },
  StarImgDiv: {
    width: "100%",
    maxWidth: "15px",
    height: "15px",
    display: "flex",
  },
  StarTextDiv: {
    display: "flex",
    gap: theme.spacing.s2000,
    alignItems: "center",
    "@media (max-width: 1024px)": {
      width: "100%",
      borderRight: "none",
      gap:theme.spacing.s250,
      display:'flex',
      // flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
  },
  basedREview:{
    width:'100%',
    "@media (max-width: 1024px)": {
      width: "100%",
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
  },
  RatingDiv: {
    width: "100%",
    maxWidth: "362px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s500,
    borderRight: `1px solid ${theme.light.neutral.border.light}`,
    padding: theme.spacing.s500,
    "@media (max-width: 1024px)": {
      width: "100%",
      borderRight: "none",
    },
  },
  ImgDiv: {
    display: "flex",
  },
  Bar: {
    width: "100%",
    maxWidth: "200px",
    height: "6px",
    background: theme.light.neutral.surface.light,
    borderRadius: theme.borderRadius.b100,
  },
  StarLogo: {
    width: "100%",
    display: "flex",
    // maxWidth: "80px",
  },
  Star: {
    width: "100%",
    height: "100%",
  },
  CheckBoxButton: {
    width: "100%",
    maxWidth: "362px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s1600,
    padding: theme.spacing.s500,
    justifyContent: "center",
  },
  ButtonStyle: {
    width: "100%",
    maxWidth: "250px",
    height: "48px",
    background: theme.light.neutral.surface.lighter,
    borderRadius: theme.borderRadius.b700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.s400,
    border: `1px solid ${theme.light.neutral.onSurface.title}`,
    color: theme.light.neutral.onSurface.title,
    cursor: "pointer",
  },
  ReviewWrapper: {
    display: "flex",
    width: "100%",
    // maxWidth: "1170px",
    justifyContent: "center",
    margin: `${theme.spacing.s0} auto`,
    marginTop: theme.spacing.s500,
    "@media (max-width: 1024px)": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.s250,
    },
  },
  FeedBackDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "1170px",
    height: "336px",
    padding: `${theme.spacing.s0} ${theme.spacing.s0}`,
    marginTop: theme.spacing.s500,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  FeedBack: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s500,
    alignItems: "center",
  },
  Nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: theme.spacing.s500,
  },
  ProfileDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap: theme.spacing.s400,
    marginBottom: theme.spacing.s500,
  },
  UserLogoDiv: {
    width: "100%",
    maxWidth: "50px",
    height: "50px",
    borderRadius: "50%",
    background: theme.light.neutral.surface.light,
    padding: theme.spacing.s250,
  },
  UserLogo: {
    width: "100%",
    height: "100%",
  },
  Title: {
    marginBottom: theme.spacing.s150,
  },
  ImgGalleryDiv: {
    width: "100%",
    height: "94px",
    marginTop: theme.spacing.s400,
    display: "flex",
    gap: theme.spacing.s250,
  },
  ImgGallery: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b150,
  },
  Img: {
    display: "flex",
    width: "100%",
    maxWidth: "94px",
    height: "94px",
    marginTop: theme.spacing.s400,
    cursor: "pointer",
  },
  WriteDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "1170px",
  },
  WriteText: {
    marginBottom: theme.spacing.s400,
    width: "100%",
    textAlign: "center",
  },
  WriteWrapper: {
    width: "100%",
    maxWidth: "568px",
    padding: `${theme.spacing.s0} ${theme.spacing.s400}`,
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing.s1600,
  },
  RateText: {
    width: "100%",
    textAlign: "center",
  },
  FormDiv: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s500,
  },
  Label: {
    textAlign: "center",
    marginBottom: theme.spacing.s200,
  },
  Input: {
    width: "100%",
    height: "48px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: `${theme.spacing.s250} ${theme.spacing.s500}`,
    borderRadius: theme.borderRadius.b600,
    cursor: "pointer",
  },
  FormWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  FormStyle: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    border: `2px dashed ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b600,
    width: "100%",
    height: "120px",
    marginTop: theme.spacing.s500,
  },
  ReviewContain: {
    display: "flex",
    flexDirection: "column",
  },
  ReviewInput: {
    width: "100%",
    height: "120px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: `${theme.spacing.s250} ${theme.spacing.s500}`,
    borderRadius: theme.borderRadius.b600,
    cursor: "pointer",
  },
  Review: {
    width: "100%",
    height: "120px",
    border: `1px solid ${theme.light.neutral.border.light}`,
    padding: `${theme.spacing.s250} ${theme.spacing.s500}`,
    borderRadius: theme.borderRadius.b600,
    cursor: "pointer",
  },
  Picture: {
    width: "100%",
    height: "120px",
    position: "absolute",
    opacity: "0",
    cursor: "pointer",
  },
  DriveImg: {
    width: "100%",
    maxWidth: "50px",
    height: "50px",
    position: "absolute",
    left: "45%",
    top: "30%",
    cursor: "pointer",
  },
  LabelText: {
    textAlign: "center",
    marginBottom: theme.spacing.s200,
    position: "absolute",
    top: "-30px",
    left: "35%",
  },
  TextContent: {
    width: "100%",
    height: "63px",
    marginTop: theme.spacing.s400,
    textAlign: "center",
  },
  BtnDiv: {
    width: "100%",
    marginTop: theme.spacing.s400,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.s500,
    justifyContent: "center",
  },
  BtnStyle: {
    width: "100%",
    maxWidth: "200px",
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
  BtnStyles: {
    width: "100%",
    maxWidth: "200px",
    height: "48px",
    background: theme.light.neutral.surface.lighter,
    borderRadius: theme.borderRadius.b700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.s400,
    border: `1px solid ${theme.light.neutral.onSurface.title}`,
    color: theme.light.neutral.onSurface.title,
    cursor: "pointer",
  },
  ImgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.s200,
    marginBottom: theme.spacing.s400,
  },
  IconStarDiv: {
    width: "100%",
    maxWidth: "25px",
    height: "25px",
  },
  IconStar: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    "&:hover": {},
  },
  starContainer: {},
  starColor: {
    "& path": {
      fill: theme.light.warning.onSurface.medium,
    },
  },

  description: {
    color: theme.light.neutral.onSurface.dark,
  },

  imagesCon: {
    width: "100%",
    position: "relative",
    height: "120px",
    borderRadius: theme.borderRadius.b400,
    borderStyle: "dashed",
    border: `2px solid ${theme.light.neutral.border.light}`,
  },

  image: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderTopLeftRadius: theme.borderRadius.b400,
    borderBottomLeftRadius: theme.borderRadius.b400,
  },

  imgDelete: {
    // width:'10px',
    // height:'10px',
    borderRadius: "50%",
    position: "absolute",
    right: 10,
    top: 10,
    cursor: "pointer",
    // boxShadow:theme.elevation.s
  },

  newStarColor:{
    '& path':{
      fill:theme.light.warning.onSurface.medium
    },

  },

  starCont:{
    width:'100%',
    display:'grid',
    gridTemplateColumns:"1fr 2fr 1fr",
    // display:'flex',
    alignItems:'center',
    gap:theme.spacing.s200,
    // "@media(max-width: 600px)":{
    //   width:'100%',
    //   display:'flex',
    //   alignItems:'center',
    //   justifyContent:'center'
    // }
  },
  starContent:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s150
  }
}));
