import React from "react";
import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

const breakpoints = {
  desktop: 1024,
  tablet: 768,
  mobile: 0,
};

type ResponsiveProps = {
  children: React.ReactNode;
  hideOn?: "mobile" | "tablet" | "desktop";
  showOnlyOn?: "mobile" | "tablet" | "desktop";
  className?: string;
  style?: React.CSSProperties;
  flexContainer?:boolean;
};

const useStyles = createUseStyles({
  responsive: {
    display: "block",
  },
  flexContainer: { // New style for flex containers
    display: "flex",
    alignItems: "center",
    gap: "10px", // Use your theme
  },
  hideOnMobile: {
    [`@media (max-width: ${breakpoints.tablet - 1}px)`]: {
      display: "none !important",
    },
  },
  hideOnTablet: {
    [`@media (min-width: ${breakpoints.tablet}px) and (max-width: ${
      breakpoints.desktop - 1
    }px)`]: {
      display: "none !important",
    },
  },
  hideOnDesktop: {
    [`@media (min-width: ${breakpoints.desktop}px)`]: {
      display: "none !important",
    },
  },
  showOnlyOnMobile: {
    display: "none !important",
    [`@media (max-width: ${breakpoints.tablet - 1}px)`]: {
      display: "block !important",
    },
  },
  showOnlyOnTablet: {
    display: "none !important",
    [`@media (min-width: ${breakpoints.tablet}px) and (max-width: ${
      breakpoints.desktop - 1
    }px)`]: {
      display: "block !important",
    },
  },
  showOnlyOnDesktop: {
    display: "none !important",
    [`@media (min-width: ${breakpoints.desktop}px)`]: {
      display: "block !important",
    },
  },
});

export const HideComponents: React.FC<ResponsiveProps> = ({
  children,
  hideOn,
  showOnlyOn,
  className = "",
  style,
  flexContainer = false,
}) => {
  const classes = useStyles();
  let responsiveClass = "";

  switch (hideOn) {
    case "mobile":
      responsiveClass = classes.hideOnMobile;
      break;
    case "tablet":
      responsiveClass = classes.hideOnTablet;
      break;
    case "desktop":
      responsiveClass = classes.hideOnDesktop;
      break;
    default:
      switch (showOnlyOn) {
        case "mobile":
          responsiveClass = classes.showOnlyOnMobile;
          break;
        case "tablet":
          responsiveClass = classes.showOnlyOnTablet;
          break;
        case "desktop":
          responsiveClass = classes.showOnlyOnDesktop;
          break;
        default:
          responsiveClass = "";
      }
  }

  return (
    <div
      className={`${classes.responsive}  ${flexContainer ? classes.flexContainer : ''}  ${responsiveClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
