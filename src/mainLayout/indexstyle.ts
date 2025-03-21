import { createUseStyles } from "react-jss";
import { theme } from "../../theme/theme";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    mainContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column'
    }
}))