import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 2000, 
      },

      container:{
        position:'absolute',
        zIndex:2001,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'70%',
        height:'90%',
        display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        flexDirection:'column',
        // padding:`${theme.spacing.s200} ${theme.spacing.s400} ${theme.spacing.s400} ${theme.spacing.s400}`,
        borderRadius:theme.borderRadius.b200,
        backgroundColor:theme.light.neutral.surface.lighter,
        // overflow:'auto'
     },
}))