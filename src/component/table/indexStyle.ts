import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  shoppingCart: {
    // maxWidth: "800px",
    margin: "0 auto",
    // padding: theme.spacing.s500,
  },
  cartTable: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
    gap:theme.spacing.s400,
    marginTop: theme.spacing.s500,
  },
  cartHeader: {
    paddingBottom: theme.spacing.s250,
    borderBottom: `1px solid ${theme.color.neutral.border.light}`,
    gridColumn: "1 / -1",
    display: "grid",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
  },
  headerProduct: {
    textAlign: "left",
  },
  headerPrice: {
    textAlign: "center",
  },
  headerQuantity: {
    textAlign: "center",
  },
  headerTotal: {
    textAlign: "right",
  },
  cartItem: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
    gridColumn: "1 / -1",
    padding: `${theme.spacing.s400} ${theme.spacing.s0}`,
    borderBottom: `1px solid ${theme.color.neutral.border.light}`,
    alignItems: "center",
  },
  itemProduct: {
    textAlign: "left",
    display:'flex',
    gap: theme.spacing.s400,
  },
  productName: {
    fontWeight: "bold",
    marginBottom: theme.spacing.s150,
  },
  productDetails: {
    color:theme.color.neutral.border.medium,
    marginBottom:theme.spacing.s250,
  },
  removeBtn: {
    background: "none",
    border: "none",
    color:theme.color.neutral.onSurface.dark,
    textDecoration: "underline",
    cursor: "pointer",
    "&:hover": {
      color:theme.color.neutral.surface.inverse,
    },
  },
  itemPrice: {
    textAlign: "center",
  },
  itemQuantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.s150,
    // "& button": {
    //   background: "#f5f5f5",
    //   border: "1px solid #ddd",
    //   padding: "0 8px",
    //   cursor: "pointer",
    // },
  },
  itemTotal: {
    textAlign: "right",
  },
  imageDiv: {
    width: "30%",
    height: "100px",
  },
  fashionImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing.s200,
  },
  remove: {
    color: theme.color.neutral.onSurface.dark,
    cursor: "pointer",
    textDecoration: "underline",
    width: "100%",
    marginTop: theme.spacing.s250,
    "&:hover": {
      color: theme.color.neutral.onSurface.light,
    },
  },
  btnStyle: {
    backgroundColor: `${theme.color.neutral.surface.light} !important`,
    color: `${theme.color.neutral.onSurface.light} !important`,
  },
  svgAdd: {
    "& path": {
      fill: theme.color.neutral.onSurface.light,
    },
  },
  productDetailsDiv:{
    display: "flex",
    flexDirection: "column",
  }
}));
