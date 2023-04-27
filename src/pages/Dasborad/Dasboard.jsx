import React from "react";
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

  const registerData = JSON.parse(localStorage.getItem("Form_data"));

  const user = registerData.find((e) => {
    return e.email === location.state.email;
  });
  // console.log(user)

  const logOutFun = () => {
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
        <CardHeader tag="h4">Welcom Mr. Meet</CardHeader>
        <CardBody className="mb-5">
          <CardTitle tag="h5">Special thanks to Karanbhai</CardTitle>
          <CardText className="card_txt">
            Now you can visite site and moke some stuff like A todo list 
          </CardText>
        </CardBody>
        <CardFooter>
          <Button onClick={logOutFun}>make list</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashbord;
