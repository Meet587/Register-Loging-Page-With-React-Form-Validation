import React, { useState } from "react";
import style from "../Login/login.module.scss";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const index = (props) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    pass: "",
  });
  const [validation, setValidation] = useState({
    email: "",
    pass: "",
    isExist: "",
  });
  const registerData = JSON.parse(localStorage.getItem("Form_data"));

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const LoginSucces = () => {
    navigate("dashbord", { state: { ...loginData } });
  };

  const onLogin = (e) => {
    e.preventDefault();
    let isvalid = true;
    let errors = {...validation};
    let user = registerData.find((obj) => {
      return obj.email == loginData.email && obj.pass == loginData.pass;
    });
    console.log(user)

    if (!loginData.email.trim()) {
      isvalid = false;
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }

    if (!loginData.pass.trim()) {
      isvalid = false;
      errors.pass = "Password is required";
    } else {
      errors.pass = "";

      if (user === undefined) {
        isvalid = false;
        errors.isExist = "User Not Found";
        toast.error("User Not Found");
      } else {
        if (user?.email !== loginData.email) {
          isvalid = false;
          errors.email = "Email is not Found";
        }
        if (user?.pass !== loginData.pass) {
          isvalid = false;
          errors.pass = "Wrong Password";
        }
      }
    }
    setValidation({ ...errors });

    if (isvalid) {
      LoginSucces();
    }
  };
  return (
    <div className={style.main_container}>
      <div className={style.login_cardbody}>
        <div className={style.login_heading}>
          <h3 className={style.login_title}>Hello Again!</h3>
          <h6 className="mb-2  login_subtitle" tag="h6">
            Wellcome back you've been missed!
          </h6>
        </div>
        <Form action="" className="" onSubmit={(e) => onLogin(e)}> 
          <div className="email fild">
            <FormGroup floating>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your mail id"
                className={style.input}
                autoComplete="false"
                value={loginData.email}
                onChange={(e) => handleChangeLogin(e)}
              />
              <Label htmlFor="email" className={style.login_label}>
                Email
              </Label>
              {validation.email && (
                <p className={style.error}>{validation.email}</p>
              )}
              {validation.email && console.log(validation)}
            </FormGroup>
          </div>
          <div className="pass fild">
            <FormGroup floating>
              <Input
                type="password"
                min="8"
                id="pass"
                name="pass"
                placeholder="password"
                className={style.input}
                autoComplete="false"
                value={loginData.pass}
                onChange={(e) => handleChangeLogin(e)}
              />
              <Label htmlFor="pass" className={style.login_label}>
                Password
              </Label>
              {validation.pass && (
                <p className={style.error}>{validation.pass}</p>
              )}
            </FormGroup>
          </div>
          <div className={style.pass_recover}>Recovery Password</div>
          <div className={style.login_btn_container}>
            <Button type="submit" className={style.login_btn}>
              Log In
            </Button>
          </div>
        </Form>
        <div className={style.login_footer}>
          <p className="register_page">
            Don't have an account?
            <Link to="register" className={style.register_link}>
              <span> Register now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
