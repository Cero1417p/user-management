import { Suspense } from "react";
import {
  Await,
  Navigate,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { IUser } from "@/modules/user-management/types";
import { SkeletonLoader } from "@/modules/user-management/components/edit-user/SkeletonLoader";
import { UserForm } from "@/modules/user-management/components/edit-user/components/UserForm";
import { Error } from "@/modules/user-management/components/edit-user/Error";

const EditUserContainer = () => {
  const { user, isUserNew } = useLoaderData() as {
    user: Promise<IUser>;
    isUserNew: boolean;
  };

  /*
  const errors = useActionData() as { ok: boolean; message: string };
  if (errors?.ok) {
    return <Navigate to="/users" />;
  }
  * */

  return (
    <Box p={2}>
      <Typography variant="h4">
        {isUserNew ? "Crear" : "Editar"} Usuario
      </Typography>
      <Suspense fallback={<SkeletonLoader />}>
        <Await resolve={user} errorElement={<Error />}>
          {(user) => <UserForm user={user} isUserNew={isUserNew} />}
        </Await>
      </Suspense>
    </Box>
  );
};

export default EditUserContainer;
