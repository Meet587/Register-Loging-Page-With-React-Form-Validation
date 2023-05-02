import React, { useEffect } from "react";
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
  let user = {};
  useEffect(() => {
    const registerData = JSON.parse(localStorage.getItem("Form_data"));
    if (location.state !== null) {
      user = registerData.find((e) => {
        return e.email === location.state.email;
      });
    }
  }, []);

  const logOutFun = () => {
    navigate("/Todo-page");
  };
  console.log(user);
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
          <CardTitle tag="h5">Special thanks to Karanbhai</CardTitle>
          <CardText className="card_txt">
            Now you can visite site and moke some stuff like A todo list
          </CardText>
        </CardBody>
        <CardFooter>
          <Button onClick={logOutFun}>make list</Button>
          <Button
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
