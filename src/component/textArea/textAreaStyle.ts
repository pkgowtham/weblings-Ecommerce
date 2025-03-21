import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    textarea: {
        width: '100%',
        padding: '10px',
        border: `1px solid ${theme.light.neutral.border.light}`,
        borderRadius: theme.borderRadius.b250,
        outline:'none',
        // maxHeight:'80px',
        overflowY:'auto',
        fontSize: '16px',
        resize: 'none', 
        '&:focus':{
            border:`2px solid ${theme.light.neutral.onSurface.title}`
        },
        '&:disabled': {
          backgroundColor: '#f5f5f5',
          color: '#999',
        },
        '&::placeholder':{
           color:theme.light.neutral.onSurface.medium,
           fontWeight:500,
           fontSize:'14px'
     }
      },
}))