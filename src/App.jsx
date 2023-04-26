// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// import Login from "./assets/Login";
// import Register from "./assets/Register";
import Dashbord from "./assets/Dashbord";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from "./pages/Login/index";
import Register from "./pages/Register/Register";
import R404 from "./pages/404";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="dashbord" element={<Dashbord />}></Route>
          <Route path="*" element={<R404 />}></Route>

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

{
  /* <Route path="/*" element={<Login />}></Route>
<Route path="register" element={<Register />}></Route>
<Route path="dashbord" element={<Dashbord />}></Route> */
}
