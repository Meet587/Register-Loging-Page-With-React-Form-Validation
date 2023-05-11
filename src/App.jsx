import React from "react";
import { Route, Routes } from "react-router";
// import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import { priveteRoutes, publicRoute } from "./Routes/routes";
// import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Dashbord from "./Components/Dashbord/Dashbord";
// import Todo from "./Components/Todo-app";
import { useEffect, useState } from "react";
import { Suspense } from "react";
const Todo = React.lazy(() => import("./Components/Todo-app"));
const Login = React.lazy(() => import("./Pages/Login/Login"));

function App() {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <>
      {/* <Login /> */}
      <Routes>
        {/* {publicRoute.map((route) => {
          return <Route path={route.path} Component={route.component} />;
        })}
        {priveteRoutes.map((route) => {
          return <Route path={route.path} Component={route.component} />;
        })} */}
        {/* ---------------publick Route------------------- */}
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route path="register" element={<Registration />} />

        {/* ----------------privete routes--------------- */}
        {isAuth === "true" ? (
          <>
            <Route path="dashbord" element={<Dashbord />} />
            <Route path="/todo" element={<Todo />} />
          </>
        ) : null}
      </Routes>
    </>
  );
}

export default App;
