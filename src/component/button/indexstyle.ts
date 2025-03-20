import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  buttonStyle: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent:'center',
    gap:theme.spacing.s400,
    padding: `${theme.spacing.s400} ${theme.spacing.s600}`,
    borderRadius: theme.borderRadius.b900,
    backgroundColor: theme.light.neutral.onSurface.title,
    color: theme.light.neutral.surface.lighter,
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.light.neutral.onSurface.title,
      color: theme.light.neutral.onSurface.negative,
    },
    "&:focus": {
      backgroundColor: theme.light.neutral.onSurface.medium,
      color: theme.light.neutral.surface.lighter,
    },
  },
  buttonIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
