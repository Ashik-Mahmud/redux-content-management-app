import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import AddBlog from "../pages/dashboard/AddBlog";
import BlogList from "../pages/dashboard/BlogList";
import UpdateBlog from "../pages/dashboard/UpdateBlog";
import Home from "../pages/Home";
import ReadingHistory from "../pages/ReadingHistory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "reading-history",
        element: <ReadingHistory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "update-blog/:id",
        element: <UpdateBlog />,
      },
    ],
  },
]);

export default routes;
