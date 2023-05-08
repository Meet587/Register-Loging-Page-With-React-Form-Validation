import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import style from "../Register/register.module.scss";

const Contact = (props) => {
  const { reData, validation, handleChange, handleSubmit } = props;
  console.log("contect")
  return (
    <>
      <>
        <div className="email fild">
          <FormGroup floating>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your mail id"
              className={style.input}
              value={reData.email}
              onChange={(e) => handleChange(e)}
            />
            <Label htmlFor="email" className={style.reg_label}>
              Email
            </Label>
            {validation.email && (
              <p className={style.error}>{validation.email}</p>
            )}
          </FormGroup>
        </div>
        <div className="lName fild">
          <FormGroup floating>
            <Input
              type="tel"
              name="cNum"
              id="cNum"
              placeholder="Contact Number"
              className={style.input}
              maxLength="10"
              min="10"
              value={reData.cNum}
              onChange={(e) => handleChange(e)}
            />
            {validation.cNum && (
              <p className={style.error}>{validation.cNum}</p>
            )}
            <Label htmlFor="cNum" className={style.reg_label}>
              Contact No
            </Label>
          </FormGroup>
        </div>
      </>
    </>
  );
};

export default Contact;
