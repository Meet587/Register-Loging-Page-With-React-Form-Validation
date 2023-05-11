import React, { Component } from "react";
import { Navigate } from "react-router";

const requireAuth = () => {
  return function authenticatedComponent(props) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  };
  return <Component {...props} />;
};

export default requireAuth;
