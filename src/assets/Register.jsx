import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Form, Label, FormGroup, Input, Button, h3 } from "reactstrap";

const Register = () => {
  const navigate = useNavigate();
  const [reData, setReData] = useState({
    fName: "",
    lName: "",
    cNum: "",
    email: "",
    pass: "",
    cPass: "",
  });
  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    cNum: "",
    email: "",
    pass: "",
    cPass: "",
  });
  const [userData, setUserData] = useState([]);

  const submit = () => {
    navigate("/", { state: { ...reData } });
  };

  function handleChange(key, e) {
    e.preventDefault();
    let value = e.target.value;
    reData[key] = value;
    let temObj = { ...reData };

    setReData({ ...temObj, reData });
    // console.log(reData);
  }

  const validationFun = () => {
    let isvalid = true;
    let errors = validation;

    //first Name validation
    if (!reData.fName.trim()) {
      isvalid = false;
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!reData.lName.trim()) {
      isvalid = false;
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }
    // email validation
    const emailCond =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    if (!reData.email.trim()) {
      isvalid = false;
      errors.email = "Email is required";
    }
    if (!reData.email.match(emailCond)) {
      isvalid = false;
      errors.email = "Please Enter a valid email address";
    } else {
      errors.email = "";
    }

    const cNumCond = /^[6-9]\d{9}$/;
    if (!reData.cNum.trim()) {
      isvalid = false;
      errors.cNum = "Contact Number is required";
    } else if (!reData.cNum.match(cNumCond)) {
      isvalid = false;
      errors.cNum = "Please Enter a valid Contact Number";
    } else {
      errors.cNum = "";
    }
    //password validation
    const cond1 = /^(?=.*[a-z]).{6,20}$/;
    const cond2 = /^(?=.*[A-Z]).{6,20}$/;
    const cond3 = /^(?=.*[0-9]).{6,20}$/;
    const password = reData.pass;
    if (!password) {
      isvalid = false;
      errors.pass = "password is required";
    } else if (password.length < 6) {
      isvalid = false;
      errors.pass = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      isvalid = false;
      errors.pass = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      isvalid = false;
      errors.pass = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      isvalid = false;
      errors.pass = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      isvalid = false;
      errors.pass = "Password must contain at least a number";
    } else {
      errors.pass = "";
    }
    //matchPassword validation
    if (!reData.cPass) {
      isvalid = false;
      errors.cPass = "Password confirmation is required";
    } else if (reData.cPass !== reData.pass) {
      isvalid = false;
      errors.cPass = "Password does not match confirmation password";
    } else {
      errors.cPass = "";
    }

    setValidation(errors);
    return isvalid;
  };

  function handleSubmit(e) {
    e.preventDefault();
    let temUserData = [...userData];
    let tempObj = { ...reData };
    temUserData.push(tempObj);
    setUserData([...temUserData]);

    if (validationFun()) {
      submit();
    }
  }

  useEffect(() =>{
    window.localStorage.setItem('Form_data', JSON.stringify(userData))
  },[userData])

  return (
    <React.Fragment>
      <Container>
        <div className="container1">
          <div className="heading">
            <h3>Registration Form</h3>
          </div>

          <Form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col md={6}>
                <div className="fName fild">
                  <FormGroup>
                    <Label htmlFor="fName">First Name</Label>
                    <Input
                      type="text"
                      id=" "
                      placeholder="First Name"
                      className="Input"
                      value={reData["fName"]}
                      onChange={(e) => handleChange("fName", e)}
                    />
                    {validation.fName && <p>{validation.fName}</p>}
                  </FormGroup>
                </div>
              </Col>
              <Col md={6}>
                <div className="lname fild">
                  <FormGroup>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input
                      type="text"
                      id="lname"
                      placeholder="Last Name"
                      className="input"
                      value={reData["lName"]}
                      onChange={(e) => handleChange("lName", e)}
                    />
                    {validation.lName && <p>{validation.lName}</p>}
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="email fild">
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Enter Your mail id"
                      className="input"
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      value={reData["email"]}
                      onChange={(e) => handleChange("email", e)}
                    />
                    {validation.email && <p>{validation.email}</p>}
                  </FormGroup>
                </div>
              </Col>
              <Col md={6}>
                <div className="cNum fild">
                  <FormGroup>
                    <Label htmlFor="cNum">Contact</Label>
                    <Input
                      type="tel"
                      id="cNum"
                      placeholder="Contact Number"
                      className=""
                      maxLength="10"
                      min="10"
                      value={reData["cNum"]}
                      onChange={(e) => handleChange("cNum", e)}
                    />
                    {validation.cNum && <p>{validation.cNum}</p>}
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="pass fild">
                  <FormGroup>
                    <Label htmlFor="pass">Password</Label>
                    <Input
                      type="password"
                      min="8"
                      id="pass"
                      placeholder="password"
                      className="input"
                      // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={reData["pass"]}
                      onChange={(e) => handleChange("pass", e)}
                    />
                    {validation.pass && <p>{validation.pass}</p>}
                  </FormGroup>
                </div>
              </Col>
              <Col md={6}>
                <div className="cPass fild">
                  <FormGroup>
                    <Label htmlFor="cPass">Confirm Password</Label>
                    <Input
                      type="text"
                      id="cPass"
                      min="8"
                      placeholder="Confirm Password"
                      className="input"
                      value={reData["cPass"]}
                      onChange={(e) => handleChange("cPass", e)}
                    />
                    {validation.cPass && <p>{validation.cPass}</p>}
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <div className="btn">
              <Button type="submit" id="myBtn">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Register;
