import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Signup from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
