import React, { useEffect, useState } from "react";
import style from "../Register/register.module.scss";
import Name from "./Name";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";
import Card from "../stlecomponent/card";
import Contact from "./Contact";
import Password from "./Password";

const index = () => {
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

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    let temObj = { ...reData, [name]: value };
    setReData({ ...temObj, reData });
    console.log(reData);
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

  useEffect(() => {
    window.localStorage.setItem("Form_data", JSON.stringify(userData));
  }, [userData]);

  return (
    <div className={`${style.register_container}`}>
      <div className={style.reg_container1}></div>
      <div className={style.reg_container2}>
        <Card>
          <div className={style.reg_heading}>
            <h3 className={style.reg_title}>Hello Beatifull!</h3>
          </div>
          <Name validation={validation}
              handleSubmit={handleSubmit}
                reData={reData}
             handleChange={handleChange}
          />
          <Contact reData={reData}
             validation={validation}
             handleChange={handleChange}
          />
          <Password
            reData={reData}
            validation={validation}
            handleChange={handleChange}
          />
          <div className={style.reg_btn_container}>
            <Button type="submit" className={style.reg_btn}>
              Prev
            </Button>
            <Button type="submit" className={style.reg_btn}>
              Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default index;
