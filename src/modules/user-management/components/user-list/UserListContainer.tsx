import { Suspense } from "react";
import { Await, Link, useLoaderData, useNavigation } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IUser } from "@/modules/user-management/types/UserTypes";
import { UserTable } from "@/modules/user-management/components/user-list/components/user-table/UserTable";
import { Search } from "@/modules/user-management/components/user-list/components/search/Search";
import { SkeletonLoading } from "@/modules/user-management/components/user-list/SkeletonLoading";
import { Error } from "@/modules/user-management/components/user-list/Error";

const UserListContainer = () => {
  const { users } = useLoaderData() as { users: IUser[] };

  const navigation = useNavigation();

  console.log("navigation-user-list: ", navigation);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      p={2}
    >
      <Grid item container direction="row" gap={1}>
        <Typography variant="h4">Usuarios</Typography>
        <Button
          variant="outlined"
          size="medium"
          component={Link}
          to="edit/new"
          startIcon={<AddIcon />}
        >
          Agregar Nuevo
        </Button>
      </Grid>

      <Suspense fallback={<SkeletonLoading />}>
        <Await resolve={users} errorElement={<Error />}>
          {(users) => (
            <>
              <Grid
                item
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                mb={1}
              >
                <Grid item>
                  <Typography variant="subtitle2">
                    Todos ({users.length})
                  </Typography>
                </Grid>
                <Grid item>
                  <Search />
                </Grid>
              </Grid>
              <Grid item container alignItems="stretch">
                <UserTable users={users} />
              </Grid>
            </>
          )}
        </Await>
      </Suspense>
    </Grid>
  );
};

export { UserListContainer };
