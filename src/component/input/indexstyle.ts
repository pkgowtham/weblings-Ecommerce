import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    inputDiv:{
        width:'100%',
        border: `1px solid ${theme.light.neutral.border.light}`,
        borderColor:`${theme.light.neutral.border.light}`,
        height:'45px',
        padding:`${theme.spacing.s250} ${theme.spacing.s500}`,
        borderRadius:theme.spacing.s600,
        position:'relative'
    }
}))