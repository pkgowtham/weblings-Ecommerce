import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    navigationBarContainer:{
        display:'flex',
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.light.neutral.surface.lighter,
        padding:theme.spacing.s300,
        justifyContent:'space-between',
        boxShadow:theme.elevation.m,
        position:'fixed',
        bottom:0,
        left:0
    }
}))