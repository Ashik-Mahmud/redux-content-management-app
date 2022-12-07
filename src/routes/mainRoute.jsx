import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import ErrorPage from "../shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetails />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
