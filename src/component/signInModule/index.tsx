import { useState } from "react";
import SvgClose from "../../custom-icons/Close";
import Button from "../button";
import CommonModel from "../commonModal";
import Typography from "../typography/component";
import { useStyle } from "./indexstyle";
import { useNavigate } from "react-router-dom";
import InputField from "../input/input";
import SvgEye from "../../custom-icons/Eye";
import OtpScreen from "../otpModule";
import SvgChevronLeft from "../../custom-icons/ChevronLeft";
import SvgEyeClose from "../../custom-icons/EyeClose";
import SvgShieldCheck from "../../custom-icons/ShieldCheck";
import ChangePasswordModule from "../changePassword";

interface SignInModuleProps {
  onClose: (value: boolean) => void;
}

const SignInModule: React.FC<SignInModuleProps> = ({ onClose }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [otpModule, setOtpModule] = useState(false);
  const [type, setType] = useState("SignIn");
  const [isopen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobilenumber: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobilenumber: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
    mobilenumber: false,
  });

  // Validation patterns
  const patterns = {
    firstName: /^[a-zA-Z]{2,50}$/,
    lastName: /^[a-zA-Z]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    mobilenumber: /^\d{0,10}$/,
  };

  // Error messages
  const errorMessages = {
    firstName:
      "First name must be 2-50 letters with no numbers or special chars",
    lastName: "Last name must be 2-50 letters with no numbers or special chars",
    email: "Please enter a valid email address",
    password:
      "Password must be at least 8 chars with 1 uppercase, 1 lowercase, 1 number & 1 special char",
    mobilenumber: "Please enter a 10 digit valid number",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const toggle = () => setIsOpen((prev) => !prev);

  const validateField = (name: string, value: string) => {
    let errorMsg = "";

    if (!value.trim()) {
      errorMsg = "This field is required";
    } else {
      switch (name) {
        case "firstName":
          if (!patterns.firstName.test(value))
            errorMsg = errorMessages.firstName;
          break;
        case "lastName":
          if (!patterns.lastName.test(value)) errorMsg = errorMessages.lastName;
          break;
        case "email":
          if (!patterns.email.test(value)) errorMsg = errorMessages.email;
          break;
        case "password":
          if (!patterns.password.test(value)) errorMsg = errorMessages.password;
          break;
        case "mobilenumber":
          if (!patterns.mobilenumber.test(value))
            errorMsg = errorMessages.mobilenumber;
          break;
      }
    }

    setError((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const validateForm = () => {
    let isValid = true;
    const newTouched = { ...touched };

    Object.keys(formData).forEach((key) => {
      newTouched[key as keyof typeof touched] = true;
      validateField(key, formData[key as keyof typeof formData]);
      if (error[key as keyof typeof error]) isValid = false;
    });

    setTouched(newTouched);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/mainlayout/myaccountpage");
    }
    onClose(false);
  };

  const handleSignInSubmit = () => {
    if (formData.email && formData.password) {
      navigate("/mainlayout/myaccountpage");
    } else {
      setError({
        ...error,
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
    }
    onClose(false);
  };

  return (
    <CommonModel className={classes.moduleStyle}>
      {/* signin section */}
      {type === "SignIn" && (
        <div className={classes.signInContainer}>
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
            <InputField
              label="Email"
              name="email"
              type="text"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.email && error.email)}
              helperText={touched.email ? error.email : ""}
            />
            <InputField
              label="Password"
              name="password"
              type={isopen ? "text" : "password"}
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.password && error.password)}
              helperText={touched.password ? error.password : ""}
              rightIcon={
                isopen ? (
                  <SvgEye onClick={toggle} />
                ) : (
                  <SvgEyeClose onClick={toggle} />
                )
              }
            />
            <Typography
              className={classes.forgotText}
              onClick={() => setType("ForgotPassword")}
              variant="BS"
            >
              Forgot your password
            </Typography>
          </div>
          {/* Button section */}
          <div className={classes.buttonContainer}>
            <Button
              size="lg"
              onClick={handleSignInSubmit}
              className={classes.loginButton}
              type="button"
              disabled={!formData.email || !formData.password}
            >
              Login
            </Button>
            <Button
              onClick={() => setType("CreateAccount")}
              className={classes.accountButton}
              type="button"
              size="lg"
            >
              Create Account
            </Button>
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
            <SvgChevronLeft
              viewBox="0 0 30 30"
              width={30}
              height={30}
              className={classes.svgBack}
              onClick={() => setType("SignIn")}
            />
            <Typography variant="TS">Create Account</Typography>
            <Typography className={classes.lightColor} variant="BM">
              Please register below to create an account.
            </Typography>
          </div>
          {/* Input fields */}
          <div className={classes.inputFeilds}>
            <InputField
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.firstName && error.firstName)}
              helperText={touched.firstName ? error.firstName : ""}
            />
            <InputField
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.lastName && error.lastName)}
              helperText={touched.lastName ? error.lastName : ""}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.email && error.email)}
              helperText={touched.email ? error.email : ""}
            />
            <InputField
              label="Mobile Number"
              name="mobilenumber"
              type="number"
              placeholder="Enter your mobilnumber"
              value={formData.mobilenumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.mobilenumber && error.mobilenumber)}
              helperText={touched.mobilenumber ? error.mobilenumber : ""}
            />
            <InputField
              label="Password"
              name="password"
              type={isopen ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.password && error.password)}
              helperText={touched.password ? error.password : ""}
              rightIcon={
                isopen ? (
                  <SvgEye cursor={"pointer"} onClick={toggle} />
                ) : (
                  <SvgEyeClose cursor={"pointer"} onClick={toggle} />
                )
              }
            />
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
            <Button
              size="lg"
              className={classes.loginButton}
              type="button"
              onClick={handleSubmit}
              disabled={
                Object.values(error).some((err) => err) ||
                Object.values(formData).some((val) => !val)
              }
            >
              Create Account
            </Button>
            <Button
              size="lg"
              onClick={() => setType("SignIn")}
              className={classes.accountButton}
              type="button"
            >
              Login
            </Button>
          </div>
        </div>
      )}
      {/* forgot password account */}
      {type === "ForgotPassword" && (
        <div className={classes.forgotPasswordContainer}>
          <div className={classes.header}>
            <SvgClose
              viewBox="0 0 30 30"
              cursor={"pointer"}
              width={30}
              height={30}
              className={classes.svgCLoseForgot}
              onClick={() => onClose(false)}
            />
            <SvgChevronLeft
              viewBox="0 0 30 30"
              width={30}
              height={30}
              className={classes.svgBackForgot}
              onClick={() => setType("SignIn")}
            />
            <Typography variant="TS">Forgot Password</Typography>
            <Typography className={classes.lightColor} variant="BM">
              Please provide your email address in the space below to receive a
              link for resetting your password.
            </Typography>
          </div>
          {/* Input fields */}
          <div className={classes.inputFeildsPassword}>
            <InputField
              label="Your Email"
              name="email"
              type="text"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.email && error.email)}
              helperText={touched.email ? error.email : ""}
            />
          </div>
          {/* Button section */}
          <div className={classes.buttonContainer}>
            <Button
              size="lg"
              className={classes.loginButton}
              type="button"
              onClick={() => {
                setType('otpscreen');
              }}
              disabled={!formData.email || !!error.email}
            >
              Reset Password
            </Button>
            <Button
              onClick={() => setType("SignIn")}
              className={classes.accountButton}
              type="button"
              size="lg"
            >
              Login
            </Button>
          </div>
        </div>
      )}
      {/* OTP screen */}
      {type === "otpscreen" && <OtpScreen setType={setType}/>}
      {/* pasword creation screen */}
      {type === "passwordcreation" && <ChangePasswordModule/>}
    </CommonModel>
  );
};

export default SignInModule;
