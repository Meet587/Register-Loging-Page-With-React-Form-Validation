// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// import Login from "./assets/Login";
// import Register from "./assets/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from "./pages/Login/index";
import Register from "./pages/Register/Register";
import R404 from "./pages/404";
import Todo from "./pages/Todo List/Todo";
import Dashbord from "./pages/Dasborad/Dasboard";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          {/* {!isAuth ? (
            <>
              <Route
                path="/"
                element={<Index isAuth={isAuth} setIsAuth={setIsAuth} />}
              ></Route>
              <Route path="register" element={<Register />}></Route>
            </>
          ) : (
            <>
              <Route element={<PrivateRoutes />}>
                <Route path="dashbord" element={<Dashbord />}></Route>
                <Route path="Todo-page" element={<Todo />}></Route>
              </Route>
            </>
          )} */}
          <Route
            path="/"
            element={<Index isAuth={isAuth} setIsAuth={setIsAuth} />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="dashbord" element={<Dashbord />}></Route>
            <Route path="Todo-page" element={<Todo />}></Route>
          </Route>
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
