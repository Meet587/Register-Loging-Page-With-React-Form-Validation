import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const Navbar = () => {
  function handleClick({ isActive }) {
    return {
      color: isActive ? "red" : "black",
    };
  }
  return (
    <Nav className={"navbar_container"}>
      <NavLink style={handleClick} to="dashbord">
        Dashbord
      </NavLink>
      <br />
      <NavLink style={handleClick} to="todo">
        To-do App
      </NavLink>
    </Nav>
  );
};

export default Navbar;
