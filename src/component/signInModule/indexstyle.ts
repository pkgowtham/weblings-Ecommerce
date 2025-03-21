import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  moduleStyle: {
    height: "fit-content",
    width: "30%",
    top: "15%",
    left: "35%",
    padding: theme.spacing.s800,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s250,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  svgCLose: {
    right: "-5%",
    top: "-30%",
    position: "absolute",
  },
  lightColor: {
    color: theme.light.neutral.onSurface.dark,
  },
  inputFeilds: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing.s250,
    marginTop: theme.spacing.s300,
  },
  inputFeildsPassword:{
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing.s250,
    marginTop: theme.spacing.s300,
    marginBottom:theme.spacing.s400
  },
  forgotPassword: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing.s200,
    marginTop: theme.spacing.s300,
    cursor: "pointer",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s300,
  },
  loginButton: {
    width: "100% !important",
  },
  accountButton: {
    width: "100% !important",
    backgroundColor: `${theme.light.neutral.surface.lighter} !important`,
    border: `1px solid ${theme.light.neutral.border.light} !important`,
    borderColor: `${theme.light.neutral.onSurface.title} !important`,
    color: `${theme.light.neutral.onSurface.title} !important`,
    "&:hover": {
      backgroundColor: `${theme.light.neutral.onSurface.title} !important`,
      color: `${theme.light.neutral.surface.lighter} !important`,
    },
  },
  contents:{
    display:'flex',
    width:'100%',
    marginTop:theme.spacing.s500,
    marginBottom:theme.spacing.s500,

  }
}));
