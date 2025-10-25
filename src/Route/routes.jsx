import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Aboutus from "../Pages/Aboutus";
import ManLayout from "../MainLayout/ManLayout"; 
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManLayout />, 
    children: [
      {
        index: true,
        element: <HomePage />, 
      },
      {
        path: "about-us", 
        element: <Aboutus />, 
      },
  
    ], // ✅ close the children array here
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>, 
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>, 
  },
    {
    path: "/signup",
    element: <SignUp></SignUp>, 
  },
  {
    path: "/signin",
    element: <SignIn/>, 
  },
]);

export default router;
