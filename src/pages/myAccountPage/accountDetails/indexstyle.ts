import { createUseStyles } from "react-jss";
import { Theme } from "../../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  welcomeDiv: {
    display: "flex",
    gap: theme.spacing.s250,
    alignItems: "center",
  },
  accountDiv: {
    width: "100%",
  },
  detailsColor: {
    marginTop: theme.spacing.s500,
    marginBottom: theme.spacing.s500,
  },
  accountDetails: {
    width: "100%",
    height: "fit-content",
    border: `1px solid ${theme.light.neutral.border.light}`,
    borderRadius: theme.borderRadius.b200,
    display:'flex',
    // padding:theme.spacing.s800,
    alignItems:'center',
    gap:theme.spacing.s200,
    flexDirection:'column'
  },
  contentDiv:{
    display:'flex',
    alignItems:'center',
    gap:theme.spacing.s200,
    padding:`${theme.spacing.s400} ${theme.spacing.s500}`,
    width:'100%',
  },
  lightColor:{
    color:theme.light.neutral.onSurface.dark
  },
  buttonDiv:{
    marginTop:theme.spacing.s400
  },
  buttonStyle:{
    height:'44px !important'
  },
  emptyOrder:{
    width:'100%',
    borderRadius:theme.spacing.s200,
    backgroundColor:theme.light.positive.surface.light,
    padding:`${theme.spacing.s400} ${theme.spacing.s600}`,
  },
  greenColor:{
    color:theme.light.positive.surface.dark
  }
}));
