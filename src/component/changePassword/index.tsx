import { useState } from "react";
import { useStyle } from "./indexStyle";
import CommonModel from "../commonModal";
import Typography from "../typography/component";
import InputField from "../input/input";
import SvgEye from "../../custom-icons/Eye";
import Button from "../button";

const ChangePasswordModule = () => {
  const classes = useStyle();
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

  const checkPasswordRequirements = (password: any) => {
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

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate new password
    if (!formData.newpassword) {
      newErrors.newpassword = "Password is required";
      valid = false;
    } else if (!Object.values(passwordRequirements).every((req) => req)) {
      newErrors.newpassword = "Password does not meet all requirements";
      valid = false;
    }

    // Validate password confirmation
    if (!formData.confirmpassword) {
      newErrors.confirmpassword = "Please confirm your password";
      valid = false;
    } else if (formData.newpassword !== formData.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with password change
      console.log("Form is valid, changing password:", formData);
      // Add your password change logic here
    }
  };

  return (
    <CommonModel className={classes.moduleStyle}>
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <Typography variant="TS">Change Password</Typography>
        </div>
        {/* input fields */}
        <form onSubmit={handleSubmit} className={classes.inputContainer}>
          <InputField
            label="New Password"
            placeholder="Enter your new password"
            name="newpassword"
            type="password"
            value={formData.newpassword}
            onChange={handleChange}
            error={!!errors.newpassword}
            helperText={errors.newpassword}
            rightIcon={<SvgEye />}
          />

          {/* Password requirements checklist */}
          <div className={classes.requirementsContainer}>
            <Typography variant="body2" color="error">
              {errors.newpassword && "Password does not meet all requirements"}
            </Typography>
            <div className={classes.requirementsList}>
              <div className={classes.requirementItem}>
                <span
                  style={{
                    color: passwordRequirements.length ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.length ? "✓" : "•"} At least 8
                  characters
                </span>
              </div>
              <div className={classes.requirementItem}>
                <span
                  style={{
                    color: passwordRequirements.uppercase ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.uppercase ? "✓" : "•"} At least one
                  uppercase letter
                </span>
              </div>
              <div className={classes.requirementItem}>
                <span
                  style={{
                    color: passwordRequirements.lowercase ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.lowercase ? "✓" : "•"} At least one
                  lowercase letter
                </span>
              </div>
              <div className={classes.requirementItem}>
                <span
                  style={{
                    color: passwordRequirements.number ? "green" : "inherit",
                  }}
                >
                  {passwordRequirements.number ? "✓" : "•"} At least one number
                </span>
              </div>
              <div className={classes.requirementItem}>
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

          <InputField
            label="Confirm Password"
            placeholder="Confirm your new password"
            name="confirmpassword"
            type="password"
            value={formData.confirmpassword}
            onChange={handleChange}
            error={!!errors.confirmpassword}
            rightIcon={<SvgEye />}
          />
          <div className={classes.btnContainer}>
            <Button variant="primary" size="lg" type="submit">
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </CommonModel>
  );
};

export default ChangePasswordModule;
