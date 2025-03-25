import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => {
  const marqueeAnimation = {
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-100%)" }
  };

  return {
    mainContainer: {
      width: "100%",
      overflow: "hidden",
      padding: `${theme.spacing.s600} ${theme.spacing.s0}`,
      borderBottom: `1px solid ${theme.light.neutral.border.light}`,
      borderTop: `1px solid ${theme.light.neutral.border.light}`,
      display:'flex',
      marginTop:theme.spacing.s1600,
      marginBottom:theme.spacing.s500,
      "&:hover $marqueContent": {
        animationPlayState: "paused" 
      }
    },
    imageContainer:{
        height:'80px',
        width:'80px '
    },
    imageStyle:{
        width:'100%',
        height:'100%',
        borderRadius:'50%',
        // objectFit:'cover'
    },
    marqueContent: {
      display: "flex",
      width:'100%',
      height:'fit-content',     
      paddingLeft: "10%",
      alignItems:'center',
      gap:theme.spacing.s800,
      animation: `$marquee 10s linear infinite`
    },
    "@keyframes marquee": marqueeAnimation
  };
});
