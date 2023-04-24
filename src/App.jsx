// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./assets/Login";
import Register from "./assets/Register";
import Dashbord from "./assets/Dashbord";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/*" element={<Login />}></Route>

          <Route path="register" element={<Register />}></Route>
          <Route path="dashbord" element={<Dashbord />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
