import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    mainContainer:{
        width:'100%',
        overflow:'hidden',
        padding:`${theme.spacing.s600} ${theme.spacing.s0}`,
        borderBottom: `1px solid ${theme.light.neutral.border.light}`,
        borderTop: `1px solid ${theme.light.neutral.border.light}`,
    }
}))