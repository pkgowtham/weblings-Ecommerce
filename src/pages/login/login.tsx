import React, { useEffect, useState } from "react";
import { useStyle } from "./loginStyle";
import login from '../../assets/images/login.svg';
import SvgEye from "../../custom-icons/Eye";
import SvgLogo from "../../custom-icons/Logo";
import { useNavigate } from "react-router-dom";
import { useMiddlewareDispatch } from "../../store/apiMiddleware";
import InputField from "../../components/input/main";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useStore } from "../../store";
import { deepGet } from "../../util/util";

const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const { store } = useStore();
  const dispatch = useMiddlewareDispatch();
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "email":
        if (!value.match(emailRegex)) {
          errorMessage = "Invalid Email";
        }
        break;
      case "password":
        if (!value.match(passwordRegex)) {
          errorMessage = "Password Must Contain 8 charcters";
        }
        break;
      default:
        break;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const isFormValid = () => {
    return (
    //   formData.email &&
    //   formData.password &&
      !errors.email &&
      !errors.password
    );
  };

  useEffect(() => {
    if(store.adminLogin.isSuccessCreate){
      navigate("/layout/dashboard")
      localStorage.setItem(
        "authToken",
        store.adminLogin.dataCreate?.token
      )
      // dispatch({
      //   type:"USER_ADMIN_CREATE_API_CLEAR"
      // })
    }
  }, [deepGet(store,"adminLogin.isSuccessCreate")])
  

  const handleLogin = () => {
    dispatch({
      type: "LOGIN_API_SUCCESS",
      payload: {
        authToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMWEwYWIxLTE0YTEtNDAxNi1iMmVkLTJlOWRmYTQxNDI0NSIsImlhdCI6MTc0MTk0NDQ5MiwiZXhwIjoxNzQ0NTM2NDkyfQ.vJVESJVx1hSJZavuQfohBrNB7ygbg3pQOgjwGAFg-rw",
        message: "",
        meta: "",
        data: {
          id: "",
          name: "",
          org: {
            id: "981f70a8-a270-42a8-b82d-f905986b6480",
            name: "Weblings",
            employee:{
              id:"00fddecf-56ca-4840-b85d-b95b26564f8a",
              email:"Praveen.g25032003@example.com",
            },
            buId: {
              id: "d3a5684e-9a70-4faf-83f8-7d5fa63c80ea",
              name: "weblings-TUP",
            },
            bulId: {
              id: "1de7d660-34e4-4877-9147-a8e87cca4cc0",
              name: "Tiruppur",
            },
            dept: {
              id: "",
              name: "",
            },
          },
          permission: {
            moduleId:"03cb4701-6d6a-43bb-b775-f09854584504",
            role: {
              id: "",
              name: "",
            },
            permissions: ["", ""],
          },
          plan: {
            eoffice: {
              planId: "",
              name: "",
            },
            streamline: {
              planId: "",
              name: "",
            },
          },
        },
      },
    });
    localStorage.setItem(
      "authToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMWEwYWIxLTE0YTEtNDAxNi1iMmVkLTJlOWRmYTQxNDI0NSIsImlhdCI6MTc0MTk0NDQ5MiwiZXhwIjoxNzQ0NTM2NDkyfQ.vJVESJVx1hSJZavuQfohBrNB7ygbg3pQOgjwGAFg-rw"
    );

    navigate("/layout/dashboard")
  }

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      let newErrors = { ...errors };
  
      // if (!formData.name) newErrors.name = "Shift Name is required";
      // if (!formData.customCode)
      //   newErrors.customCode = "Shift Code is required is required";
      // setErrors(newErrors);
  
      const noErrors = Object.values(newErrors).every((err) => err === "");
  
      // if (noErrors) {
       
       
      // } else {
      //   console.log("Errors in form:", newErrors);
      // }
      dispatch({
        type: "USER_ADMIN_CREATE_API_REQUEST",
        payload: {
          url: "/userAdmin/login",
          method: "POST",
          body: {
            email: formData.email,
            password: formData.password,
          },
        },
      });
    };

  return (
    <div className={classes.loginMainContainer}>
      <div className={classes.loginContainer}>
        <div className={classes.loginImageContainer}>
          <img
            className={classes.loginImage}
            src={login}
            alt="login"
            width={"auto"}
            height={"100%"}
          />
        </div>
        <div className={classes.loginInputMainContainer}>
          <div className={classes.loginImgHead}>
            <SvgLogo />
            <h4>Log In To Your Account</h4>
          </div>
          <div className={classes.loginInputField}>
            <InputField>
              <Input
                label="Email Address"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </InputField>
            <div className={classes.loginInputFieldForget}>
              <InputField>
                <Input
                  label="Password"
                  placeholder="Password"
                  rightIcon={<SvgEye className={classes.customIcon} />}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                />
              </InputField>
              <a className={classes.loginInputFieldLink} href="">
                Forget Password?
              </a>
            </div>
            <div className={classes.loginInputFieldButton}>
              <Button
                element="button"
                brand
                className={classes.loginButton}
                onClick={handleSubmit}
                disabled={Boolean(!isFormValid())}
              >
                Log In
              </Button>
              <p className={classes.loginInputFieldPara}>or continue with</p>
              <Button element="button" primary>
                Google
              </Button>
            </div>
            <div>
              <a className={classes.loginInputFieldLink} href="">
                Do not have an account? Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
