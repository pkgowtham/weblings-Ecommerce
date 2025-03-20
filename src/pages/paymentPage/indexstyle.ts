import { createUseStyles } from "react-jss";
import { theme } from "../../../theme /theme";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  PaymentContainer: {
    display: "flex",
    flexDirection: "column",
    background: theme.light.neutral.surface.light,
    width: "100%",
    padding: theme.spacing.s800,
    gap: theme.spacing.s600,
  },
  PaymentWrapper: {
    display: "flex",
    width: "100%",
    gap: theme.spacing.s600,
    // justifyContent:'center'
  },
  ProductCardContainer: {
    width: "100%",
    maxWidth: "711px",
    height: "552px",
    padding: `${theme.spacing.s600} ${theme.spacing.s800} ${theme.spacing.s800} ${theme.spacing.s800}`,
    gap: theme.spacing.s1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b300,
    background: theme.light.neutral.surface.lighter,
  },
  Nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "28px",
    alignItems: "center",
  },
  LogoDiv: {
    display: "flex",
    gap: theme.spacing.s200,
    alignItems: "center",
  },
  ShopLogo: {
    width: "100%",
    height: "100%",
  },
  ShopLogoDiv: {
    width: "100%",
    maxWidth: "20px",
    height: "20px",
  },
  ArrowLogoDiv: {
    width: "100%",
    maxWidth: "16px",
    height: "10px",
  },
  ArrowLogo: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  Header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "28px",
    alignItems: "center",
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  ProductContainer: {},
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
  SubDiv: {
    width: "100%",
    maxWidth: "16px",
    height: "8px",
  },
  SubImg: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  AddDiv: {
    width: "100%",
    maxWidth: "16px",
    height: "16px",
  },
  AddImg: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  AmountContainer: {},
  ContentContainer: {
    marginTop: theme.spacing.s600,
  },
  Content: {
    display: "flex",
    justifyContent: "space-between",
  },
  BtnStyle: {
    width: "100%",
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
  OrderContainer: {
    width: "100%",
    maxWidth: "442px",
    height: "521px",
    padding: theme.spacing.s800,
    gap: theme.spacing.s1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b300,
    background: theme.light.neutral.surface.lighter,
  },
  OrderDiv: {},
  LogoWrapper: {
    display: "flex",
    gap: theme.spacing.s400,
  },
  OrderContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${theme.spacing.s600} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.light.neutral.border.light}`,
  },
  OrderImgDiv: {
    width: "100%",
    maxWidth: "60px",
    height: "80px",
  },
  OrderImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.borderRadius.b200,
  },
  TotalDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing.s600,
  },
  Delevery: {
    marginTop: theme.spacing.s250,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s200,
  },
  FormContainer: {
    width: "100%",
    maxWidth: "711px",
    padding: `${theme.spacing.s600} ${theme.spacing.s800} ${theme.spacing.s800} ${theme.spacing.s800}`,
    gap: theme.spacing.s1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b300,
    background: theme.light.neutral.surface.lighter,
  },
  NameDiv: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing.s600,
    width: "100%",
  },
  InputDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing.s250,
  },
  Label: {},
  Input: {
    border: `1px solid ${theme.light.neutral.border.light}`,
    width: "100%",
    maxWidth: "311px",
    borderRadius: theme.borderRadius.b200,
    height: "40px",
    cursor: "pointer",
    padding: `${theme.spacing.s200} ${theme.spacing.s300} ${theme.spacing.s200} ${theme.spacing.s300}`,
  },
  CheckBox: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: theme.spacing.s500,
    gap: theme.spacing.s500,
  },
  CheckBoxWrapper: {
    display: "flex",
    gap: theme.spacing.s250,
  },
  CheckBoxButton: {
    width: "100%",
  },
  ButtonStyle: {
    width: "100%",
    height: "48px",
    background: theme.light.neutral.surface.light,
    borderRadius: theme.borderRadius.b700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.s400,
    border: `1px solid ${theme.light.neutral.border.light}`,
    backgroundColor: theme.light.neutral.onSurface.dark,
    color: theme.light.neutral.surface.light,
    cursor: "pointer",
  },
  checked: {
    background: theme.light.neutral.onSurface.title,
  },
  PayContainer:{
    width: "100%",
    maxWidth: "711px",
    height: "364px",
    padding: theme.spacing.s800,
    gap: theme.spacing.s1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b300,
    background: theme.light.neutral.surface.lighter,
  },
  RazorContainer:{
    width:'100%',
    height:'72px',
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b300,
    padding: `${theme.spacing.s200} ${theme.spacing.s300} ${theme.spacing.s200} ${theme.spacing.s300}`,
    cursor:'pointer',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  CashContainer:{
    width:'100%',
    height:'72px',
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b300,
    padding: `${theme.spacing.s200} ${theme.spacing.s300} ${theme.spacing.s200} ${theme.spacing.s300}`,
    cursor:'pointer',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  PaymentBtn:{
    width: "100%",
    height: "48px",
    borderRadius: theme.borderRadius.b700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.s400,
    border: `1px solid ${theme.light.neutral.border.light}`,
    color: theme.light.neutral.surface.light,
    cursor: "pointer",
    background: theme.light.neutral.onSurface.title,
  },
  PaymentLabel:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    cursor:'pointer'
  },
  PaymentText:{

  },
  PaymentIcon:{
    width:'100%',
    height:'100%'
  },
  PaymentDIv:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s150
  },
  PaymentIconDiv:{
    width:'100%',
    maxWidth:'94px',
    height:'16px'
  },
  CashDIv:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s150
  },
  CashText:{

  },
  CashIconDiv:{
    width:'100%',
    maxWidth:'34px',
    height:'20px'
  },
  CashIcon:{
    width:'100%',
    height:'100%'
  }
}));
