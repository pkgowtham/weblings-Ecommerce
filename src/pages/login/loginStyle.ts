import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    loginMainContainer:{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    loginContainer:{
        width:'60%',
        // height:'80%',
        height:'fit-content',
        borderRadius:'24px',
        backgroundColor:'#ffffff',
        boxShadow:`
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 -4px 6px rgba(0, 0, 0, 0.1), 
      4px 0 6px rgba(0, 0, 0, 0.1), 
      -4px 0 6px rgba(0, 0, 0, 0.1) 
    `,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        '@media (max-width:500px)':{
            width:'100%',
            height:'100%',
            boxShadow:'none'
        },
    },

    loginImageContainer:{
        width:'60%',
        height:'100%',
        // display:'block',
        overflow: 'hidden',
        display:'flex',
        justifyContent:'flex-start',
        '@media (max-width: 500px)': {
            display:'none',
    },
    },

    loginImage:{
        minWidth:'100%',
        minHeight:'100%',
        objectFit: 'cover',
        borderRadius:'24px'
    },

    loginInputMainContainer:{
        width:'50%',
        minHeight:'100%',
        padding:'0 20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'32px',
        '@media (max-width: 500px)': {
            width:'100%',
    },
    },


    loginImgHead:{
        width:'100%',
        fontSize:'clamp(1.25rem, 2vw + 1rem, 1.875rem);',
        fontWeight:600,
        color:theme.light.neutral.onSurface.title,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:'30px'
    },

    loginInputField:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:'24px',
        width:'100%',
    },

    loginInput:{
        width:'100%'
    },

    loginInputFieldForget:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:'8px',
        width:'100%',
    },

    loginInputFieldButton:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'24px',
        width:'100%',
    },

    loginButton:{
        width:'100% !important'
    },


    loginInputFieldPara:{
        fontSize:'clamp(0.875rem, 1vw + 0.75rem, 1rem)',
        fontWeight:400,
        color:theme.light.neutral.onSurface.dark
    },

    loginInputFieldLink:{
        fontSize:'clamp(0.875rem, 1vw + 0.75rem, 1rem)',
        fontWeight:400,
        color:theme.light.brand.onSurface.default
    },

    customIcon:{
        '& path': {
      fill: theme.light.neutral.onSurface.medium
    },
    }
}))