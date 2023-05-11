import { createContext, useEffect, useRef, useState } from "react";
import Index1 from "./Index1";
import { CountContext } from "../../context/countContext";
import Index2 from "./index2";


const Login = () => {
  // const CountContext = createContext(0);
  // const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  //   localStorage.setItem("isAuth", isAuth);
  // }, []);

  const [count, setCount] = useState(0);
  const data = useRef([]);
  // const [data, setData] = useState()
  // console.log(count.current);
  const upwork = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((json) => (data.current = json));
  });
  console.log(data.current)
  return (
    <>
      <>
        <Index1 />
        <Index2 />
      </>
      <button onClick={upwork}>click me {count}</button>
    </>
  );
};

export default Login;
