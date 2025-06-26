import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usestyles } from "./indexStyle";
import Typography from "../typography/component";
import SvgShieldCheck from "../../custom-icons/ShieldCheck";
import InputField from "../input/input";
import Button from "../button";
import CommonModel from "../commonModal";

const OtpScreen = () => {
  const classes = usestyles();
  const [otp, setOtp] = useState<string[]>(Array((length = 6)).fill(""));
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  const handleComplete = (otp: any) => {
    console.log("Complete OTP:", otp);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      // Allow only digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input
      if (value && index < length - 1) {
        inputs.current[index + 1]?.focus();
      }

      // Call onComplete when all fields are filled
      if (newOtp.every((val) => val !== "")) {
        handleComplete(newOtp.join(""));
      }
    }
  };

  const handleBackspace = (e: any, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      // Move to the previous input if backspace is pressed
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <CommonModel className={classes.moduleStyle}>
      <div className={classes.signUp}>
        <div className={classes.signUpImgTxt}>
          <SvgShieldCheck />
          <Typography variant="TS">Two-Step Verification</Typography>
        </div>

        <div className={classes.signUpInputBtn}>
          <Typography variant="TS">Enter OTP</Typography>
          <div className={classes.verifyMail}>
            <Typography variant="BS">Enter the 6 digit code sent to</Typography>
            <Typography variant="LS">951xxxxxx9</Typography>
          </div>
          <div className={classes.otp}>
            {otp.map((value, index) => (
              <InputField
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
              />
            ))}
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate("/email")}
          >
            Verify OTP
          </Button>
          <div style={{ margin: "8px" }}>
            <Typography variant="LS" component={"span"}>
              Didn't get it?{" "}
            </Typography>
            <Typography
              variant="LS"
              component={"span"}
              style={{ color: "#8c8c8c" }}
            >
              {" "}
              Resend OTP 60s
            </Typography>
          </div>
        </div>
      </div>
    </CommonModel>
  );
};

export default OtpScreen;
