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
  // console.log(location.state.email)

  const registerData = JSON.parse(localStorage.getItem("Form_data"));

  const user = registerData.find((e) => {
    console.log(e.email);
    return e.email === location.state.email;
  });
  // console.log(user)

  const logOutFun = () => {
    navigate("login")
  }

  return (
    <div>
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardHeader tag="h4">Welcom Mr. {user.fName}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special thanks to Karanbhai</CardTitle>
          <CardText className="card_txt">
            Now you can visite site peacfully or click to logout
          </CardText>
          <Button onClick={logOutFun}>Log Out</Button>
        </CardBody>
        {/* <CardFooter>Footer</CardFooter> */}
      </Card>
    </div>
  );
};

export default Dashbord;
