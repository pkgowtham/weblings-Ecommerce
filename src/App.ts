import { createUseStyles } from "react-jss";
import { theme } from "../theme /theme";
import { Theme } from "../theme /themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    MainContainer:{
      // padding:`${theme.spacing.s0} ${theme.spacing.s800}`  
    }
}))