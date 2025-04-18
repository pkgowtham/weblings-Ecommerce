import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  Footer: {
    display: "flex",
    flexDirection: "column",
    borderTop: `1px solid ${theme.light.neutral.border.light}`,
    alignItems: "center",
    width: "100%",
    height: "400px",
    marginTop: theme.spacing.s1600,
  },
  FooterContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "90%",
    padding:theme.spacing.s800,
    flexWrap: "wrap",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
    "@media (max-width: 1024px)": {
      gap: theme.spacing.s500,
      padding:`${theme.spacing.s800} ${theme.spacing.s0}`
    },
  },
  FirstSection: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s800,
    width: "402px",
    cursor: "pointer",
    "@media (max-width: 768px)": {
        width:'100%',
        gap: theme.spacing.s400,
      }
  },
  SubDiv: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: theme.spacing.s800,
  },
  weblingslogo: {
    width: "55px",
    height: "55px",
  },
  Title: {
    color: theme.light.neutral.onSurface.title,
  },
  Para: {
    // marginBottom:'100px'
    marginTop:theme.spacing.s200
  },
  ThirdSection: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s400,
    width: "402px",
    cursor: "pointer",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  li: {
    display: "flex",
    alignItems: "start",
    gap: "15px",
  },
  LogoStyle: {
    width: "16px",
    height: "16px",
  },

  Icons: {
    display: "flex",
    gap: theme.spacing.s250,
  },
  SecondSection: {
    display: "flex",
    width: "78px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing.s800,
    cursor: "pointer",
  },
  ulist: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  list: {
    listStyle: "none",
  },
  SectionTitleColor: {
    // color:theme.light.neutral.onSurface.medium
  },
  Label: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s200,
  },
  Input: {
    height: "40px",
    width: "180px",
    display: "flex",
    alignItems: "flex-start",
    padding: `${theme.spacing.s250} ${theme.spacing.s500}`,
    borderRadius: theme.borderRadius.b500,
    border: `1px solid ${theme.light.neutral.border.light}`,
    background: theme.light.neutral.surface.lighter,
    cursor: "pointer",
  },
  ButtonDiv: {
    display: "flex",
    gap: theme.spacing.s300,
    alignItems: "center",
    width: "100%",
  },
  BtnStyle: {
    height: "40px",
    width: "100px",
    padding: theme.spacing.s400,
    display: "flex",
    alignItems: "center",
    borderRadius: theme.borderRadius.b400,
    border: "none",
    background: theme.light.neutral.onSurface.title,
    color: theme.light.neutral.surface.lighter,
    justifyContent: "center",
    cursor: "pointer",
  },
  FooterLogo: {
    borderColor: theme.light.neutral.onSurface.title,
    borderRadius: "50%",
    border: `1px solid ${theme.light.neutral.onSurface.title}`,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.s200,
  },
  SubFooterDiv: {
    display: "flex",
    gap: theme.spacing.s500,
    padding: theme.spacing.s800,
    "@media (max-width: 768px)":{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    }
  },
  USD: {
    display: "flex",
    gap: theme.spacing.s100,
  },
  ArrowStyle: {
    width: "20px",
    height: "20px",
  },
  accordContainer: {
    width: "100%",
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
  accordDiv:{
    width:'100%'
  },
  expandDiv:{
    width: "100%",
    height: "fit-content",
  },
  expandDivLetter:{
    width: "100%",
    height: "fit-content",
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s300
  },
  textStyle:{
    width:'100%',
    padding:theme.spacing.s200
  },
  buttonContainer:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s400
  },
  btnStyle:{
    width:'100% !important'
  }
}));
