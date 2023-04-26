import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import style from "../Register/register.module.scss";

const Name = (props) => {
  const { validation, reData, handleChange, handleSubmit } = props;
  return (
    <>
      <div className="email fild">
        <FormGroup floating>
          <Input
            type="fName"
            id="fName"
            name="fName"
            placeholder="Enter Your mail id"
            className={style.input}
            autoComplete="off"
            value={reData.fName}
            onChange={(e) => handleChange(e)}
          />
          <Label htmlFor="fName" className={style.reg_label}>
            First Name
          </Label>
          {validation.fName && (
            <p className={`${style.error} text-danger`}>{validation.fName}</p>
          )}
          {validation.fName && console.log(validation)}
        </FormGroup>
      </div>
      <div className="lName fild">
        <FormGroup floating>
          <Input
            type="text"
            min="8"
            id="lName"
            name="lName"
            placeholder="Last Name"
            className={style.input}
            autoComplete="off"
            value={reData.lName}
            onChange={(e) => handleChange(e)}
          />
          <Label htmlFor="lName" className={style.reg_label}>
            Last Name
          </Label>
          {validation.lName && (
            <p className={style.error}>{validation.lName}</p>
          )}
        </FormGroup>
      </div>

      {/* <div className={style.reg_footer}>
          <p className="register_page">
            Don't have an account?
            <Link to="register" className={style.register_link}>
              <div> Register now</div>
            </Link>
          </p>
        </div> */}
    </>
  );
};

export default Name;
