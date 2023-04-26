import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import style from "../Register/register.module.scss";

const Password = (props) => {
  const { reData, validation, handleChange } = props;
  return (
    <>
      <Form action="" className="" onSubmit={(e) => onLogin(e)}>
        <div className="email fild">
          <FormGroup floating>
            <Input
              type="password"
              id="pass"
              name="pass"
              placeholder="Enter Your mail id"
              className={style.input}
              autoComplete="off"
              value={reData.pass}
              onChange={(e) => handleChange(e)}
            />
            <Label htmlFor="pass" className={style.reg_label}>
              Enter Password
            </Label>
            {validation.pass && <p>{validation.pass}</p>}
            {validation.pass && console.log(validation)}
          </FormGroup>
        </div>
        <div className="cPass fild">
          <FormGroup floating>
            <Input
              type="text"
              min="8"
              id="cPass"
              name="cPass"
              placeholder="Last Name"
              className={style.input}
              autoComplete="off"
              value={reData.cPass}
              onChange={(e) => handleChange(e)}
            />
            <Label htmlFor="cPass" className={style.reg_label}>
              Confirm Password
            </Label>
            {validation.cPass && <p>{validation.cPass}</p>}
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

export default Password;
