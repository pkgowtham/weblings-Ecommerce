import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    '@keyframes shake': {
        '0%, 100%': {
          transform: 'translateX(0)',
        },
        '25%': {
          transform: 'translateX(-2px)',
        },
        '50%': {
          transform: 'translateX(2px)',
        },
        '75%': {
          transform: 'translateX(-1px)',
        },
      },

    toolTip:{
        display:'inline-flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'8px',
        backgroundColor:theme.light.neutral.onSurface.medium,
        color:theme.light.neutral.onSurface.inverse,
        position:'absolute',
        borderRadius:'8px',
        fontSize:'12px',
        // display:'none',
        '&.shake': {
      animation: '$shake 0.3s ease-in-out',
    },
    },

    visible: {
        display: 'block', 
      },

      
}))