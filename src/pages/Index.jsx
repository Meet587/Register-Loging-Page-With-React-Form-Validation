import React, { useReducer } from "react";
import Login from "./Login/index";
import Register from "./Register/Register";
import Dashbord from "./Dashbord/Dashbord";

const reducerMethod = (registrationData, action) => {
  switch (action.type) {
    case "addName": {
      return {
        ...registrationData,
      };
    }
    default: {
      return console.log("error in updating data");
    }
  }
};

const Index = () => {
  const [staete, dispatch] = useReducer(reducerMethod, registrationData);
  const registrationData = {
    fName: "",
    lName: "",
    cNum: "",
    email: "",
    pass: "",
    cPass: "",
    isLogin: false,
  };

  return (
    <div>
      Index
      <Register dispatch={dispatch} />
      <Login />
      <Dashbord />
    </div>
  );
};

export default Index;
