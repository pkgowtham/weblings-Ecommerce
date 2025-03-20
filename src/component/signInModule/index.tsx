import { useState } from "react";
import SvgClose from "../../custom-icons/Close";
import Button from "../button";
import CommonModel from "../commonModal";
import Input from "../input";
import Typography from "../typography/component";
import { useStyle } from "./indexstyle";
import { useNavigate } from "react-router-dom";

interface SignInModuleProps {
  onClose: (value: boolean) => void;
}

const SignInModule: React.FC<SignInModuleProps> = ({ onClose }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [type, setType] = useState("SignIn");


  // handle navigate
  const handleNavigate = () =>{
    navigate("/mainlayout/myaccountpage")
  }

  return (
    <CommonModel className={classes.moduleStyle}>
      {/* signin section */}
      {type === "SignIn" && (
        <div>
          <div className={classes.header}>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              className={classes.svgCLose}
              onClick={() => onClose(false)}
            />
            <Typography variant="TS">Sign In</Typography>
            <Typography className={classes.lightColor} variant="BM">
              Please enter your details below to sign in.
            </Typography>
          </div>
          {/* Input fields */}
          <div className={classes.inputFeilds}>
            <Input type="text" placeholder="Your email*" />
            <Input type="password" placeholder="Password*" />
          </div>
          {/* Forgot password */}
          <div className={classes.forgotPassword}>
            <Typography onClick={() => setType("ForgotPassword")} variant="BM">
              Forgot your password?
            </Typography>
          </div>
          {/* Button section */}
          <div className={classes.buttonContainer}>
            <Button onClick={handleNavigate} className={classes.loginButton} text={"Login"} />
            <Button
              onClick={() => setType("CreateAccount")}
              className={classes.accountButton}
              text={"Create Account"}
            />
          </div>
        </div>
      )}
      {/* create account section */}
      {type === "CreateAccount" && (
        <div>
          {/* header */}
          <div className={classes.header}>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              className={classes.svgCLose}
              onClick={() => onClose(false)}
            />
            <Typography variant="TS">Create Account</Typography>
            <Typography className={classes.lightColor} variant="BM">
              Please register below to create an account.
            </Typography>
          </div>
          {/* Input fields */}
          <div className={classes.inputFeilds}>
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
            <Input type="email" placeholder="Your email*" />
            <Input type="password" placeholder="Password*" />
          </div>
          {/* contents */}
          <div className={classes.contents}>
            <Typography variant="BS">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account and for
              other purposes described in our privacy policy.
            </Typography>
          </div>
          {/* Button section */}
          <div className={classes.buttonContainer}>
            <Button className={classes.loginButton} text={"Create Account"} />
            <Button
              onClick={() => setType("SignIn")}
              className={classes.accountButton}
              text={"Login"}
            />
          </div>
        </div>
      )}
      {/* forgot password account */}
      {type === "ForgotPassword" && (
        <div>
          <div className={classes.header}>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              className={classes.svgCLose}
              onClick={() => onClose(false)}
            />
            <Typography variant="TS">Forgot Password</Typography>
            <Typography className={classes.lightColor} variant="BM">
              Please provide your email address in the space below to receive a
              link for resetting your password.
            </Typography>
          </div>
          {/* Input fields */}
          <div className={classes.inputFeildsPassword}>
            <Input type="text" placeholder="Your email*" />
          </div>
          {/* Button section */}
          <div className={classes.buttonContainer}>
            <Button className={classes.loginButton} text={"Reset Password"} />
            <Button
              onClick={() => setType("SignIn")}
              className={classes.accountButton}
              text={"Login"}
            />
          </div>
        </div>
      )}
    </CommonModel>
  );
};

export default SignInModule;
