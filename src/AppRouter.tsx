import { createBrowserRouter, Navigate } from "react-router-dom";
import userManagement from "@/modules/user-management";
import Layout from "@/common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>index!!</h1>
            <h1>index2!!</h1>
          </div>
        ),
      },
      userManagement,
    ],
  },

  { path: "*", element: <Navigate to="/users" /> },
]);

export { router };
