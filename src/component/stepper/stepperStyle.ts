import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme/themeType";
import { theme } from "../../../theme/theme";

export const useStyle = createUseStyles((theme:Theme)=>({
    stepper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      step: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:theme.spacing.s150 
      },
      stepNumber: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 4,
        '&.active': {
          backgroundColor: theme.color.brand.surface.lighter,
          color: theme.color.brand.surface.medium,
        },
        '&.complete': {
          backgroundColor: theme.color.positive.surface.lighter,
          color: theme.color.positive.onSurface.medium,
        },
      },

      complete:{
        backgroundColor: theme.color.positive.surface.lighter,
          color: theme.color.positive.onSurface.medium,
      },

      active:{
        backgroundColor: theme.color.brand.surface.lighter,
          color: theme.color.brand.surface.medium,
      },

      failed:{
        backgroundColor:theme.color.negative.surface.medium,
        color: theme.color.neutral.onSurface.inverse,
      },

      disabled:{
        backgroundColor: theme.color.neutral.surface.light,
        color: theme.color.neutral.onSurface.dark,
      },
      
      progressBar: {
        position: 'absolute',
        top: '25%',
        left: 0,
        height: 4,
        backgroundColor: theme.color.neutral.border.light,
        width: '100%',
      },

      progress: {
        height: '100%',
        backgroundColor: theme.color.positive.border.light,
        transition: '0.2s ease',
      },

      failedIcon:{
        '& path':{
          fill:theme.color.neutral.onSurface.inverse
        }
      },

      successIcon:{
        '& path':{
          fill:theme.color.positive.onSurface.medium
        }
      }
}))