import { createUseStyles } from "react-jss";
import { Theme } from "../../theme/themeType";

export const usestyles = createUseStyles((theme: Theme) => ({
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#ffffff",
    position: "relative",
    overflow: "hidden",
  },
  loginContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "90%",
    display: "flex",
    padding: "20px",
    borderRadius: "35px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.25)",
    zIndex: 2,
  },
  loginFormImage: {
    width: "50%",
    height: "100%",
    borderRadius: "8px",
  },
  loginImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "8px",
  },

  loginFormContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "0 20px 0 40px",
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  loginFormHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  loginInputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "24px",
  },

  loginFormConformcontainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  loginFormButton: {
    width: "100%",
  },

  mainCon: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    // backgroundImage: `url(${Background})`,
    backgroundColor: "#f0f0f0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundColor:'#3c69d7',
    position: "relative",
  },

  signUp: {
    width: "360px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    // width:'fit-Content',
    height: "auto",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    border: `1px solid #d9d9d9`,
    borderRadius: "8px",
    boxShadow:
      "0px 96px 27px 0px rgba(0, 0, 0, 0.00), 0px 61px 25px 0px rgba(0, 0, 0, 0.01), 0px 34px 21px 0px rgba(0, 0, 0, 0.05), 0px 15px 15px 0px rgba(0, 0, 0, 0.09), 0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
  },

  signUpHead: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpImgTxt: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpInputBtn: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },

  verifyMail: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4px",
    textAlign: "center",
  },

  otp: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "8px",
    padding: `0 8px`,
  },

  mobileNum: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  loginTxt: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  svg: {
    // position: 'absolute',
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // zIndex: -1,
    "& path": {
      fill: "#0F3CC9",
    },
  },

  textGreenColor: {
    color: "#00c851",
  },

  textBlackColor: {
    color: "#262626",
  },
  moduleStyle: {
    height: "fit-content",
    width: "40%",
    padding: theme.spacing.s800,
  },
}));
