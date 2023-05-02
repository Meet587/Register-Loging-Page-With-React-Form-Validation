import React, { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
  return <div>AuthProvider</div>;
};
