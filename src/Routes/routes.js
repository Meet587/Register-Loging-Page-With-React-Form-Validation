
//public route
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

// private route
import Dashbord from "../Components/Dashbord/Dashbord";
import Todo from "../Components/Todo-app/index";


export const publicRoute = [
  {
    path: "registration",
    component: <Registration />
  },
  {
    path: "login",
    component: <Login />,
  },
];

export const priveteRoutes = [
  {
    path: "dashboard",
    component: <Dashbord />,
  },
  {
    path: "todo-app",
    component: <Todo />,
  },
];


