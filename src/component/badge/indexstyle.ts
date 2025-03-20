import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    badgeContainer:{
        width:'18px',
        height:'18px',
        borderRadius:'50%',
        backgroundColor:theme.light.negative.onSurface.medium,
        position:'absolute',
        top:0,
        right:0,
        zIndex:30,
        display:'flex',
        alignItems:'center',
        justifyContent:'center  '
    },
    whiteColor:{
        color:theme.light.neutral.surface.light
    }
}))