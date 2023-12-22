import { RouteObject } from "react-router-dom";

import { UserListContainer } from "@/modules/user-management/components/user-list/UserListContainer";
import { Error } from "@/modules/user-management/components/user-list/Error";
import { loader as userListLoader } from "@/modules/user-management/components/user-list/loader";

import EditUserContainer from "@/modules/user-management/components/edit-user/EditUserContainer";
import { loader as editLoader } from "@/modules/user-management/components/edit-user/loader";
import { Error as EditUserErrorPage } from "@/modules/user-management/components/edit-user/Error";
import { action as editAction } from "@/modules/user-management/components/edit-user/action";

import { action as deleteUserAction } from "@/modules/user-management/components/delete-user/action";

const UserRouter: RouteObject = {
  path: "/users",
  children: [
    {
      index: true,
      element: <UserListContainer />,
      errorElement: <Error />,
      loader: userListLoader,
    },
    {
      path: "edit/:userId",
      element: <EditUserContainer />,
      action: editAction,
      loader: editLoader,
      errorElement: <EditUserErrorPage />,
    },
    {
      path: ":userId/destroy",
      action: deleteUserAction,
      element: <h1>eliminando....</h1>,
      errorElement: <div>Oops! There was an error.</div>,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ],
};

export { UserRouter };
