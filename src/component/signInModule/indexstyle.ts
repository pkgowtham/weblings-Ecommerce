import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  moduleStyle: {
    height: "fit-content",
    width: "40%",
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
    top: "-40%",
    position: "absolute",
    cursor: "pointer",
  },
  svgBack: {
    left: "-4%",
    top: "-40%",
    position: "absolute",
    cursor: "pointer",
  },
  svgCLoseForgot: {
    right: "-3%",
    top: "-20%",
    position: "absolute",
    cursor: "pointer",
  },
  svgBackForgot: {
    left: "-3%",
    top: "-20%",
    position: "absolute",
    cursor: "pointer",
  },
  lightColor: {
    color: theme.color.neutral.onSurface.dark,
  },
  inputFeilds: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing.s500,
    marginTop: theme.spacing.s300,
  },
  inputFeildsPassword: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: theme.spacing.s250,
    marginTop: theme.spacing.s300,
    marginBottom: theme.spacing.s400,
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
    backgroundColor: `${theme.color.neutral.surface.lighter} !important`,
    border: `1px solid ${theme.color.neutral.border.light} !important`,
    borderColor: `${theme.color.neutral.onSurface.light} !important`,
    color: `${theme.color.neutral.onSurface.light} !important`,
    "&:hover": {
      backgroundColor: `${theme.color.neutral.onSurface.light} !important`,
      color: `${theme.color.neutral.surface.lighter} !important`,
    },
  },
  contents: {
    display: "flex",
    width: "100%",
    marginTop: theme.spacing.s500,
    marginBottom: theme.spacing.s500,
  },
  signInContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s800,
  },
  forgotPasswordContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s1600,
  },
  forgotText: {
    cursor: "pointer",
    paddingLeft: theme.spacing.s200,
    textDecoration: "underline",
  },
}));
