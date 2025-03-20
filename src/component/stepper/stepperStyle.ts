import { createUseStyles } from "react-jss";
import { Theme } from "../../../theme /themeType";
import { theme } from "../../../theme /theme";

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
          backgroundColor: theme.light.brand.surface.lighter,
          color: theme.light.brand.surface.medium,
        },
        '&.complete': {
          backgroundColor: theme.light.positive.surface.lighter,
          color: theme.light.positive.onSurface.medium,
        },
      },

      complete:{
        backgroundColor: theme.light.positive.surface.lighter,
          color: theme.light.positive.onSurface.medium,
      },

      active:{
        backgroundColor: theme.light.brand.surface.lighter,
          color: theme.light.brand.surface.medium,
      },

      failed:{
        backgroundColor:theme.light.negative.surface.medium,
        color: theme.light.neutral.onSurface.inverse,
      },

      disabled:{
        backgroundColor: theme.light.neutral.surface.light,
        color: theme.light.neutral.onSurface.dark,
      },
      
      progressBar: {
        position: 'absolute',
        top: '25%',
        left: 0,
        height: 4,
        backgroundColor: theme.light.neutral.border.light,
        width: '100%',
      },

      progress: {
        height: '100%',
        backgroundColor: theme.light.positive.border.light,
        transition: '0.2s ease',
      },

      failedIcon:{
        '& path':{
          fill:theme.light.neutral.onSurface.inverse
        }
      },

      successIcon:{
        '& path':{
          fill:theme.light.positive.onSurface.medium
        }
      }
}))