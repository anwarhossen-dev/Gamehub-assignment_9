
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Profile from "../Pages/Profile";
import GamesCard from "../Pages/GamesCard";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../MainLayout/ManLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "gamescard",
        element: (
          <PrivateRoute>
            <GamesCard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;


// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../Pages/HomePage";
// import AboutUs from "../Pages/AboutUs";
// import SignUp from "../Pages/SignUp";
// import SignIn from "../Pages/SignIn";
// import Profile from "../Pages/Profile";
// import GamesCard from "../Pages/GamesCard";
// import GameDetail from "../Pages/GameDetail";
// import ErrorPage from "../Pages/ErrorPage";
// import MainLayout from "../MainLayout/ManLayout";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import gameData from "../Game.json";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "about-us", element: <AboutUs /> },
//       {
//         path: "gamescard",
//         element: (
//           <PrivateRoute>
//             <GamesCard />
//           </PrivateRoute>
//         ),
//         loader: () => gameData,
//       },
//       {
//         path: "profile",
//         element: (
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         ),
//       },
//       { 
//         path: "game/:id",
        
//         element: <GameDetail />
//        }, 
//     ],
//   },
//   { path: "/signup", element: <SignUp /> },
//   { path: "/signin", element: <SignIn /> },
//   { path: "*", element: <ErrorPage /> },
// ]);

// export default router;
