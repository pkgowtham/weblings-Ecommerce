import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";

export const useStyle = createUseStyles((theme:Theme)=>({
    detailMainCon:{
        width:'100%',
        height:'68vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s600,
    },

    detailContentCon:{
        width:'55%',
        display:'flex',
        gap:theme.spacing.s800
    },

    detailCon:{
        flex:1,
        padding:`${theme.spacing.s600} ${theme.spacing.s600} ${theme.spacing.s600} ${theme.spacing.s600}`,
        border:`1px solid ${theme.light.neutral.border.dark}`,
        borderRadius:theme.borderRadius.b200,
        backgroundColor:theme.light.neutral.surface.lighter,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s600
    },

    disable:{
        backgroundColor:theme.light.neutral.surface.disabled
    },

    detailContentHead:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s400
    },

    detailbuttonContent:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s200
    },

    detailSubContentCon:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s400
    },

    detailTickCon:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s200
    },

    detailTick:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        gap:theme.spacing.s200
    },

    doneIcon:{
        '& path':{
            fill:theme.light.positive.onSurface.medium
        }
    },

    reviewMainCon:{
        width:'100%',
        height:'68vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s800,
    },

    reviewContent:{
        width:'40%',
        padding:theme.spacing.s600,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s400,
        border:`1px solid ${theme.light.neutral.border.light}`,
        borderRadius:theme.borderRadius.b200,
    },

    reviewContentHeadCon:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s600, 
    },

    reviewContentHead:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        gap:theme.spacing.s200, 
    },

    reviewContentSpace:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap:theme.spacing.s200, 
    },

    readBtnCon:{
        width:'100%',
        padding:`${theme.spacing.s400} ${theme.spacing.s0} ${theme.spacing.s0} ${theme.spacing.s0}`,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:'auto'
    },

    readBtn:{
        width:'fit-content',
        display:'flex',
        alignItems:'center',
        gap:theme.spacing.s200  
    },

    paymentMainCon:{
        width:'100%',
        height:'68vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s600,
    },

    paymentHead:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s200,
    },

    paymentContent:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s400,
    },

    dnsMainCon:{
        width:'100%',
        height:'68vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s600,
    },

    dnsSubHead:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:theme.spacing.s400,
    },

    table: {
        width: '70%',
        borderCollapse: 'separate', // Allows for border-radius to work
        borderSpacing: 0,
        borderRadius: 8,
        overflow: 'hidden', // Ensures the border-radius applies correctly
      },
      th: {
        border: '1px solid #ddd',
        padding: '8px',
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
        textAlign: 'left',
      },
      td: {
        border: '1px solid #ddd',
        padding: '8px',
      },
      rowHover: {
        '&:hover': {
          backgroundColor: '#f1f1f1',
        },
      },

}))