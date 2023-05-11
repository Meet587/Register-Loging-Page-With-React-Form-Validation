import { createContext } from "react";

export const CountContext = () => {
  const countContext = createContext(0);

  return countContext;
};
