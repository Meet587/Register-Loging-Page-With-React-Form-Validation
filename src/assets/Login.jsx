import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Toast } from "react-bootstrap";
import {
  Form,
  Label,
  FormGroup,
  Input,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "./login.scss";

const Login = () => {
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
    let errors = validation;

    let user = registerData.find((e) => {
      return e.email === loginData.email && e.pass === loginData.pass;
    });

    if (!loginData.email.trim()) {
      isvalid = false;
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }

    if (!loginData.pass.trim()) {
      isvalid = false;
      errors.pass = "PassWord is required";
    } else {
      errors.pass = "";

      if (user === undefined) {
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
    } else {
      console.log("no");
    }
  };

  return (
    <React.Fragment>
      <Container className="login_container">
        <Card className="login_cadr">
          <CardBody>
            <CardTitle tag="h5">Hello Again!</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Welcome back you'vebeen missed!
            </CardSubtitle>
            <Form action="" className="form" onSubmit={(e) => onLogin(e)}>
              <div className="email fild">
                <FormGroup floating>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your mail id"
                    className="input"
                    autoComplete="false"
                    value={loginData.email}
                    onChange={(e) => handleChangeLogin(e)}
                  />
                  <Label htmlFor="email">Email</Label>
                  {validation.email && <p>{validation.email}</p>}
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
                    className="input"
                    autoComplete="false"
                    value={loginData.pass}
                    onChange={(e) => handleChangeLogin(e)}
                  />
                  <Label htmlFor="pass">Password</Label>
                  {validation.pass && <p>{validation.pass}</p>}
                </FormGroup>
              </div>
              <div className="btn">
                <button type="submit" className="login_btn">
                  Log In
                </button>
              </div>
            </Form>
            <div className="center">
              <p className="register_page">
                Don't have an account ?
                <Link to="register" className="register_link">
                  <span>Signup now</span>
                </Link>
              </p>
            </div>

          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Login;
