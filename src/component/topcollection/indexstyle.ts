import { createUseStyles } from "react-jss";
import { theme } from "../../../theme /theme";
import { Theme } from "../../../theme /themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    MainContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:theme.spacing.s800
    },
    Title:{
        display:'flex',
        marginBottom:theme.spacing.s300,
        color:theme.light.neutral.onSurface.title
    },
    Wrapper:{
        display:'flex',
        gap:theme.spacing.s500,
        marginTop:theme.spacing.s600,
        flexWrap:'wrap'
    },
    CollectionDiv:{
        borderRadius:'50%',
        width:'180px',
        height:'180px'
    },
    CollectionWrapper:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing.s500,
        marginTop:theme.spacing.s600,
        alignItems:'center',
    },
    CollectionLogo:{
        width:'100%',
        height:'100%',
        objectFit:'cover'
    }
}))