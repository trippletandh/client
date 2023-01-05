import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Products from "../Pages/Products";

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
    ],
  },
]);
export default router;
