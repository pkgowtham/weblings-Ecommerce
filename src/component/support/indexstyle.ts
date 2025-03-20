import { createUseStyles } from "react-jss";
import { theme } from "../../../theme /theme";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    MainDiv:{
        height:'125px',
        width:'100%',
        display:'flex',
        gap:theme.spacing.s400   ,
        padding:`${theme.spacing.s0} ${theme.spacing.s800}` ,
        marginBottom:theme.spacing.s1600,
         justifyContent:'space-between'
    },
    Card:{
        width:'100%',
        maxWidth:'392px',
        height:'125px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center',
    }
}))