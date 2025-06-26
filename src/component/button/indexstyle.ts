import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles((theme: any) => ({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.b800,
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    outline: "none",
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  // Variants
  primary: {
    backgroundColor: theme.color.neutral.surface.inverse,
    color:theme.color.neutral.surface.lighter,
    "&:not(:disabled):hover": {
      backgroundColor: "#1d4ed8",
    },
  },
  secondary: {
    backgroundColor: "#e5e7eb",
    color: "#1f2937",
    "&:not(:disabled):hover": {
      backgroundColor: "#d1d5db",
    },
  },
  outline: {
    backgroundColor: "transparent",
    color: "#374151",
    border: "1px solid #d1d5db",
    "&:not(:disabled):hover": {
      backgroundColor: "#f9fafb",
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#374151",
    "&:not(:disabled):hover": {
      backgroundColor: "#f3f4f6",
    },
  },

  danger: {
    backgroundColor: theme.color.negative.surface.medium,
    color: theme.color.neutral.onSurface.inverse,
    "&:not(:disabled):hover": {
      backgroundColor: theme.color.negative.surface.medium,
    },
  },

  // Sizes
  sm: {
    padding: "0.25rem 0.75rem",
    fontSize: "0.875rem",
  },
  md: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
  },
  lg: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.125rem",
  },
  // Full width
  fullWidth: {
    width: "100%",
  },

  // Icons
  icon: {
    display: "inline-flex",
    alignItems: "center",
  },
  iconLeft: {
    marginRight: "0.5rem",
  },
  iconRight: {
    marginLeft: "0.5rem",
  },

  // Icon sizes
  iconSm: {
    fontSize: "0.875rem",
  },
  iconMd: {
    fontSize: "1rem",
  },
  iconLg: {
    fontSize: "1.125rem",
  },
}));

