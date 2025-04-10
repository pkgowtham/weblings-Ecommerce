import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  tooltipContainer: {
    position: "relative",
    display: "inline-block",
  },
  tooltipContent: {
    position: "absolute",
    padding: "6px 12px",
    background: "#333",
    color: "#fff",
    borderRadius: 4,
    fontSize: "0.875rem",
    lineHeight: 1.4,
    zIndex: 100,
    whiteSpace: "nowrap",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
  },
  // Positioning variants
  top: {
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: 8,
  },
  bottom: {
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: 8,
  },
  left: {
    right: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginRight: 8,
  },
  right: {
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: 8,
  },
  // Arrow styling
  arrow: {
    position: "absolute",
    width: 8,
    height: 8,
    background: "#333",
    transform: "rotate(45deg)",
  },
  // Arrow positioning
  arrowTop: {
    bottom: -4,
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
  },
  arrowBottom: {
    top: -4,
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
  },
  arrowLeft: {
    right: -4,
    top: "50%",
    transform: "translateY(-50%) rotate(45deg)",
  },
  arrowRight: {
    left: -4,
    top: "50%",
    transform: "translateY(-50%) rotate(45deg)",
  },
  // Visibility states
  visible: {
    opacity: 1,
    visibility: "visible",
  },
  hidden: {
    opacity: 0,
    visibility: "hidden",
  },
});
