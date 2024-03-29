import React, { useEffect, useState } from "react";
import style from "../Register/register.module.scss";
import Name from "./Name";
import { useNavigate } from "react-router";
import { Button, Form } from "reactstrap";
import Card from "../stylecomponent/card";
import Contact from "./Contact";
import Password from "./Password";

const index = ({ dispatch }) => {
  const navigate = useNavigate();
  const [reData, setReData] = useState({
    fName: "",
    lName: "",
    cNum: "",
    email: "",
    pass: "",
    cPass: "",
    isLogin: false,
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

  const [stap, setStap] = useState(0);
  useEffect(() => {
    let newUserData = localStorage.getItem("Form_data");
    setUserData(newUserData ? JSON.parse(newUserData) : []);
  }, []);
  const submit = () => {
    navigate("/", { state: { ...reData } });
  };

  const downStap = () => {
    setStap((prev) => prev - 1);
  };
  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setReData((prev) => ({ ...prev, [name]: value }));
  }

  function validationFun() {
    let isvalid = true;
    let errors = { ...validation };

    //first Name validation
    if (stap === 0) {
      if (!reData.fName.trim()) {
        isvalid = false;
        errors.fName = "First name is required";
      } else {
        errors.fName = null;
      }
      //last Name validation
      if (!reData.lName.trim()) {
        isvalid = false;
        errors.lName = "Last name is required";
      } else {
        errors.lName = null;
      }
    }

    // email validation
    if (stap === 1) {
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
        errors.email = null;
      }
      const cNumCond = /^[6-9]\d{9}$/;
      if (!reData.cNum.trim()) {
        isvalid = false;
        errors.cNum = "Contact Number is required";
      } else if (!reData.cNum.match(cNumCond)) {
        isvalid = false;
        errors.cNum = "Please Enter a valid Contact Number";
      } else {
        errors.cNum = null;
      }
    }

    //password validation
    if (stap === 2) {
      const cond1 = /^(?=.*[a-z]).{6,20}$/;
      const cond2 = /^(?=.*[A-Z]).{6,20}$/;
      const cond3 = /^(?=.*[0-9]).{6,20}$/;
      const password = reData.pass;
      if (!password) {
        isvalid = false;
        errors.pass = "Password is required";
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
        errors.pass = null;
      }
      //matchPassword validation
      if (!reData.cPass) {
        isvalid = false;
        errors.cPass = "Password confirmation is required";
      } else if (reData.cPass !== reData.pass) {
        isvalid = false;
        errors.cPass = "Password does not match confirmation password";
      } else {
        errors.cPass = null;
      }
    }

    setValidation((prev) => ({ ...prev, ...errors }));
    return isvalid;
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newUserData = [...userData];
    if (stap === 2) {
      newUserData.push(reData);
      setUserData(newUserData);
      localStorage.setItem("Form_data", JSON.stringify(newUserData));
    }

    if (validationFun()) {
      stap === 2 ? submit() : setStap((prev) => prev + 1);
    }
  }
  return (
    <div className={`${style.register_container}`}>
      <div className={style.reg_container1}></div>
      <div className={style.reg_container2}>
        <Card>
          <div className={style.reg_heading}>
            <h3 className={style.reg_title}>Hello Beautiful!</h3>
          </div>
          <Form action="" className="" onSubmit={(e) => handleSubmit(e)}>
            {stap === 0 && (
              <Name
                validation={validation}
                reData={reData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
            {stap === 1 && (
              <Contact
                reData={reData}
                validation={validation}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
            {stap === 2 && (
              <Password
                reData={reData}
                validation={validation}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
            <div className={style.reg_btn_container}>
              {(stap === 1 || stap === 2) && (
                <Button
                  type="button"
                  onClick={(e) => downStap(e)}
                  className={style.reg_btn}
                >
                  Prev
                </Button>
              )}
              <Button type="submit" className={style.reg_btn}>
                Next
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default index;
