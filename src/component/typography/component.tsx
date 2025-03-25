// import React from 'react';
// import { createUseStyles } from 'react-jss';
// import typographyData from './textStyles.json'; 
// import { TypographyProps, TextStyle } from './typographyType'
// import clsx from 'clsx';


// const createStylesFromJson = (styles: TextStyle[]): { [key: string]: React.CSSProperties } => {
//     const jssStyles: { [key: string]: React.CSSProperties } = {};
//     styles.forEach(style => {
//       jssStyles[style.name] = {
//         fontFamily: style.fontFamily,
//         fontWeight: style.fontWeight,
//         fontSize: `${style.fontSize}px`,
//         letterSpacing: `${style.letterSpacing.value}px`,
//         lineHeight: `${style.lineHeight}rem`,
//         textTransform: style.textCase === 'UPPER' ? 'uppercase' : 'none',
//       };
//     });
//     return jssStyles;
//   };


// const useStyles = createUseStyles(createStylesFromJson(typographyData.textStyles as TextStyle[] ));


// const Typography: React.FC<TypographyProps> = ({ variant = 'BM', component: Component = 'p', children, style, className, truncateLength, truncate = false, ...props }) => {
//   const classes = useStyles();
//   const variantStyle = classes[variant] || classes['BM']; 

//   const truncateStyle = truncate
//   ? {
//       overflow: 'hidden',
//       whiteSpace: 'nowrap',
//       textOverflow: 'ellipsis',
//       ...(truncateLength !== undefined ? { maxWidth: `${truncateLength}ch` } : {}),
//     }
//   : {};

//   // const marginBottomStyle = Component === 'p' ? { marginBottom: '8px' } : {};

//   return (
//     <Component className={clsx(variantStyle, className)} style={{...style,...truncateStyle}} {...props}>
//       {children}
//     </Component>
//   );
// };


// export default Typography;

// import React, { useState, useEffect } from 'react';
// import { createUseStyles } from 'react-jss';
// import typographyData from './textStyles.json'; 
// import { TypographyProps, TextStyle } from './typographyType';
// import clsx from 'clsx';

// // Define breakpoints for desktop, tablet, and mobile
// const breakpoints = {
//   desktop: 1024,
//   tablet: 768,
// };

// // Function to get styles based on screen size
// const getStylesForScreenSize = (screenSize:any) => {
//   if (screenSize >= breakpoints.desktop) {
//     return typographyData.textStyles.desktop;
//   } else if (screenSize >= breakpoints.tablet) {
//     return typographyData.textStyles.tablet;
//   } else {
//     return typographyData.textStyles.mobile;
//   }
// };

// const createStylesFromJson = (styles: TextStyle[]): { [key: string]: React.CSSProperties } => {
//   const jssStyles: { [key: string]: React.CSSProperties } = {};
//   styles.forEach(style => {
//     jssStyles[style.name] = {
//       fontFamily: style.fontFamily,
//       fontWeight: style.fontWeight,
//       fontSize: `${style.fontSize}px`,
//       letterSpacing: `${style.letterSpacing.value}px`,
//       lineHeight: `${style.lineHeight}rem`,
//       textTransform: style.textCase === 'UPPER' ? 'uppercase' : 'none',
//     };
//   });
//   return jssStyles;
// };

// // Main Typography component
// const Typography: React.FC<TypographyProps> = ({
//   variant = 'BM',
//   component: Component = 'p',
//   children,
//   style,
//   className,
//   truncateLength,
//   truncate = false,
//   ...props
// }) => {
//   const [screenSize, setScreenSize] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenSize(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const styles = getStylesForScreenSize(screenSize);
//   const useStyles = createUseStyles(createStylesFromJson(styles as TextStyle[]));
//   const classes = useStyles();

//   const variantStyle = classes[variant] || classes['BM']; 

//   const truncateStyle = truncate
//     ? {
//         overflow: 'hidden',
//         whiteSpace: 'nowrap',
//         textOverflow: 'ellipsis',
//         ...(truncateLength !== undefined ? { maxWidth: `${truncateLength}ch` } : {}),
//       }
//     : {};

//   return (
//     <Component className={clsx(variantStyle, className)} style={{ ...style, ...truncateStyle }} {...props}>
//       {children}
//     </Component>
//   );
// };

// export default Typography;


import React from 'react';
import { createUseStyles } from 'react-jss';
import typographyData from './textStyles.json';
import { TypographyProps, TextStyle } from './typographyType';
import clsx from 'clsx';

// Define your breakpoints
const breakpoints = {
  desktop: 1024,
  tablet: 768,
  mobile: 0,
};

// Function to calculate clamp values
const calculateClamp = (mobileSize: number, tabletSize: number, desktopSize: number) => {
  // Minimum size (mobile)
  const minSize = mobileSize;
  // Maximum size (desktop)
  const maxSize = desktopSize;
  
  // Viewport width where scaling should stop (desktop breakpoint)
  const maxViewport = breakpoints.desktop;
  // Viewport width where scaling should start (tablet breakpoint)
  const minViewport = breakpoints.tablet;
  
  // Calculate the rate of change between tablet and desktop
  const slope = (desktopSize - tabletSize) / (maxViewport - minViewport);
  // Calculate where the line would intersect the y-axis
  const yIntersection = tabletSize - slope * minViewport;
  
  // Convert slope to vw units (1vw = 1% of viewport width)
  const slopeVW = slope * 100;
  
  // Return the complete clamp function
  return `clamp(${minSize}px, ${slopeVW.toFixed(2)}vw + ${yIntersection.toFixed(2)}px, ${maxSize}px)`;
};

// Modified style creation function
const createStylesFromJson = (allStyles: {
  desktop: TextStyle[];
  tablet: TextStyle[];
  mobile: TextStyle[];
}): { [key: string]: React.CSSProperties } => {
  const jssStyles: { [key: string]: React.CSSProperties } = {};
  
  // Create styles for all variants using their mobile, tablet, and desktop sizes
  allStyles.desktop.forEach(desktopStyle => {
    const tabletStyle = allStyles.tablet.find(s => s.name === desktopStyle.name);
    const mobileStyle = allStyles.mobile.find(s => s.name === desktopStyle.name);
    
    if (tabletStyle && mobileStyle) {
      jssStyles[desktopStyle.name] = {
        fontFamily: desktopStyle.fontFamily,
        fontWeight: desktopStyle.fontWeight,
        fontSize: calculateClamp(
          mobileStyle.fontSize,
          tabletStyle.fontSize,
          desktopStyle.fontSize
        ),
        letterSpacing: `${desktopStyle.letterSpacing.value}px`,
        lineHeight: `${desktopStyle.lineHeight}rem`,
        textTransform: desktopStyle.textCase === 'UPPER' ? 'uppercase' : 'none',
      };
    }
  });
  
  return jssStyles;
};

// Main Typography component
const Typography: React.FC<TypographyProps> = ({
  variant = 'BM',
  component: Component = 'p',
  children,
  style,
  className,
  truncateLength,
  truncate = false,
  ...props
}) => {
  // Create styles using all breakpoint data
  const useStyles = createUseStyles(
    createStylesFromJson(typographyData.textStyles as any)
  );
  
  const classes = useStyles();
  const variantStyle = classes[variant] || classes['BM'];

  const truncateStyle = truncate
    ? {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        ...(truncateLength !== undefined ? { maxWidth: `${truncateLength}ch` } : {}),
      }
    : {};

  return (
    <Component className={clsx(variantStyle, className)} style={{ ...style, ...truncateStyle }} {...props}>
      {children}
    </Component>
  );
};

export default Typography;