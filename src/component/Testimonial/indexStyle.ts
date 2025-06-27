import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  carousel: {
    position: "relative",
    maxWidth: "85%",
    overflow: "hidden",
    padding: "20px 0",
    margin: "0 auto",
  },
  carouselContainer: {
    display: "flex",
    transition: "transform 0.5s ease",
    width: "100%",
  },
  testimonial: {
    minWidth: "100%",
    padding: "0 15px",
    boxSizing: "border-box",

    "@media (min-width: 1024px)": {
      minWidth: "50%", // Show 2 on desktop
    },
  },
  testimonialContent: {
    // backgroundColor: '#f8f8f8',
    borderRadius: "8px",
    // padding: "20px",
    // boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    height: "100%",
    border: `1px solid ${theme.color.neutral.border.light}`,
    display:'flex',
    gap:'20px'
  },
  author: {
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "1.1rem",
  },
  verified: {
    color: "#666",
    fontSize: "0.8em",
    marginBottom: "10px",
    display: "block",
  },
  product: {
    borderTop: "1px dashed #ccc",
    marginTop: "15px",
    paddingTop: "15px",
    fontWeight: "bold",
    color: "#333",
    fontSize: "0.9rem",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,

    "&:hover": {
      background: "rgba(0,0,0,0.7)",
    },

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  prevButton: {
    left: "10px",

    "@media (min-width: 1024px)": {
      left: "20px",
    },
  },
  nextButton: {
    right: "10px",

    "@media (min-width: 1024px)": {
      right: "20px",
    },
  },
  indicators: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  indicator: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#ccc",
    margin: "0 5px",
    cursor: "pointer",

    "&.active": {
      background: "#333",
    },
  },
  Card:{
     height: "313px",
    width: "60%",
    borderRadius: theme.borderRadius.b100,
    // border: `1px solid ${theme.color.brand.border.light}`,
    backgroundColor: theme.color.brand.surface.lighter,
    // marginBottom: theme.spacing.s100,
  },
  CardLogo:{
    width:'100%',
    height:'100%',
    // objectFit:'fill'
  },
   rightArrow: {
    cursor: "pointer",
    position: "absolute",
    top: 135,
    right: 0,
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:theme.color.neutral.surface.lighter,
    border: `1px solid ${theme.color.neutral.border.light}`,
    '&:hover':{
      color:theme.color.neutral.surface.light,
      backgroundColor:theme.color.neutral.onSurface.light
    }
  },
}));
