import { createUseStyles } from "react-jss";
import { theme } from "../../../theme /theme";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s1000,
    width: "100%",
    height: "100vh",
    alignItems: "center",
  },
  SucessContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "544px",
    // height: "923px",
  },
  SetONe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  CicleDiv: {
    width: "100%",
    maxWidth: "46px",
    height: "46px",
    marginBottom: theme.spacing.s300,
  },
  CirclImg: {
    width: "100%",
    height: "100%",
  },
  DateDiv: {
    marginTop: theme.spacing.s300,
  },
  IdDiv: {
    marginTop: theme.spacing.s300,
  },
  ProductContainer: {},
  Header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "28px",
    alignItems: "center",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  OrederText:{
    marginBottom:theme.spacing.s300
  },
  ProductDiv: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing.s600} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  LogoContainer: {
    display: "flex",
    gap: theme.spacing.s400,
  },
  FashionImgDiv: {
    width: "100%",
    maxWidth: "60px",
    height: "80px",
  },
  FashionImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b150,
  },
  QuantityContainer: {
    display: "flex",
    gap: theme.spacing.s300,
  },
  AmountContainer: {},
  ContentContainer: {
    marginTop: theme.spacing.s600,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
    paddingBottom: theme.spacing.s500,
  },
  Content: {
    display: "flex",
    justifyContent: "space-between",
  },
  Delivery:{
    padding:`${theme.spacing.s600} ${theme.spacing.s0}`,
    borderBottom:`1px solid ${theme.light.neutral.border.light}`
  },
  DeliveryDiv:{
    display:'flex',
    gap:theme.spacing.s300,
    alignItems:'center'
  },
  VanDiv:{
    width:'100%',
    maxWidth:'20px',
    height:'20px'
  },
  VanImg:{
    width:'100%',
    height:'100%',
  },
  Payment:{
     padding:`${theme.spacing.s600} ${theme.spacing.s0}`,
    borderBottom:`1px solid ${theme.light.neutral.border.light}`
  },
  PaymentDiv:{
    display:'flex',
    gap:theme.spacing.s300,
    alignItems:'center'
  },
  PayDiv:{
    width:'100%',
    maxWidth:'20px',
    height:'20px'
  },
  PayImg:{
    width:'100%',
    height:'100%',
  },
  Text:{
    marginTop:theme.spacing.s100
  }
}));
