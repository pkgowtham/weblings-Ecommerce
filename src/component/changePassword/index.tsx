import { useState } from "react";
import { useStyle } from "./indexStyle";
import CommonModel from "../commonModal";
import Typography from "../typography/component";
import InputField from "../input/input";
import SvgEye from "../../custom-icons/Eye";
import SvgEyeClose from "../../custom-icons/EyeClose";
import Button from "../button";
import Snackbar from "../snackbar";

const ChangePasswordModule = () => {
  const classes = useStyle();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [showPassword, setShowPassword] = useState({
    newpassword: false,
    confirmpassword: false,
  });
  const [touched, setTouched] = useState({
    newpassword: false,
    confirmpassword: false,
  });

  // Check password requirements
  const checkPasswordRequirements = (password: string) => {
    setPasswordRequirements({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "newpassword") {
      checkPasswordRequirements(value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const togglePasswordVisibility = (
    field: "newpassword" | "confirmpassword"
  ) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = "";

    if (!value.trim()) {
      errorMsg = "This field is required";
    } else {
      if (name === "newpassword") {
        if (!Object.values(passwordRequirements).every((req) => req)) {
          errorMsg = "Password does not meet all requirements";
        }
      } else if (name === "confirmpassword") {
        if (value !== formData.newpassword) {
          errorMsg = "Passwords do not match";
        }
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Check if form is valid
  const isFormValid = () => {
    const allRequirementsMet = Object.values(passwordRequirements).every(
      (req) => req
    );
    const passwordsMatch = formData.newpassword === formData.confirmpassword;
    const allFieldsFilled = formData.newpassword && formData.confirmpassword;

    return allRequirementsMet && passwordsMatch && allFieldsFilled;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched on submit
    setTouched({
      newpassword: true,
      confirmpassword: true,
    });

    if (isFormValid()) {
      // Form is valid, proceed with password change
      console.log("Password changed successfully:", formData);
      // Add your password change logic here
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <CommonModel className={classes.moduleStyle}>
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <Typography variant="TS">Change Password</Typography>
        </div>

        <form onSubmit={handleSubmit} className={classes.inputContainer}>
          {/* New Password Field */}
          <InputField
            label="New Password"
            placeholder="Enter your new password"
            name="newpassword"
            type={showPassword.newpassword ? "text" : "password"}
            value={formData.newpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.newpassword && errors.newpassword)}
            helperText={touched.newpassword ? errors.newpassword : ""}
            rightIcon={
              showPassword.newpassword ? (
                <SvgEye
                  onClick={() => togglePasswordVisibility("newpassword")}
                />
              ) : (
                <SvgEyeClose
                  onClick={() => togglePasswordVisibility("newpassword")}
                />
              )
            }
          />

          {/* Password Requirements Checklist - Always visible */}
          <div>
            <Typography variant="BM">Password must contain:</Typography>
            <div>
              <div>
                <span
                  style={{
                    color: passwordRequirements.length ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.length ? "✓" : "•"} At least 8
                  characters
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: passwordRequirements.uppercase ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.uppercase ? "✓" : "•"} At least one
                  uppercase letter
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: passwordRequirements.lowercase ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.lowercase ? "✓" : "•"} At least one
                  lowercase letter
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: passwordRequirements.number ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.number ? "✓" : "•"} At least one number
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: passwordRequirements.specialChar
                      ? "green"
                      : "inherit",
                  }}
                >
                  {passwordRequirements.specialChar ? "✓" : "•"} At least one
                  special character
                </span>
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <InputField
            label="Confirm Password"
            placeholder="Confirm your new password"
            name="confirmpassword"
            type={showPassword.confirmpassword ? "text" : "password"}
            value={formData.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.confirmpassword && errors.confirmpassword)}
            helperText={touched.confirmpassword ? errors.confirmpassword : ""}
            rightIcon={
              showPassword.confirmpassword ? (
                <SvgEye
                  onClick={() => togglePasswordVisibility("confirmpassword")}
                />
              ) : (
                <SvgEyeClose
                  onClick={() => togglePasswordVisibility("confirmpassword")}
                />
              )
            }
          />

          {/* Submit Button */}
          <div className={classes.btnContainer}>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={!isFormValid()}
              fullWidth
              onClick={()=> setShowSnackbar(true)}
            >
              Change Password
            </Button>
          </div>
        </form>
      </div>
      {showSnackbar && (
        <Snackbar
          message="Password changed successfully!"
          onClose={handleSnackbarClose}
        />
      )}
    </CommonModel>
  );
};

export default ChangePasswordModule;
