import { createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoutes from "./PublicRoutes/PublicRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/estateData.json"),
        element: <Home />,
      },
      {
        path: "/estateDetails/:id",
        loader: () => fetch("/estateData.json"),
        element: <EstateDetails />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        ),
      },
    ],
  },
]);
export default routes;
