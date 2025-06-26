import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
  },
  pageItem: {
    margin: "0 5px",
  },
  pageLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border:`1px solid ${theme.color.neutral.border.light}`,
    color: theme.color.neutral.onSurface.dark,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor:theme.color.neutral.surface.light,
    },
  },
  activePage: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
    },
  },
  disabledPage: {
    opacity: 0.6,
    cursor: "not-allowed",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  ellipsis: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "36px",
    height: "36px",
    color: "#333",
  },
}));
