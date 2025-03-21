import { createUseStyles } from "react-jss";
import { Theme } from "../../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    mainContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing.s400
    },
    formContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing.s400,
        backgroundColor:theme.light.neutral.surface.light,
        padding:theme.spacing.s800,
        marginTop:theme.spacing.s800
    },
    inputDiv:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing.s150,
        width:'100%'
    },
    checkBox:{
        display:'flex',
        alignItems:'center',
        gap:theme.spacing.s150,
        width:'100%'
    },
    btnContainer:{
        display:'flex',
        gap:theme.spacing.s400
    },
    defaultAddress:{
        width:'100%',
        display:'flex',
        border: `1px solid ${theme.light.neutral.border.light}`,
        flexDirection:'column'
    },
    headerCont:{
        width:'100%',
        backgroundColor:theme.light.neutral.surface.light,
        padding:`${theme.spacing.s400} ${theme.spacing.s800}`
    },
    addressInfo:{
        width:'100%',
        padding:`${theme.spacing.s0} ${theme.spacing.s800}`
    },
    addressContainer:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing.s400,
        marginTop:theme.spacing.s800,
        marginBottom:theme.spacing.s500
    },
    textColor:{
        color:theme.light.neutral.onSurface.title,
        padding:theme.spacing.s200
    },
    btnCont:{
        display:'flex',
        alignItems:'center',
        gap:theme.spacing.s400,
        padding:theme.spacing.s800
    },
    btnStyle:{
        height:'50px !important',
        padding: `${theme.spacing.s400} ${theme.spacing.s1200} !important`,
    },
    errorMsg:{
        color:theme.light.negative.onSurface.medium
    }
}))