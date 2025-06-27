import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const useStyle = createUseStyles((theme: Theme) => ({
  moduleStyle: {
    height: "fit-content",
    // width: "40%",
    padding: theme.spacing.s800,
  },
  mainContainer: {
    width:'100%',
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.s800,
  },
  inputContainer:{
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing.s800
  },
  btnContainer:{
    width:'100%'
  },
  header:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
}));
