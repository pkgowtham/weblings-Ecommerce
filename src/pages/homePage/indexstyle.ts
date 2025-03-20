import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    mainContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    }
}))