import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";

const Dashbord = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const registerData = JSON.parse(localStorage.getItem("Form_data"));
    console.log(registerData);
    if (location.state !== null) {
      let getUser = registerData.find((e) => {
        return e.email === location.state.email;
      });
      setUser(getUser);
    }
  }, []);

  const Todo = () => {
    navigate("/Todo-page");
  };
  return (
    <div>
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardHeader tag="h4">Welcom Mr. {user.fName}</CardHeader>
        <CardBody className="mb-5">
          <CardText className="card_txt">
            Now you can visite site and moke some stuff like A todo list
          </CardText>
        </CardBody>
        <CardFooter className="d-flex justify-content-between">
          <Button
            className="btn btn-soft-secondary waves-effect waves-light btn btn-secondary"
            onClick={Todo}
          >
            make list
          </Button>
          <Button
            className="btn btn-soft-secondary waves-effect waves-light btn btn-secondary"
            onClick={(e) => {
              localStorage.setItem("isAuth", false);
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashbord;
